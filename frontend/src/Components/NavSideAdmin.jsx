import SidebarIcon from '../assets/icon/sidebar.svg';
import LaundryproLogoPutih from '../assets/img/laundrypro-logo-putih.png';
import Notification from '../assets/icon/notification.svg';
import Search from '../assets/icon/search.svg';
import FotoProfile from '../assets/img/foto-profile.png';
import NavbarIcon from '../assets/icon/navbar.svg';
import DashboardIcon from '../assets/icon/dashbord.svg';
import ManajemenOrderIcon from '../assets/icon/manajemen-order.svg';
import ManajemenUserIcon from '../assets/icon/manajemen-user.svg';
import LaporanPelangganIcon from '../assets/icon/laporan-pelanggan.svg';
import LogoutIcon from '../assets/icon/logout.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function NavSideAdmin() {
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

  const navigate = useNavigate();
  const logoutUser = async (e) => {
    e.preventDefault();
    await axios.delete('http://localhost:5000/logout');
    alert('Sukses logout');
    navigate('/');
  };

  // Toggle class active sidebar
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleSidebarButtonClick = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  window.onload = function() {
    // Navbar scroll
    window.onscroll = function () {
      const header = document.querySelector('nav');
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-none');
      } else {
        header.classList.remove('navbar-none');
      }
    };
  };

  return (
    <div>
      {/* Navbar Section Start */}
      <nav className="bg-primary fixed w-full z-50">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-8 py-4 xl:px-0">
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
          <img src={LaundryproLogoPutih} className="h-10" alt="LaundryPro Logo" />
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex items-center gap-4">
              <img
                src={Notification}
                alt=""
                className="text-white"
                width="24"
              />
              <div className="relative hidden md:block lg:w-64">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <img src={Search} alt="" className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full pl-10 p-2.5"
                  placeholder="Search"
                />
              </div>
              <Link to={'/admin/dashboard'}>
                <img
                  src={user?.profileURL}
                  alt=""
                  className="w-11 h-11 rounded-full"
                />
              </Link>
            </div>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              id="navbar-button"
              className="hidden items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <img src={NavbarIcon} alt="" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>
      {/* Navbar Section End */}

      {/* Sidebar Section Start */}
      <aside
        id="sidebar"
        className={`fixed top-0 left-0 z-30 w-72 h-screen pt-20 transition-transform bg-primary sm:translate-x-0 ${isSidebarVisible ? '' : '-translate-x-full'}`}
        aria-label="Sidebar"
      >
        <div className="h-full px-8 pb-4 overflow-y-auto bg-primary">
          <div className="flex flex-col h-full justify-between">
            <div>
              <ul className="space-y-2 font-medium pt-8">
                <li className="pt-2">
                  {/* <a href="dashboard.html"> */}
                  <Link to={'/admin/dashboard'}>
                    <div
                      href="#admin-dashboard"
                      className="flex items-center p-2 text-white hover:text-dark hover:bg-gray-200 hover:bg-opacity-80 transition duration-300 rounded-lg group"
                    >
                      <img
                        src={DashboardIcon}
                        alt=""
                        className="w-6 h-6 group-hover:brightness-0"
                      />
                      <span className="ms-4">Dashboard</span>
                    </div>
                  </Link>
                  {/* </a> */}
                </li>
                <li className="pt-2">
                  {/* <a href="manajemen-order.html"> */}
                  <Link to={'/admin/manajemen-order'}>
                    <div
                      href="#admin-order"
                      className="flex items-center p-2 text-white hover:text-dark hover:bg-gray-200 hover:bg-opacity-80 transition duration-300 rounded-lg group"
                    >
                      <img
                        src={ManajemenOrderIcon}
                        alt=""
                        className="w-6 h-6 group-hover:brightness-0"
                      />
                      <span className="ms-4">Manajemen Order</span>
                    </div>
                  </Link>
                  {/* </a> */}
                </li>
                <li className="pt-2">
                  {/* <a href="manajemen-user.html"> */}
                  <Link to={'/admin/manajemen-user'}>
                    <div
                      href="#admin-user"
                      className="flex items-center p-2 text-white hover:text-dark hover:bg-gray-200 hover:bg-opacity-80 transition duration-300 rounded-lg group"
                    >
                      <img
                        src={ManajemenUserIcon}
                        alt=""
                        className="w-6 h-6 group-hover:brightness-0"
                      />
                      <span className="ms-4">Manajemen User</span>
                    </div>
                  </Link>
                  {/* </a> */}
                </li>
                <li className="pt-2">
                  {/* <a href="laporan-pelanggan.html"> */}
                  <Link to={'/admin/laporan-pelanggan'}>
                    <div
                      href="#admin-laporan"
                      className="flex items-center p-2 text-white hover:text-dark hover:bg-gray-200 hover:bg-opacity-80 transition duration-300 rounded-lg group"
                    >
                      <img
                        src={LaporanPelangganIcon}
                        alt=""
                        className="w-6 h-6 group-hover:brightness-0"
                      />
                      <span className="ms-4">Laporan Pelanggan</span>
                    </div>
                  </Link>
                  {/* </a> */}
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 font-medium pb-8 ">
                <li className="pt-2">
                  <button
                    onClick={logoutUser}
                    className="flex items-center p-2 text-dark rounded-lg bg-gray-200 group w-full"
                  >
                    {/* <a
                    href="../../index.html"
                  > */}
                    <img
                      src={LogoutIcon}
                      alt=""
                      className="w-6 h-6 brightness-0"
                    />
                    <span className="ms-4">Keluar</span>

                    {/* </a> */}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      {/* Sidebar Section End */}
    </div>
  );
}

export default NavSideAdmin;
