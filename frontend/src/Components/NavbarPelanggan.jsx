import LaundryproLogo from '../assets/img/laundrypro-logo.png';
import FotoProfile from '../assets/img/foto-profile.png';
import NavbarIcon from '../assets/icon/navbar.svg';
import CircleFilled from '../assets/icon/circle-filled.svg';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function NavbarPelanggan() {
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

  // Navbar scroll
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsNavbarFixed(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar Section Start */}
      <nav className={`navbar bg-white border-gray-200 fixed w-full z-50 ${isNavbarFixed ? 'navbar-fixed' : ''}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-8 py-4 lg:py-6 xl:px-0">
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
                <NavLink to={'/'} className={({ isActive }) => (isActive ? 'active-pelanggan' : 'hover:text-sky-600 text-gray-900')}>
                  Beranda
                </NavLink>
              </li>
              <img
                src={CircleFilled}
                alt=""
                className="text-gray-500 hidden md:block"
              />
              <li>
                {/* <a href="pemesanan.html"> */}
                <NavLink to={'/pemesanan'} className={({ isActive }) => (isActive ? 'active-pelanggan' : 'hover:text-sky-600 text-gray-900')}>
                  Pemesanan
                </NavLink>
                {/* </a> */}
              </li>
              <img
                src={CircleFilled}
                alt=""
                className="text-gray-500 hidden md:block"
              />
              <li>
                {/* <a href="layanan.html"> */}
                <NavLink to={'/layanan'} className={({ isActive }) => (isActive ? 'active-pelanggan' : 'hover:text-sky-600 text-gray-900')}>
                  Layanan
                </NavLink>
                {/* </a> */}
              </li>
              <img
                src={CircleFilled}
                alt=""
                className="text-gray-500 hidden md:block"
              />
              <li>
                {/* <a href="tentang.html"> */}
                <NavLink to={'/tentang'} className={({ isActive }) => (isActive ? 'active-pelanggan' : 'hover:text-sky-600 text-gray-900')}>
                  Tentang
                </NavLink>
                {/* </a> */}
              </li>
              <img
                src={CircleFilled}
                alt=""
                className="text-gray-500 hidden md:block"
              />
              <li>
                {/* <a href="kontak.html"> */}
                <NavLink to={'/kontak'} className={({ isActive }) => (isActive ? 'active-pelanggan' : 'hover:text-sky-600 text-gray-900')}>
                  Kontak
                </NavLink>
                {/* </a> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar Section End */}
    </div>
  );
}

export default NavbarPelanggan;
