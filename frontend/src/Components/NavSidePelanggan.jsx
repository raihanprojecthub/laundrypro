import SidebarIcon from '../assets/icon/sidebar.svg';
import LaundryproLogo from '../assets/img/laundrypro-logo.png';
import FotoProfile from '../assets/img/foto-profile.png';
import NavbarIcon from '../assets/icon/navbar.svg';
import CircleFilled from '../assets/icon/circle-filled.svg';
import AkunSaya from '../assets/icon/akun-saya.svg';
import RiwayatPemesanan from '../assets/icon/riwayat-pemesanan.svg';
import PengaturanAkun from '../assets/icon/pengaturan.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function NavSidePelanggan() {
  const [user, setUser] = useState(null);
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

  // Toggle class active navbar
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const handleNavbarButtonClick = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  // Toggle class active sidebar
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleSidebarButtonClick = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      {/* Navbar Section Start */}
      <nav className="bg-white border-gray-200 fixed w-full z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-8 py-4 lg:py-6 xl:px-0">
          <button
            id="sidebar-button"
            onClick={handleSidebarButtonClick}
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open sidebar</span>
            <img src={SidebarIcon} alt="" className="w-6 h-6" />
          </button>
          <Link to={'/'}>
            <img src={LaundryproLogo} className="h-10" alt="Flowbite Logo" />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {user?.role === 'admin' ? (
              <Link to={'/admin/dashboard'}>
                <img
                  src={user?.profileURL}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
              </Link>
            ) : (
              <Link to={'/akun-saya'}>
                <img
                  src={user?.profileURL}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
              </Link>
            )}

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              id="navbar-button"
              onClick={handleNavbarButtonClick}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <img src={NavbarIcon} alt="" className="w-5 h-5" />
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isNavbarVisible ? '' : 'hidden'}`}
            id="navbar"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-3 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <Link to={'/'}>
                  {/* <a href="beranda.html"> */}
                  <div
                    href="#beranda"
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600"
                  >
                    <span>Beranda</span>
                  </div>
                  {/* </a> */}
                </Link>
              </li>
              <img
                src={CircleFilled}
                alt=""
                className="text-gray-500 hidden md:block"
              />
              <li>
                {/* <a href="pemesanan.html"> */}
                <Link to={'/pemesanan'}>
                  <div
                    href="#pemesanan"
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600"
                  >
                    <span>Pemesanan</span>
                  </div>
                </Link>
                {/* </a> */}
              </li>
              <img
                src={CircleFilled}
                alt=""
                className="text-gray-500 hidden md:block"
              />
              <li>
                {/* <a href="layanan.html"> */}
                <Link to={'/layanan'}>
                  <div
                    href="#layanan"
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600"
                  >
                    <span>Layanan</span>
                  </div>
                </Link>
                {/* </a> */}
              </li>
              <img
                src={CircleFilled}
                alt=""
                className="text-gray-500 hidden md:block"
              />
              <li>
                {/* <a href="tentang.html"> */}
                <Link to={'/tentang'}>
                  <div
                    href="#tentang"
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600"
                  >
                    <span>Tentang</span>
                  </div>
                </Link>
                {/* </a> */}
              </li>
              <img
                src={CircleFilled}
                alt=""
                className="text-gray-500 hidden md:block"
              />
              <li>
                {/* <a href="kontak.html"> */}
                <Link to={'/kontak'}>
                  <div
                    href="#kontak"
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600"
                  >
                    <span>Kontak</span>
                  </div>
                </Link>
                {/* </a> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar Section End */}

      {/* Sidebar Section Start */}
      <aside
        id="sidebar"
        className={`fixed top-0 left-0 z-30 w-72 h-screen pt-20 transition-transform bg-white border-r border-gray-200 sm:translate-x-0 ${isSidebarVisible ? '' : '-translate-x-full'}`}
        aria-label="Sidebar"
      >
        <div className="h-full px-8 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium pt-12">
            <li className="pt-1">
              <Link to={'/akun-saya'}>
                {/* <a href="akun-saya.html"> */}
                <div
                  href="#akun"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <img
                    src={AkunSaya}
                    alt=""
                    className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  />
                  <span className="ms-4">Akun Saya</span>
                </div>
                {/* </a> */}
              </Link>
            </li>
            <li className="pt-1">
              {/* <a href="riwayat-pemesanan.html"> */}
              <Link to={'/riwayat-pemesanan'}>
                <div
                  href="#riwayat"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <img
                    src={RiwayatPemesanan}
                    alt=""
                    className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  />
                  <span className="ms-4">Riwayat Pemesanan</span>
                </div>
              </Link>
              {/* </a> */}
            </li>
            <li className="pt-1">
              {/* <a href="pengaturan.html"> */}
              <Link to={'/pengaturan-akun'}>
                <div
                  href="#pengaturan"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <img
                    src={PengaturanAkun}
                    alt=""
                    className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  />
                  <span className="ms-4">Pengaturan Akun</span>
                </div>
              </Link>
              {/* </a> */}
            </li>
          </ul>
        </div>
      </aside>
      {/* Sidebar Section End */}
    </div>
  );
}

export default NavSidePelanggan;
