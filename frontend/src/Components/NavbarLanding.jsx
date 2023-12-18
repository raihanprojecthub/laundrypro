import LaundryproLogo from '../assets/img/laundrypro-logo.png';
import NavbarIcon from '../assets/icon/navbar.svg';
import CircleFilled from '../assets/icon/circle-filled.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function NavbarLanding() {
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

  window.onload = function () {
    // Navbar Active Landing Page
    window.addEventListener('scroll', function () {
      var nav = document.querySelector('nav');
      var sections = document.querySelectorAll('section');
      var currentSectionIndex = 0;
      var isNavVisible = false;

      for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var rect = section.getBoundingClientRect();

        if (rect.top <= 0 && rect.bottom > 0) {
          currentSectionIndex = i;
          break;
        }
      }

      var currentSectionLink = document.querySelector('nav a[href="#' + sections[currentSectionIndex].id + '"]');

      var rect = currentSectionLink.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        currentSectionLink.classList.add('active-landing');
      } else {
        currentSectionLink.classList.remove('active-landing');
      }

      // tambahan kode untuk menghapus class 'active'
      for (var i = 0; i < sections.length; i++) {
        var sectionLink = document.querySelector('nav a[href="#' + sections[i].id + '"]');

        if (i !== currentSectionIndex) {
          sectionLink.classList.remove('active-landing');
        }
      }

      if (window.scrollY > 100) {
        if (!isNavVisible) {
          nav.style.display = 'block';
          isNavVisible = true;
        }
      } else {
        if (isNavVisible) {
          nav.style.display = 'none';
          isNavVisible = false;
        }
      }
    });
  };

  return (
    <nav className={`navbar bg-white border-gray-200 fixed w-full z-50 ${isNavbarFixed ? 'navbar-fixed' : ''}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-8 py-4 lg:py-6 xl:px-0">
        <Link to={'/'}>
          <img src={LaundryproLogo} className="h-10" alt="Flowbite Logo" />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* <a href="login.html"> */}
          <Link to={'/login'}>
            <button
              type="button"
              className="text-dark bg-white border-2 border-primary hover:bg-primary hover:text-white transition duration-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Masuk
            </button>
          </Link>
          {/* </a> */}
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
              <a
                href="#hero"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600"
                aria-current="page"
              >
                Beranda
              </a>
            </li>
            <img
              src={CircleFilled}
              alt=""
              className="text-gray-500 hidden md:block"
              width="9"
            />
            <li>
              <a
                href="#layanan"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600"
              >
                Layanan
              </a>
            </li>
            <img
              src={CircleFilled}
              alt=""
              className="text-gray-500 hidden md:block"
              width="9"
            />
            <li>
              <a
                href="#pemesanan"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600"
              >
                Pemesanan
              </a>
            </li>
            <img
              src={CircleFilled}
              alt=""
              className="text-gray-500 hidden md:block"
              width="9"
            />
            <li>
              <a
                href="#testimoni"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600"
              >
                Testimoni
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarLanding;
