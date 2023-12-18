import Slider from "react-slick";
import "../assets/css/slick.css";
import "../assets/css/slick-theme.css";

import LaundryproLogo from '../assets/img/laundrypro-logo.png';
import NavbarIcon from '../assets/icon/navbar.svg';
import CircleFilled from '../assets/icon/circle-filled.svg';

import PlangLaundrypro from '../assets/img/plang-laundrypro.jpeg';
import HeroImg1 from '../assets/img/Content/hero-1.png';
import HeroImg2 from '../assets/img/Content/hero-2.png';
import HeroImg3 from '../assets/img/Content/hero-3.png';

import AntarJemput from '../assets/icon/antar-jemput.svg';
import LineDashed from '../assets/icon/line-dashed.svg';
import ArrowRight from '../assets/icon/arrow-right.svg';
import ProsesCepat from '../assets/icon/proses-cepat.svg';
import DetergentTerbaik from '../assets/icon/detergent-terbaik.svg';
import BersihHigienis from '../assets/icon/bersih-higienis.svg';
import MesinCanggih from '../assets/icon/mesin-canggih.svg';
import AnekaPakaian from '../assets/icon/aneka-pakaian.svg';

import BerandaPemesanan from '../assets/img/beranda-pemesanan.png';

import QuoteIcon from '../assets/icon/quote.svg';
import UserIcon from '../assets/icon/user.svg';

import FooterPelanggan from '../Components/FooterPelanggan';
import NavbarPelanggan from '../Components/NavbarPelanggan';

