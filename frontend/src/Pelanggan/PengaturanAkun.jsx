import { useEffect, useState } from 'react';
import NavSidePelanggan from '../Components/NavSidePelanggan';
import UbahFoto from '../assets/img/ubah-foto.png';
import axios from 'axios';

function PengaturanAkun() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getMe = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getme');

        // return response.data;

        setUser(response.data);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    };

    getMe();
  }, []);

  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleImageClick = () => {
    document.getElementById('my-file').click(); // Trigger input file click
  };

  const updateUser = async () => {
    // e.preventDefault();
    try {
      const formUpdate = new FormData();

      formUpdate.append('username', username);
      formUpdate.append('fullname', fullName);
      formUpdate.append('address', address);
      formUpdate.append('phone', phone);
      formUpdate.append('email', email);

      formUpdate.append('photoProfile', imageData);

      //updateuser
      await axios.patch(`http://localhost:5000/user/${user.uuid}`, formUpdate, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log('data user', formUpdate);
      console.log('image', imageData);
      alert('Berhasil mengubah data akun');
      window.location.reload();
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  const updateUserPassword = async () => {
    try {
      await axios.patch(`http://localhost:5000/user/password/${user.uuid}`, {
        password: password,
        confPassword: password,
      });

      console.log('berhasil update password user');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  const handleSubmit = () => {
    // e.preventDefault();

    updateUser();
    updateUserPassword();
  };
  return (
    <div>
      <NavSidePelanggan />

      {/* Pengaturan Section Start */}
      <div className="p-4 sm:ml-[17rem]">
        <div className="w-full px-4 py-8 pb-20 md:px-12 mt-16">
          <div className="mb-8">
            <h1 className="mb-4 text-xl font-bold text-sky-500 md:text-3xl">
              Akun Saya
            </h1>
            {/* <img
              src={user?.profileURL}
              alt=""
              className="rounded-full mx-auto"
              width="150"
            /> */}
          </div>
          <div className="mx-auto w-32 text-center my-4">
            <div className="relative w-64">
              <img
                className="w-32 h-32 rounded-full absolute "
                src={image || user?.profileURL}
                alt=""
              />
              <div
                className=" w-32 h-32 group hover:bg-gray-400 opacity-50 rounded-full flex justify-center items-center cursor-pointer transition duration-500"
                onClick={handleImageClick} // Trigger file input click on image click
              >
                <input
                  type="file"
                  onChange={(e) => {
                    setImage(URL.createObjectURL(e.target.files[0]));
                    // setUserDataUpdate({
                    //   ...userDataUpdate,
                    //   profile: e.target.files[0],
                    // });
                    setImageData(e.target.files[0]);
                  }}
                  className="hidden"
                  id="my-file"
                  name="image"
                  accept="image/*"
                />
                <img
                  className="hidden group-hover:block  w-8"
                  src="https://www.svgrepo.com/show/33565/upload.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <label
            htmlFor="nama"
            className="block font-bold text-lg text-sky-500"
          >
            Nama Lengkap
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            className="w-full mb-8 py-4 bg-white border-b border-dark text-gray-500 outline-none"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder={user?.fullname}
          />

          <label
            htmlFor="username"
            className="block font-bold text-lg text-sky-500"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full mb-8 py-4 bg-white border-b border-dark text-gray-500 outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={user?.username}
          />

          <label
            htmlFor="telepon"
            className="block font-bold text-lg text-sky-500"
          >
            Nomor Telepon
          </label>
          <input
            type="text"
            id="telepon"
            name="telepon"
            className="w-full mb-8 py-4 bg-white border-b border-dark text-gray-500 outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={user?.phone}
          />

          <label
            htmlFor="alamat"
            className="block font-bold text-lg text-sky-500"
          >
            Alamat
          </label>
          <input
            type="text"
            id="alamat"
            name="alamat"
            className="w-full mb-8 py-4 bg-white border-b border-dark text-gray-500 outline-none"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder={user?.address}
          />

          <label
            htmlFor="email"
            className="block font-bold text-lg text-sky-500"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mb-8 py-4 bg-white border-b border-dark text-gray-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={user?.email}
          />

          <label
            htmlFor="password"
            className="block font-bold text-lg text-sky-500"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full mb-12 py-4 bg-white border-b border-dark text-gray-500 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="***************"
          />

          <div className="w-full text-center">
            {/* <a
              href="akun-saya.html"
              className="py-3 px-4 text-white bg-sky-700 rounded-lg"
            >
              Simpan
            </a> */}
            <button
              onClick={handleSubmit}
              className="py-3 px-4 text-white bg-sky-700 rounded-lg"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
      {/* Pengaturan Section End */}
    </div>
  );
}

export default PengaturanAkun;
