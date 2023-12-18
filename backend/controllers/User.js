const userDb = require('../models/ModelUser.js');
const fs = require('fs');
const multer = require('multer');
const argon2 = require('argon2');

const storageSettings = multer.diskStorage({
  destination: (req, file, cb) => {
    // Menentukan folder penyimpanan
    cb(null, 'assets/profiles');
  },
  filename: (req, file, cb) => {
    // Menentukan nama file dengan menambahkan timestamp ke nama asli
    const timestamp = Date.now();
    const newFilename = `${timestamp}.png`; // Ubah ekstensi menjadi .png jika diperlukan
    cb(null, newFilename);
  },
});

const uploadFile = multer({ storage: storageSettings }).fields([
  { name: 'photoProfile', maxCount: 1 },
]);

const createUser = async (req, res) => {
  const { fullname, username, phone, address, role, email, password } =
    req.body;

  const hashPassword = await argon2.hash(password);
  try {
    await userDb.create({
      fullname: fullname,
      username: username,
      phone: phone,
      address: address,
      role: role,
      email: email,
      password: hashPassword,
    });

    res.status(200).json({ msg: 'berhasil menambah data pengguna' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const response = await userDb.findAll();

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getUserByUUID = async (req, res) => {
  try {
    const response = await userDb.findOne({
      where: { uuid: req.params.uuid },
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const editUserData = async (req, res) => {
  uploadFile(req, res, async (error) => {
    if (error) {
      return res
        .status(500)
        .json({ msg: 'Terjadi kesalahan dalam unggahan file' });
    }

    const findUser = await userDb.findOne({
      where: { uuid: req.params.uuid },
    });

    if (!findUser) {
      return res.status(404).json({ msg: 'User tidak ditemukan' });
    }
    try {
      if (req.files['photoProfile'] && findUser.profileName != 'zero.png') {
        fs.unlinkSync(`./assets/profiles/${findUser.profileName}`);
      }

      const photoProfileName = req.files[`photoProfile`]
        ? req.files['photoProfile'][0].filename
        : findUser.profileName;

      // const photoProfileURL = `http://localhost:5000/profiles/${photoProfileName}`;
      const photoProfileURL = `http://localhost:5000/profiles/${photoProfileName}`;

      const { fullname, username, email, address, phone, role } = req.body;

      const updatedData = {
        fullname: fullname || findUser.fullname,
        username: username || findUser.username,
        email: email || findUser.email,
        address: address || findUser.address,
        phone: phone || findUser.phone,
        role: role || findUser.role,

        profileName: photoProfileName,
        profileURL: photoProfileURL,
      };

      await userDb.update(updatedData, { where: { uuid: req.params.uuid } });
      res.status(200).json({ msg: 'Data berhasil diperbarui' });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  });
};

const editUserPassword = async (req, res) => {
  const findUser = await userDb.findOne({
    where: { uuid: req.params.uuid },
  });
  const { password, confPassword } = req.body;
  let hashPassword;
  if (password === '' || password === null) {
    hashPassword = findUser.password;
  } else {
    hashPassword = await argon2.hash(password);
  }

  if (password !== confPassword) {
    return res.status(400).json({ msg: 'maaf, password tidak sama...' });
  }
  try {
    await userDb.update(
      {
        password: hashPassword,
      },
      { where: { uuid: req.params.uuid } }
    );
    res.status(200).json({ msg: 'password berhasil diubah' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const findUser = await userDb.findOne({
      where: { uuid: req.params.uuid },
    });

    if (findUser.profileName != 'zero.png' && findUser.profileName !== null) {
      fs.unlinkSync(`./assets/profiles/${findUser.profileName}`);
    }
    await userDb.destroy({
      where: { uuid: req.params.uuid },
    });

    res.status(200).json({ msg: 'user berhasil dihapus' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserByUUID,
  editUserData,
  editUserPassword,
  deleteUser,
  createUser,
};
