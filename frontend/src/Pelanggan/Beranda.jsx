import FooterPelanggan from '../Components/FooterPelanggan';
import NavbarPelanggan from '../Components/NavbarPelanggan';

import PlangLaundrypro from '../assets/img/plang-laundrypro.jpeg';

import AntarJemput from '../assets/icon/antar-jemput.svg';
import LineDashed from '../assets/icon/line-dashed.svg';
import ArrowRight from '../assets/icon/arrow-right.svg';
import ProsesCepat from '../assets/icon/proses-cepat.svg';
import DetergentTerbaik from '../assets/icon/detergent-terbaik.svg';

import BerandaPemesanan from '../assets/img/beranda-pemesanan.png';

import QuoteIcon from '../assets/icon/quote.svg';
import UserIcon from '../assets/icon/user.svg';
import Navbar from '../Components/Navbar';

function Beranda() {
  return (
    <div>
      {/* <NavbarPelanggan/> */}
      <NavbarPelanggan />

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
                Cucian anda pasti bersih, rapih dan nyaman saat beraktifitas.
              </h2>

              <div className="flex gap-2">
                <a
                  href="#pemesanan"
                  className="my-auto rounded-lg bg-primary py-[10px] px-6 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
                >
                  Pesan Sekarang!
                </a>
                <a
                  href="#testimoni"
                  className="my-auto rounded-lg border-2 border-primary py-2 px-6 text-base font-semibold transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
                >
                  Testimoni
                </a>
              </div>
            </div>

            <div className="w-full self-center order-1 md:order-2 md:w-1/2">
              <img
                src={PlangLaundrypro}
                alt="Plang LaundryPro"
                className="rounded-xl"
              />
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

            <div className="flex flex-wrap gap-10 w-full mx-auto md:max-w-5xl">
              <div className="flex flex-col items-center justify-center px-4 py-8 w-[300px] bg-sky-50 rounded-lg shadow-md">
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
                  Hemat waktu dengan layanan antar-jemput pakaian Anda, praktis
                  dan efisien.
                </p>
                <img src={LineDashed} alt="" className="mb-4" />
                <a href="login.html" className="font-medium">
                  Selengkapnya
                  <img src={ArrowRight} alt="" className="inline" />
                </a>
              </div>
              <div className="flex flex-col items-center justify-center px-4 py-8 w-[300px] bg-sky-50 rounded-lg shadow-md">
                <div className="flex items-center justify-center bg-primary rounded-full mb-4 p-2">
                  <img
                    src={ProsesCepat}
                    alt=""
                    className="text-white"
                    width="39"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">PROSES CEPAT</h3>
                <p className="text-center text-sm mb-4">
                  Kami menjamin proses cepat untuk memastikan pakaian Anda siap
                  digunakan secepat mungkin.
                </p>
                <img src={LineDashed} alt="" className="mb-4" />
                <a href="login.html" className="font-medium">
                  Selengkapnya
                  <img src={ArrowRight} alt="" className="inline" />
                </a>
              </div>
              <div className="flex flex-col items-center justify-center px-4 py-8 w-[300px] bg-sky-50 rounded-lg shadow-md">
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
                <a href="login.html" className="font-medium">
                  Selengkapnya
                  <img src={ArrowRight} alt="" className="inline" />
                </a>
              </div>
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
                  Kami menghadirkan Laundry Express kami untuk memberikan Anda
                  pengalaman laundry yang praktis dan cepat. Dalam waktu hanya 2
                  jam, pakaian Anda akan kembali bersih, harum, dan siap
                  dipakai. Kami mengerti betapa berharganya waktu dan tenaga
                  Anda, itulah mengapa kami menghadirkan solusi yang hemat waktu
                  dan hemat tenaga.
                </p>
                <br />
                <p>
                  Dengan LaundryPro, Anda tidak perlu lagi repot-repot pergi ke
                  tempat laundry fisik, mengantri, atau menunggu berjam-jam
                  untuk pakaian Anda selesai dicuci. Kami telah mengubah cara
                  Anda merawat pakaian dengan memberikan layanan laundry yang
                  dapat diakses secara online. Ini berarti Anda dapat mengatur
                  jadwal pengambilan dan pengantaran pakaian Anda dengan mudah,
                  semua dari kenyamanan rumah Anda.
                </p>
                <br />
                <p>
                  Kami berkomitmen untuk memberikan layanan yang profesional dan
                  andal, sehingga Anda dapat percaya bahwa pakaian Anda dalam
                  perawatan terbaik.
                </p>
              </div>
              <a
                href="pemesanan.html"
                target=""
                className="my-auto rounded-lg bg-primary py-4 px-6 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
              >
                Pesan Sekarang!
              </a>
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

            <div className="flex flex-wrap justify-center gap-8 w-full mx-auto md:max-w-7xl">
              <div className="flex flex-col justify-between items-start px-4 py-4 w-full md:w-1/5 bg-sky-50 rounded-lg shadow-md">
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
              <div className="flex flex-col justify-between items-start px-4 py-4 w-full md:w-1/5 bg-sky-50 rounded-lg shadow-md">
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
              <div className="flex flex-col justify-between items-start px-4 py-4 w-full md:w-1/5 bg-sky-50 rounded-lg shadow-md">
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
              <div className="flex flex-col justify-between items-start px-4 py-4 w-full md:w-1/5 bg-sky-50 rounded-lg shadow-md">
                <img
                  src={QuoteIcon}
                  alt=""
                  className="mb-2 text-secondary rotate-180"
                  width="50"
                />
                <p className="text-sm mb-4">
                  Pengalaman laundry online pertama saya dan saya sangat senang
                  memilih LaundryPro. Akan menjadi pelanggan setia.
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
          </div>
        </div>
      </section>
      {/* Testimoni Section End */}

      <FooterPelanggan />
    </div>
  );
}

export default Beranda;