import LaundryproLogoPutih from '../assets/img/laundrypro-logo-putih.png';
import MailIcon from '../assets/icon/mail.svg';
import TwitterIcon from '../assets/icon/twitter.svg';
import FacebookIcon from '../assets/icon/facebook.svg';
import InstragamIcon from '../assets/icon/instagram.svg';
import YoutubeIcon from '../assets/icon/youtube.svg';
import TiktokIcon from '../assets/icon/tiktok.svg';
import Navbar from '../Components/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function LandingPage() {
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

  //user sudah login
  function Beranda() {

    const [settingsHero] = useState({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    const [settingsLayanan] = useState({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
        breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

    const [settingsTestimoni] = useState({
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
        breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

    return (
      <>
        {/* Hero Section Start */}
        <section id="hero" className="pt-32 pb-24 md:pt-48 md:pb-32">
          <div className="container">
            <div className="w-full px-4 md:px-0 flex flex-wrap">
              <div className="w-full self-center mt-10 md:mt-0 order-2 md:order-1 md:w-1/2">
                <h1 className="text-4xl font-bold text-dark mb-6 md:text-6xl">
                  LaundryPro
                </h1>

                <h2 className="text-base font-medium text-dark mb-8 lg:text-xl">
                  Anda sibuk? Cucian numpuk! Percayakan kepada kami, <br />
                  Cucian anda pasti bersih, rapih dan nyaman saat
                  beraktifitas.
                </h2>

                <div className="flex gap-2">
                  <Link
                    to={'/pemesanan'}
                    className="my-auto rounded-lg bg-primary py-[10px] px-6 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
                  >
                    {/* <a
                    href="#pemesanan"
                    > */}
                    Pesan Sekarang!
                    {/* </a> */}
                  </Link>
                  <a
                    href="#testimoni"
                    className="my-auto rounded-lg border-2 border-primary py-2 px-6 text-base font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
                  >
                    Testimoni
                  </a>
                </div>
              </div>

              <div id="slick-hero" className="w-full self-center order-1 md:order-2 md:w-1/2 outline-none">
                <Slider {...settingsHero}>
                  <div>
                    <img
                      src={PlangLaundrypro}
                      alt=""
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <img
                      src={HeroImg1}
                      alt=""
                      className="rounded-xl w-full"
                    />
                  </div>
                  <div>
                    <img
                      src={HeroImg2}
                      alt=""
                      className="rounded-xl w-full"
                    />
                  </div>
                  <div>
                    <img
                      src={HeroImg3}
                      alt=""
                      className="rounded-xl w-full"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* Hero Section End */}

        {/* Layanan Section Start */}
        <section id="layanan" className="py-16 md:pt-24 md:pb-32">
          <div className="container">
            <div className="w-full px-4 md:px-0">
              <div className="mx-auto mb-16 text-center">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Layanan
                </h4>
                <h2 className="mb-4 text-2xl font-bold text-dark md:text-4xl">
                  Kami Memberikan Pelayanan Terbaik
                </h2>
              </div>

              <div id="slick-layanan" className="w-full mx-auto md:max-w-5xl">
                <Slider {...settingsLayanan}>
                  <div>
                    <div className="h-72 flex flex-col items-center justify-center px-4 py-8 bg-sky-50 rounded-lg shadow-md">
                      <div className="flex items-center justify-center bg-primary rounded-full mb-4 p-2">
                        <img
                          src={AntarJemput}
                          alt=""
                          className="text-white"
                          width="39"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-4">ANTAR & JEMPUT</h3>
                      <p className="text-center text-sm mb-4">
                        Hemat waktu dengan layanan antar-jemput pakaian Anda,
                        praktis dan efisien.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <Link to={'/layanan'} className="font-medium flex gap-1">
                        <span>Selengkapnya</span>
                        <img src={ArrowRight} alt="" />
                      </Link>
                      {/* <a href="login.html" className="font-medium"></a> */}
                    </div>
                  </div>
                  <div>
                    <div className="h-72 flex flex-col items-center justify-center px-4 py-8 bg-sky-50 rounded-lg shadow-md">
                      <div className="flex items-center justify-center bg-primary rounded-full mb-4 p-2">
                        <img
                          src={ProsesCepat}
                          alt=""
                          className="text-white"
                          width="39"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Proses Cepat</h3>
                      <p className="text-center text-sm mb-4">
                        Kami menjamin proses cepat untuk memastikan pakaian Anda siap digunakan secepat mungkin.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <Link to={'/layanan'} className="font-medium flex gap-1">
                        <span>Selengkapnya</span>
                        <img src={ArrowRight} alt="" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="h-72 flex flex-col items-center justify-center px-4 py-8 bg-sky-50 rounded-lg shadow-md">
                      <div className="flex items-center justify-center bg-primary rounded-full mb-4 p-2">
                        <img
                          src={DetergentTerbaik}
                          alt=""
                          className="text-white"
                          width="39"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-4">DETERGENT TERBAIK</h3>
                      <p className="text-center text-sm mb-4">
                        Pakaian Anda dirawat dengan detergent terbaik, menjaga warna
                        dan kualitas tekstil.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <Link to={'/layanan'} className="font-medium flex gap-1">
                        <span>Selengkapnya</span>
                        <img src={ArrowRight} alt="" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="h-72 flex flex-col items-center justify-center px-4 py-8 bg-sky-50 rounded-lg shadow-md">
                      <div className="flex items-center justify-center bg-primary rounded-full mb-4 p-2">
                        <img
                          src={BersihHigienis}
                          alt=""
                          className="text-white"
                          width="39"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-4">BERSIH & HIGIENIS</h3>
                      <p className="text-center text-sm mb-4">
                        Kami menjamin kebersihan dan kehigienisan pakaian Anda, memberikan hasil terbaik setiap kali.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <Link to={'/layanan'} className="font-medium flex gap-1">
                        <span>Selengkapnya</span>
                        <img src={ArrowRight} alt="" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="h-72 flex flex-col items-center justify-center px-4 py-8 bg-sky-50 rounded-lg shadow-md">
                      <div className="flex items-center justify-center bg-primary rounded-full mb-4 p-2">
                        <img
                          src={MesinCanggih}
                          alt=""
                          className="text-white"
                          width="39"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-4">MESIN CANGGIH</h3>
                      <p className="text-center text-sm mb-4">
                        Menggunakan mesin canggih untuk hasil pencucian maksimal dengan teknologi terkini.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <Link to={'/layanan'} className="font-medium flex gap-1">
                        <span>Selengkapnya</span>
                        <img src={ArrowRight} alt="" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="h-72 flex flex-col items-center justify-center px-4 py-8 bg-sky-50 rounded-lg shadow-md">
                      <div className="flex items-center justify-center bg-primary rounded-full mb-4 p-2">
                        <img
                          src={AnekaPakaian}
                          alt=""
                          className="text-white"
                          width="39"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-4">ANEKA PAKAIAN</h3>
                      <p className="text-center text-sm mb-4">
                        Dari busana hingga linen, kami menerima berbagai jenis pakaian untuk dicuci dengan sempurna.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <Link to={'/layanan'} className="font-medium flex gap-1">
                        <span>Selengkapnya</span>
                        <img src={ArrowRight} alt="" />
                      </Link>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* Layanan Section End */}

        {/* Pemesanan Section Start */}
        <section id="pemesanan" className="py-16 md:pt-24 md:pb-32">
          <div className="container">
            <div className="w-full px-4 md:px-0 flex flex-wrap">
              <div className="w-full self-center md:w-1/2">
                <img
                  src={BerandaPemesanan}
                  alt=""
                  className="rounded-lg"
                  width="600px"
                />
              </div>
              <div className="w-full self-center mt-10 md:mt-0 md:w-1/2">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Pemesanan
                </h4>
                <h2 className="mb-4 text-2xl font-bold text-dark md:text-4xl">
                  Solusi Tepat Untuk <br /> Pakaian Bersih Anda
                </h2>
                <div className="mb-10">
                  <p>
                    Kami menghadirkan Laundry Express kami untuk memberikan
                    Anda pengalaman laundry yang praktis dan cepat. Dalam
                    waktu hanya 2 jam, pakaian Anda akan kembali bersih,
                    harum, dan siap dipakai. Kami mengerti betapa berharganya
                    waktu dan tenaga Anda, itulah mengapa kami menghadirkan
                    solusi yang hemat waktu dan hemat tenaga.
                  </p>
                  <br />
                  <p>
                    Dengan LaundryPro, Anda tidak perlu lagi repot-repot pergi
                    ke tempat laundry fisik, mengantri, atau menunggu
                    berjam-jam untuk pakaian Anda selesai dicuci. Kami telah
                    mengubah cara Anda merawat pakaian dengan memberikan
                    layanan laundry yang dapat diakses secara online. Ini
                    berarti Anda dapat mengatur jadwal pengambilan dan
                    pengantaran pakaian Anda dengan mudah, semua dari
                    kenyamanan rumah Anda.
                  </p>
                  <br />
                  <p>
                    Kami berkomitmen untuk memberikan layanan yang profesional
                    dan andal, sehingga Anda dapat percaya bahwa pakaian Anda
                    dalam perawatan terbaik.
                  </p>
                </div>
                <Link
                  to={'/pemesanan'}
                  className="my-auto rounded-lg bg-primary py-4 px-6 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
                >
                  Pesan Sekarang!
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Pemesanan Section End */}

        {/* Testimoni Section Start */}
        <section id="testimoni" className="pt-16 pb-24 md:pt-24 md:pb-48">
          <div className="container">
            <div className="w-full px-4 md:px-0">
              <div className="mx-auto mb-16 text-center">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Testimoni
                </h4>
                <h2 className="mb-4 text-2xl font-bold text-dark md:text-4xl">
                  Apa Pendapat Mereka Tentang Kami
                </h2>
              </div>

              <div id="slick-testimoni" className="w-full mx-auto md:max-w-7xl">
                <Slider {...settingsTestimoni}>
                  <div>
                    <div className="h-64 flex flex-col justify-between items-start px-4 py-4 w-full bg-sky-50 rounded-lg shadow-md">
                      <img
                        src={QuoteIcon}
                        alt=""
                        className="mb-2 text-secondary rotate-180"
                        width="50"
                      />
                      <p className="text-sm mb-4">
                        Mereka memberikan perhatian khusus pada detail pakaian saya.
                        Saya merasa pakaian saya dalam keadaan terbaik.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="p-2 rounded-full bg-primary">
                          <img
                            src={UserIcon}
                            alt=""
                            className="text-white"
                            width="34"
                          />
                        </div>
                        <div>
                          <p>Ahmad</p>
                          <p>Costumer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-64 flex flex-col justify-between items-start px-4 py-4 w-full bg-sky-50 rounded-lg shadow-md">
                      <img
                        src={QuoteIcon}
                        alt=""
                        className="mb-2 text-secondary rotate-180"
                        width="50"
                      />
                      <p className="text-sm mb-4">
                        LaundryPro adalah solusi terbaik bagi mereka yang memiliki
                        jadwal sibuk. Mereka benar-benar menghemat waktu saya.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="p-2 rounded-full bg-primary">
                          <img
                            src={UserIcon}
                            alt=""
                            className="text-white"
                            width="34"
                          />
                        </div>
                        <div>
                          <p>Yuliana</p>
                          <p>Costumer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-64 flex flex-col justify-between items-start px-4 py-4 w-full bg-sky-50 rounded-lg shadow-md">
                      <img
                        src={QuoteIcon}
                        alt=""
                        className="mb-2 text-secondary rotate-180"
                        width="50"
                      />
                      <p className="text-sm mb-4">
                        Pilihan layanan yang beragam memungkinkan saya untuk
                        menyesuaikan kebutuhan laundry saya. Sangat nyaman!.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="p-2 rounded-full bg-primary">
                          <img
                            src={UserIcon}
                            alt=""
                            className="text-white"
                            width="34"
                          />
                        </div>
                        <div>
                          <p>Rizal</p>
                          <p>Costumer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-64 flex flex-col justify-between items-start px-4 py-4 w-full bg-sky-50 rounded-lg shadow-md">
                      <img
                        src={QuoteIcon}
                        alt=""
                        className="mb-2 text-secondary rotate-180"
                        width="50"
                      />
                      <p className="text-sm mb-4">
                        Pengalaman laundry online pertama saya dan saya sangat
                        senang memilih LaundryPro. Akan menjadi pelanggan setia.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="p-2 rounded-full bg-primary">
                          <img
                            src={UserIcon}
                            alt=""
                            className="text-white"
                            width="34"
                          />
                        </div>
                        <div>
                          <p>Silvia</p>
                          <p>Costumer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-64 flex flex-col justify-between items-start px-4 py-4 w-full bg-sky-50 rounded-lg shadow-md">
                      <img
                        src={QuoteIcon}
                        alt=""
                        className="mb-2 text-secondary rotate-180"
                        width="50"
                      />
                      <p className="text-sm mb-4">
                        Sangat puas dengan pelayanan LaundryPro. Pakaian saya selalu bersih dan wangi setiap kali selesai dicuci!
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="p-2 rounded-full bg-primary">
                          <img
                            src={UserIcon}
                            alt=""
                            className="text-white"
                            width="34"
                          />
                        </div>
                        <div>
                          <p>Ridho</p>
                          <p>Costumer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-64 flex flex-col justify-between items-start px-4 py-4 w-full bg-sky-50 rounded-lg shadow-md">
                      <img
                        src={QuoteIcon}
                        alt=""
                        className="mb-2 text-secondary rotate-180"
                        width="50"
                      />
                      <p className="text-sm mb-4">
                        Website LaundryPro sangat mudah digunakan. Pengaturan jadwal dan pembayaran online membuat hidup saya lebih praktis.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="p-2 rounded-full bg-primary">
                          <img
                            src={UserIcon}
                            alt=""
                            className="text-white"
                            width="34"
                          />
                        </div>
                        <div>
                          <p>Safitri</p>
                          <p>Costumer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-64 flex flex-col justify-between items-start px-4 py-4 w-full bg-sky-50 rounded-lg shadow-md">
                      <img
                        src={QuoteIcon}
                        alt=""
                        className="mb-2 text-secondary rotate-180"
                        width="50"
                      />
                      <p className="text-sm mb-4">
                        Pilihan layanan yang beragam memungkinkan saya untuk menyesuaikan kebutuhan laundry saya. Sangat nyaman!.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="p-2 rounded-full bg-primary">
                          <img
                            src={UserIcon}
                            alt=""
                            className="text-white"
                            width="34"
                          />
                        </div>
                        <div>
                          <p>Fahmi</p>
                          <p>Costumer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-64 flex flex-col justify-between items-start px-4 py-4 w-full bg-sky-50 rounded-lg shadow-md">
                      <img
                        src={QuoteIcon}
                        alt=""
                        className="mb-2 text-secondary rotate-180"
                        width="50"
                      />
                      <p className="text-sm mb-4">
                        Saya telah menjadi pelanggan setia LaundryPro selama bertahun-tahun, dan saya tidak pernah kecewa dengan hasilnya.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="p-2 rounded-full bg-primary">
                          <img
                            src={UserIcon}
                            alt=""
                            className="text-white"
                            width="34"
                          />
                        </div>
                        <div>
                          <p>Tiara</p>
                          <p>Costumer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* Testimoni Section End */}

        <FooterPelanggan />
      </>
    );
  }

  //user belum login
  function Landing() {

    const [settingsHero] = useState({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    const [settingsLayanan] = useState({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
        breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

    const [settingsTestimoni] = useState({
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
        breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

    return (
      <>
        {/* // Hero Section Start */}
        <section id="hero" className="pt-32 pb-24 md:pt-48 md:pb-32">
          <div className="container">
            <div className="w-full px-4 md:px-0 flex flex-wrap">
              <div className="w-full self-center mt-10 md:mt-0 order-2 md:order-1 md:w-1/2">
                <h1 className="text-4xl font-bold text-dark mb-6 md:text-6xl">
                  LaundryPro
                </h1>

                <h2 className="text-base font-medium text-dark mb-8 lg:text-xl">
                  Anda sibuk? Cucian numpuk! Percayakan kepada kami, <br />
                  Cucian anda pasti bersih, rapih dan nyaman saat beraktifitas.
                </h2>

                <div className="flex gap-2">
                  <Link
                    to={'/login'}
                    className="my-auto rounded-lg bg-primary py-[10px] px-6 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
                  >
                    {/* <a
                      href="#pemesanan"
                      > */}
                    Pesan Sekarang!
                    {/* </a> */}
                  </Link>
                  <a
                    href="#testimoni"
                    className="my-auto rounded-lg border-2 border-primary py-2 px-6 text-base font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
                  >
                    Testimoni
                  </a>
                </div>
              </div>

              <div id="slick-hero" className="w-full self-center order-1 md:order-2 md:w-1/2 outline-none">
                <Slider {...settingsHero}>
                  <div>
                    <img
                      src={PlangLaundrypro}
                      alt=""
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <img
                      src={HeroImg1}
                      alt=""
                      className="rounded-xl w-full"
                    />
                  </div>
                  <div>
                    <img
                      src={HeroImg2}
                      alt=""
                      className="rounded-xl w-full"
                    />
                  </div>
                  <div>
                    <img
                      src={HeroImg3}
                      alt=""
                      className="rounded-xl w-full"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* // Hero Section End */}

        {/* // Layanan Section Start */}
        <section id="layanan" className="py-16 md:pt-24 md:pb-32">
          <div className="container">
            <div className="w-full px-4 md:px-0">
              <div className="mx-auto mb-16 text-center">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Layanan
                </h4>
                <h2 className="mb-4 text-2xl font-bold text-dark md:text-4xl">
                  Kami Memberikan Pelayanan Terbaik
                </h2>
              </div>

              <div id="slick-layanan" className="w-full mx-auto md:max-w-5xl">
                <Slider {...settingsLayanan}>
                  <div>
                    <div className="h-72 flex flex-col items-center justify-center px-4 py-8 bg-sky-50 rounded-lg shadow-md">
                      <div className="flex items-center justify-center bg-primary rounded-full mb-4 p-2">
                        <img
                          src={AntarJemput}
                          alt=""
                          className="text-white"
                          width="39"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-4">ANTAR & JEMPUT</h3>
                      <p className="text-center text-sm mb-4">
                        Hemat waktu dengan layanan antar-jemput pakaian Anda,
                        praktis dan efisien.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <Link to={'/login'} className="font-medium flex gap-1">
                        <span>Selengkapnya</span>
                        <img src={ArrowRight} alt="" />
                      </Link>
                      {/* <a href="login.html" className="font-medium"></a> */}
                    </div>
                  </div>
                  <div>
                    <div className="h-72 flex flex-col items-center justify-center px-4 py-8 bg-sky-50 rounded-lg shadow-md">
                      <div className="flex items-center justify-center bg-primary rounded-full mb-4 p-2">
                        <img
                          src={ProsesCepat}
                          alt=""
                          className="text-white"
                          width="39"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-4">Proses Cepat</h3>
                      <p className="text-center text-sm mb-4">
                        Kami menjamin proses cepat untuk memastikan pakaian Anda siap digunakan secepat mungkin.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <Link to={'/login'} className="font-medium flex gap-1">
                        <span>Selengkapnya</span>
                        <img src={ArrowRight} alt="" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="h-72 flex flex-col items-center justify-center px-4 py-8 bg-sky-50 rounded-lg shadow-md">
                      <div className="flex items-center justify-center bg-primary rounded-full mb-4 p-2">
                        <img
                          src={DetergentTerbaik}
                          alt=""
                          className="text-white"
                          width="39"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-4">DETERGENT TERBAIK</h3>
                      <p className="text-center text-sm mb-4">
                        Pakaian Anda dirawat dengan detergent terbaik, menjaga warna
                        dan kualitas tekstil.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <Link to={'/login'} className="font-medium flex gap-1">
                        <span>Selengkapnya</span>
                        <img src={ArrowRight} alt="" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="h-72 flex flex-col items-center justify-center px-4 py-8 bg-sky-50 rounded-lg shadow-md">
                      <div className="flex items-center justify-center bg-primary rounded-full mb-4 p-2">
                        <img
                          src={BersihHigienis}
                          alt=""
                          className="text-white"
                          width="39"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-4">BERSIH & HIGIENIS</h3>
                      <p className="text-center text-sm mb-4">
                        Kami menjamin kebersihan dan kehigienisan pakaian Anda, memberikan hasil terbaik setiap kali.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <Link to={'/login'} className="font-medium flex gap-1">
                        <span>Selengkapnya</span>
                        <img src={ArrowRight} alt="" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="h-72 flex flex-col items-center justify-center px-4 py-8 bg-sky-50 rounded-lg shadow-md">
                      <div className="flex items-center justify-center bg-primary rounded-full mb-4 p-2">
                        <img
                          src={MesinCanggih}
                          alt=""
                          className="text-white"
                          width="39"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-4">MESIN CANGGIH</h3>
                      <p className="text-center text-sm mb-4">
                        Menggunakan mesin canggih untuk hasil pencucian maksimal dengan teknologi terkini.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <Link to={'/login'} className="font-medium flex gap-1">
                        <span>Selengkapnya</span>
                        <img src={ArrowRight} alt="" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="h-72 flex flex-col items-center justify-center px-4 py-8 bg-sky-50 rounded-lg shadow-md">
                      <div className="flex items-center justify-center bg-primary rounded-full mb-4 p-2">
                        <img
                          src={AnekaPakaian}
                          alt=""
                          className="text-white"
                          width="39"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-4">ANEKA PAKAIAN</h3>
                      <p className="text-center text-sm mb-4">
                        Dari busana hingga linen, kami menerima berbagai jenis pakaian untuk dicuci dengan sempurna.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <Link to={'/login'} className="font-medium flex gap-1">
                        <span>Selengkapnya</span>
                        <img src={ArrowRight} alt="" />
                      </Link>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* // Layanan Section End */}

        {/* // Pemesanan Section Start */}
        <section id="pemesanan" className="py-16 md:pt-24 md:pb-32">
          <div className="container">
            <div className="w-full px-4 md:px-0 flex flex-wrap">
              <div className="w-full self-center md:w-1/2">
                <img
                  src={BerandaPemesanan}
                  alt=""
                  className="rounded-lg"
                  width="600px"
                />
              </div>
              <div className="w-full self-center mt-10 md:mt-0 md:w-1/2">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Pemesanan
                </h4>
                <h2 className="mb-4 text-2xl font-bold text-dark md:text-4xl">
                  Solusi Tepat Untuk <br /> Pakaian Bersih Anda
                </h2>
                <div className="mb-10">
                  <p>
                    Kami menghadirkan Laundry Express kami untuk memberikan Anda
                    pengalaman laundry yang praktis dan cepat. Dalam waktu hanya
                    2 jam, pakaian Anda akan kembali bersih, harum, dan siap
                    dipakai. Kami mengerti betapa berharganya waktu dan tenaga
                    Anda, itulah mengapa kami menghadirkan solusi yang hemat
                    waktu dan hemat tenaga.
                  </p>
                  <br />
                  <p>
                    Dengan LaundryPro, Anda tidak perlu lagi repot-repot pergi
                    ke tempat laundry fisik, mengantri, atau menunggu berjam-jam
                    untuk pakaian Anda selesai dicuci. Kami telah mengubah cara
                    Anda merawat pakaian dengan memberikan layanan laundry yang
                    dapat diakses secara online. Ini berarti Anda dapat mengatur
                    jadwal pengambilan dan pengantaran pakaian Anda dengan
                    mudah, semua dari kenyamanan rumah Anda.
                  </p>
                  <br />
                  <p>
                    Kami berkomitmen untuk memberikan layanan yang profesional
                    dan andal, sehingga Anda dapat percaya bahwa pakaian Anda
                    dalam perawatan terbaik.
                  </p>
                </div>
                <Link
                  to={'/login'}
                  className="my-auto rounded-lg bg-primary py-4 px-6 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
                >
                  Pesan Sekarang!
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* // Pemesanan Section End */}

        {/* // Testimoni Section Start */}
        <section id="testimoni" className="pt-16 pb-24 md:pt-24 md:pb-48">
          <div className="container">
            <div className="w-full px-4 md:px-0">
              <div className="mx-auto mb-16 text-center">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Testimoni
                </h4>
                <h2 className="mb-4 text-2xl font-bold text-dark md:text-4xl">
                  Apa Pendapat Mereka Tentang Kami
                </h2>
              </div>

              <div id="slick-testimoni" className="w-full mx-auto md:max-w-7xl">
                <Slider {...settingsTestimoni}>
                  <div>
                    <div className="h-64 flex flex-col justify-between items-start px-4 py-4 w-full bg-sky-50 rounded-lg shadow-md">
                      <img
                        src={QuoteIcon}
                        alt=""
                        className="mb-2 text-secondary rotate-180"
                        width="50"
                      />
                      <p className="text-sm mb-4">
                        Mereka memberikan perhatian khusus pada detail pakaian saya.
                        Saya merasa pakaian saya dalam keadaan terbaik.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="p-2 rounded-full bg-primary">
                          <img
                            src={UserIcon}
                            alt=""
                            className="text-white"
                            width="34"
                          />
                        </div>
                        <div>
                          <p>Ahmad</p>
                          <p>Costumer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-64 flex flex-col justify-between items-start px-4 py-4 w-full bg-sky-50 rounded-lg shadow-md">
                      <img
                        src={QuoteIcon}
                        alt=""
                        className="mb-2 text-secondary rotate-180"
                        width="50"
                      />
                      <p className="text-sm mb-4">
                        LaundryPro adalah solusi terbaik bagi mereka yang memiliki
                        jadwal sibuk. Mereka benar-benar menghemat waktu saya.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="p-2 rounded-full bg-primary">
                          <img
                            src={UserIcon}
                            alt=""
                            className="text-white"
                            width="34"
                          />
                        </div>
                        <div>
                          <p>Yuliana</p>
                          <p>Costumer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-64 flex flex-col justify-between items-start px-4 py-4 w-full bg-sky-50 rounded-lg shadow-md">
                      <img
                        src={QuoteIcon}
                        alt=""
                        className="mb-2 text-secondary rotate-180"
                        width="50"
                      />
                      <p className="text-sm mb-4">
                        Pilihan layanan yang beragam memungkinkan saya untuk
                        menyesuaikan kebutuhan laundry saya. Sangat nyaman!.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="p-2 rounded-full bg-primary">
                          <img
                            src={UserIcon}
                            alt=""
                            className="text-white"
                            width="34"
                          />
                        </div>
                        <div>
                          <p>Rizal</p>
                          <p>Costumer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-64 flex flex-col justify-between items-start px-4 py-4 w-full bg-sky-50 rounded-lg shadow-md">
                      <img
                        src={QuoteIcon}
                        alt=""
                        className="mb-2 text-secondary rotate-180"
                        width="50"
                      />
                      <p className="text-sm mb-4">
                        Pengalaman laundry online pertama saya dan saya sangat
                        senang memilih LaundryPro. Akan menjadi pelanggan setia.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="p-2 rounded-full bg-primary">
                          <img
                            src={UserIcon}
                            alt=""
                            className="text-white"
                            width="34"
                          />
                        </div>
                        <div>
                          <p>Silvia</p>
                          <p>Costumer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-64 flex flex-col justify-between items-start px-4 py-4 w-full bg-sky-50 rounded-lg shadow-md">
                      <img
                        src={QuoteIcon}
                        alt=""
                        className="mb-2 text-secondary rotate-180"
                        width="50"
                      />
                      <p className="text-sm mb-4">
                        Sangat puas dengan pelayanan LaundryPro. Pakaian saya selalu bersih dan wangi setiap kali selesai dicuci!
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="p-2 rounded-full bg-primary">
                          <img
                            src={UserIcon}
                            alt=""
                            className="text-white"
                            width="34"
                          />
                        </div>
                        <div>
                          <p>Ridho</p>
                          <p>Costumer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-64 flex flex-col justify-between items-start px-4 py-4 w-full bg-sky-50 rounded-lg shadow-md">
                      <img
                        src={QuoteIcon}
                        alt=""
                        className="mb-2 text-secondary rotate-180"
                        width="50"
                      />
                      <p className="text-sm mb-4">
                        Website LaundryPro sangat mudah digunakan. Pengaturan jadwal dan pembayaran online membuat hidup saya lebih praktis.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="p-2 rounded-full bg-primary">
                          <img
                            src={UserIcon}
                            alt=""
                            className="text-white"
                            width="34"
                          />
                        </div>
                        <div>
                          <p>Safitri</p>
                          <p>Costumer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-64 flex flex-col justify-between items-start px-4 py-4 w-full bg-sky-50 rounded-lg shadow-md">
                      <img
                        src={QuoteIcon}
                        alt=""
                        className="mb-2 text-secondary rotate-180"
                        width="50"
                      />
                      <p className="text-sm mb-4">
                        Pilihan layanan yang beragam memungkinkan saya untuk menyesuaikan kebutuhan laundry saya. Sangat nyaman!.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="p-2 rounded-full bg-primary">
                          <img
                            src={UserIcon}
                            alt=""
                            className="text-white"
                            width="34"
                          />
                        </div>
                        <div>
                          <p>Fahmi</p>
                          <p>Costumer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-64 flex flex-col justify-between items-start px-4 py-4 w-full bg-sky-50 rounded-lg shadow-md">
                      <img
                        src={QuoteIcon}
                        alt=""
                        className="mb-2 text-secondary rotate-180"
                        width="50"
                      />
                      <p className="text-sm mb-4">
                        Saya telah menjadi pelanggan setia LaundryPro selama bertahun-tahun, dan saya tidak pernah kecewa dengan hasilnya.
                      </p>
                      <img src={LineDashed} alt="" className="mb-4" />
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="p-2 rounded-full bg-primary">
                          <img
                            src={UserIcon}
                            alt=""
                            className="text-white"
                            width="34"
                          />
                        </div>
                        <div>
                          <p>Tiara</p>
                          <p>Costumer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* // Testimoni Section End */}

        {/* // Footer Section Start */}
        <footer className="bg-primary">
          <div className="container">
            <div className="flex flex-wrap items-center justify-between border-b-2 border-slate-300 py-8 px-4 md:px-0">
              <img
                src={LaundryproLogoPutih}
                alt=""
                width="100px"
                className="mb-4 md:mb-0"
              />
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex bg-white rounded-md pl-4 gap-4">
                  <img src={MailIcon} alt="" className="text-dark" width="26" />
                  <input
                    type="text"
                    className="bg-white py-2 pr-8 rounded-md outline-none"
                    placeholder="Masukkan Email Anda..."
                  />
                </div>
                {/* <a
                  href="register.html"
                  className="bg-white py-2 px-8 rounded-md"
                >
                  Daftar
                </a> */}
                <Link
                  to={'/register'}
                  className="bg-white py-2 px-8 rounded-md"
                >
                  {' '}
                  Daftar
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap pt-8">
              <div className="mb-12 w-full px-4 font-medium md:px-0 md:w-1/2">
                <h2 className="mb-5 text-2xl font-bold text-white">
                  LaundryPro
                </h2>
                <p className="w-full md:w-[435px] text-slate-300">
                  LaundryPro adalah sebuah platform pemesanan laundry online
                  yang memudahkan pengguna untuk mengatur dan memesan layanan
                  laundry mereka secara efisien. Dengan LaundryPro, Anda dapat
                  menjadwalkan jadwal pengambilan dan pengantaran laundry Anda,
                  serta memilih jenis layanan yang Anda butuhkan. Website ini
                  menyediakan kemudahan dan kenyamanan bagi pengguna yang ingin
                  menjaga pakaian mereka tetap bersih dan rapi tanpa harus repot
                  datang ke tempat laundry.
                </p>
              </div>
              <div className="mb-12 w-full px-4 md:px-0 md:w-1/4">
                <h3 className="mb-5 text-2xl font-semibold text-white">
                  Usefull Links
                </h3>
                <ul className="text-slate-300">
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block text-base hover:text-white"
                    >
                      Beranda
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block text-base hover:text-white"
                    >
                      Pemesanan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block text-base hover:text-white"
                    >
                      Layanan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block text-base hover:text-white"
                    >
                      Testimoni
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-12 w-full px-4 md:px-0 md:w-1/4">
                <h3 className="mb-5 text-2xl font-semibold text-white">
                  Hubungi Kami
                </h3>
                <p className="w-[300px] text-slate-300 mb-4">
                  LaundryPro <br />
                  Jl. Mekar Puspita No. 29, Mekarwangi <br />
                  Kecamatan Bojongloa Kidul <br />
                  Kota Bandung
                </p>
                <p className="w-[200px] text-slate-300 mb-6">
                  Phone : 081234567890 <br />
                  Email : help@laundry.id
                </p>
                <div className="flex">
                  {/* Twitter */}
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mr-3 flex h-9 w-9 items-center justify-center rounded-full text-primary border border-white bg-white hover:bg-primary hover:text-white"
                  >
                    <img
                      src={TwitterIcon}
                      alt=""
                      className="fill-current"
                      width="20"
                    />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mr-3 flex h-9 w-9 items-center justify-center rounded-full text-primary border border-white bg-white hover:bg-primary hover:text-white"
                  >
                    <img
                      src={FacebookIcon}
                      alt=""
                      className="fill-current"
                      width="20"
                    />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mr-3 flex h-9 w-9 items-center justify-center rounded-full text-primary border border-white bg-white hover:bg-primary hover:text-white"
                  >
                    <img
                      src={InstragamIcon}
                      alt=""
                      className="fill-current"
                      width="20"
                    />
                  </a>

                  {/* Youtube */}
                  <a
                    href="https://youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mr-3 flex h-9 w-9 items-center justify-center rounded-full text-primary border border-white bg-white hover:bg-primary hover:text-white"
                  >
                    <img
                      src={YoutubeIcon}
                      alt=""
                      className="fill-current"
                      width="20"
                    />
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mr-3 flex h-9 w-9 items-center justify-center rounded-full text-primary border border-white bg-white hover:bg-primary hover:text-white"
                  >
                    <img
                      src={TiktokIcon}
                      alt=""
                      className="fill-current"
                      width="20"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-4 bg-sky-950 text-center">
            <span className="text-sm md:text-base text-white font-medium">
              Copyright LaundryPro. All Rights Reserved, 2023
            </span>
          </div>
        </footer>
        {/* // Footer Section End */}
      </>
    );
  }

  return (
    <div>
      {/* Navbar Section Start */}

      <Navbar />
      {/* Navbar Section End */}

      {user ? <Beranda /> : <Landing />}
    </div>
  );
}

export default LandingPage;
