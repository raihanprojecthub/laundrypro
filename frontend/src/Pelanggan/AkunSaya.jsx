import FotoProfile from '../assets/img/foto-profile.png';
import LogoutIcon from '../assets/icon/logout.svg';
import NavSidePelanggan from '../Components/NavSidePelanggan';
import Navbar from '../Components/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavbarPelanggan from '../Components/NavbarPelanggan';

function AkunSaya() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    const getMe = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getme');

        // return response.data;
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMe();
  }, []);

  const logoutUser = async (e) => {
    e.preventDefault();
    await axios.delete('http://localhost:5000/logout');
    alert('Logout sukses');
    navigate('/');
  };

  return (
    <div>
      {/* <NavbarPelanggan /> */}
      <NavSidePelanggan />
      {/* Akun Saya Section Start */}
      <div className="p-4 sm:ml-[17rem]">
        <div className="w-full px-4 py-8 pb-20 md:px-12 mt-16">
          <div className="mb-8">
            <h1 className="mb-4 text-xl font-bold text-sky-500 md:text-3xl">
              Akun Saya
            </h1>
            <img
              src={user?.profileURL}
              alt=""
              className="w-32 h-32 rounded-full mx-auto"
            />
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
            className="w-full mb-8 py-4 bg-white border-b border-dark text-gray-500"
            value={user?.fullname}
            disabled
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
            className="w-full mb-8 py-4 bg-white border-b border-dark text-gray-500"
            value={user?.username}
            disabled
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
            className="w-full mb-8 py-4 bg-white border-b border-dark text-gray-500"
            value={user?.phone}
            // placeholder="1111"
            disabled
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
            className="w-full mb-8 py-4 bg-white border-b border-dark text-gray-500"
            // value="Jl. Mohamad Mekar Utama, Mekarkencana No.50, Bojongloa Kaler, Kota Bandung, Jawa Barat"
            value={user?.address}
            // placeholder="aaaaa"
            disabled
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
            className="w-full mb-8 py-4 bg-white border-b border-dark text-gray-500"
            value={user?.email}
            disabled
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
            className="w-full mb-12 py-4 bg-white border-b border-dark text-gray-500"
            value="081234567891"
            disabled
          />

          <div className="w-full text-center">
            {/* <a
              href="../../index.html"
              className="py-3 px-4 text-white bg-sky-500 rounded-lg"
            >
              <img
                src={LogoutIcon}
                alt=""
                className="w-4 h-4 text-white inline mr-1"
              />
              Logout
            </a> */}
            <button
              onClick={logoutUser}
              className="py-3 px-4 text-white bg-sky-500 rounded-lg"
            >
              <img
                src={LogoutIcon}
                alt=""
                className="w-4 h-4 text-white inline mr-1"
              />
              Logout
            </button>
          </div>
        </div>
      </div>
      {/* Akun Saya Section End */}
    </div>
  );
}

export default AkunSaya;
