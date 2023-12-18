const laundryDb = require('../models/ModelLaundry');

const createLaundry = async (req, res) => {
  const {
    typeLaundry,
    fullname,
    phone,
    address,
    typeItem,
    amountItem,
    typeItemPrice,
    note,
    ongkir,
  } = req.body;

  // totalPrice
  // userId

  try {
    const totalPrice =
      parseInt(amountItem) * parseInt(typeItemPrice) + parseInt(ongkir);

    await laundryDb.create({
      fullname: fullname,
      phone: phone,
      address: address,
      typeItem: typeItem,
      amountItem: amountItem,
      note: note,

      userId: req.userId,
      statusOrder: 'Sedang Diproses',

      totalPrice: totalPrice,
      typeLaundry: typeLaundry,
      typeItemPrice: typeItemPrice,
      ongkir: ongkir,
    });

    res.status(200).json({ msg: 'berhasil melakukan input data' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getLaundryByWeight = async (req, res) => {
  try {
    const findLaundry = await laundryDb.findAll({
      where: { typeLaundry: 'weight' },
    });

    res.status(200).json(findLaundry);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getLaundryByPiece = async (req, res) => {
  try {
    const findLaundry = await laundryDb.findAll({
      where: { typeLaundry: 'piece' },
    });

    res.status(200).json(findLaundry);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//untuk user yang login saat ini
const getLaundryUserByWeight = async (req, res) => {
  try {
    const findLaundry = await laundryDb.findAll({
      where: { typeLaundry: 'weight', userId: req.userId },
    });

    res.status(200).json(findLaundry);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//untuk user yang login saat ini
const getLaundryUserByPiece = async (req, res) => {
  try {
    const findLaundry = await laundryDb.findAll({
      where: { typeLaundry: 'piece', userId: req.userId },
    });

    res.status(200).json(findLaundry);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getLaundryByUUID = async (req, res) => {
  try {
    const findLaundry = await laundryDb.findOne({
      where: { uuid: req.params.uuid },
    });

    res.status(200).json(findLaundry);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteLaundry = async (req, res) => {
  try {
    await laundryDb.destroy({ where: { uuid: req.params.uuid } });

    res.status(200).json({ msg: 'data laundry berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const editLaundry = async (req, res) => {
  const {
    typeLaundry,
    fullname,
    phone,
    address,
    typeItem,
    amountItem,
    typeItemPrice,
    note,
    statusOrder,
    ongkir,
  } = req.body;

  // totalPrice
  // userId

  try {
    const findLaundry = laundryDb.findOne({ where: { uuid: req.params.uuid } });

    const totalPrice =
      parseInt(amountItem) * parseInt(typeItemPrice) + parseInt(ongkir);

    const editData = {
      fullname: fullname || findLaundry.fullname,
      phone: phone || findLaundry.phone,
      address: address || findLaundry.address,
      typeItem: typeItem || findLaundry.typeItem,
      amountItem: amountItem || findLaundry.amountItem,
      note: note || findLaundry.note,

      typeLaundry: typeLaundry || findLaundry.typeLaundry,
      typeItemPrice: typeItemPrice || findLaundry.typeItemPrice,
      statusOrder: statusOrder || findLaundry.statusOrder,

      totalPrice: totalPrice || findLaundry.totalPrice,
      ongkir: ongkir || findLaundry.ongkir,

      // fullname: fullname ,
      // phone: phone ,
      // address: address ,
      // typeItem: typeItem ,
      // amountItem: amountItem ,
      // note: note ,

      // typeLaundry: typeLaundry ,
      // typeItemPrice: typeItemPrice ,
      // statusOrder: statusOrder ,

      // totalPrice: totalPrice ,
    };

    console.log('body', req.body);
    console.log('inieditdata', editData);
    await laundryDb.update(editData, { where: { uuid: req.params.uuid } });
    res.status(200).json({ msg: 'berhasil melakukan update data' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createLaundry,
  getLaundryByPiece,
  getLaundryByWeight,
  getLaundryUserByPiece,
  getLaundryUserByWeight,
  getLaundryByUUID,
  deleteLaundry,
  editLaundry,
};
