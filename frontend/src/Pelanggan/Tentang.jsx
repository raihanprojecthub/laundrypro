import PlangLaundrypro from '../assets/img/plang-laundrypro.jpeg';
import TimKami from '../assets/img/Content/tim-kami.png';
import Alviansyah from '../assets/img/Content/pelanggan-alviansyah.png';
import LineTentang from '../assets/icon/line-tentang.svg';
import Alfarisi from '../assets/img/Content/pelanggan-alfarisi.png';
import Yulianti from '../assets/img/Content/pelanggan-yulianti.png';
import GmapsImg from '../assets/img/Content/gmaps-image.png';
import GmapsIcon from '../assets/icon/gmaps.svg';
import NavbarPelanggan from '../Components/NavbarPelanggan';
import FooterPelanggan from '../Components/FooterPelanggan';
import Navbar from '../Components/Navbar';

function Tentang() {
  return (
    <div>
      {/* <NavbarPelanggan /> */}
      <NavbarPelanggan />

      {/* Tentang Section Start */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32">
        <div className="container">
          <div className="w-full px-4 md:px-0 flex flex-wrap justify-between">
            <div className="w-full self-center md:w-[40%]">
              <img
                src={PlangLaundrypro}
                alt=""
                className="shadow-md rounded-lg"
                width="490px"
              />
            </div>
            <div className="w-full self-center mt-10 md:mt-0 md:w-[60%]">
              <h4 className="mb-2 text-lg font-semibold text-primary">
                Tentang Kami
              </h4>
              <h2 className="mb-4 text-2xl font-bold text-dark md:text-3xl">
                BERSIH HASILNYA, BAGUS PELAYANANNYA <br />
                CEPAT WAKTUNYA
              </h2>
              <div className="mb-8">
                <p>
                  LaundryPro adalah sebuah website penyedia layanan Laundry.
                  kami berdiri untuk memberikan kemudahan dalam melakukan
                  pelayanan antara konsumen dan pemilik laundry. laundryPro
                  merupakan sebuah perusahaan Laundry di kota bandung yang
                  memberikan pelayanan yang terbaik bagi anda calon konsumen.
                  hasil yang kami berikan adalah yang terbaik di bidangnya,
                  Bersih, wangi, Rapih dan Instan menjadi keunggulan kami dalam
                  memberikan pelayanan yang terbaik.
                </p>
              </div>
              <a
                href="#"
                className="rounded-lg bg-primary block py-3 w-full text-center text-sm text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
              >
                SAATNYA BERALIH KE LAUNDRYPRO DAN GUNAKAN WAKTU ANDA UNTUK HAL
                YANG PENTING !
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Tentang Section End */}

      {/* Team Section Start */}
      <section id="team" className="py-16 md:pt-32 md:pb-32 bg-primary">
        <div className="container">
          <div className="w-full px-4 md:px-0 flex flex-wrap justify-between">
            <div className="w-full self-center md:w-1/2">
              <img
                src={TimKami}
                alt=""
                className="shadow-md rounded-lg"
                width="590px"
              />
            </div>
            <div className="w-full self-center mt-10 md:mt-0 md:w-1/2">
              <h4 className="mb-2 text-base font-semibold text-white">
                Tim Kami
              </h4>
              <h2 className="mb-4 text-xl font-bold text-white md:text-2xl">
                BERSIH HASILNYA, BAGUS PELAYANANNYA <br />
                CEPAT WAKTUNYA
              </h2>
              <div className="mb-8 text-sm text-slate-300">
                <p>
                  Kami adalah Tim terbaik yang melayani palnggan dengan sepnuh
                  hati. bersama-sma kami ciptakan ekosistem kerja yang baik,
                  efektif dan efisien serta memfokuskan diri pada kepuasan
                  pelanggan. menjadi bagian dari pengembang website kami
                  berkomitmen pada kepuasan konsumen. sebagai partner kami
                  LaundryPro menyajikan sebuah jasa yang berfokus pada kepuasan
                  di bidang Pencucian pakaian, sebagai langkah awal kerjasama
                  kami berkomitmen untuk senantiasa saliang memberikan kepuasan
                  kepada Anda.
                </p>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-center text-white">
                  <p className="text-2xl">30</p>
                  <p className="text-sm">
                    Karyawan <br /> Cleaner
                  </p>
                </div>
                <div className="text-center text-white">
                  <p className="text-2xl">10</p>
                  <p className="text-sm">
                    Karyawan <br /> Admin
                  </p>
                </div>
                <div className="text-center text-white">
                  <p className="text-2xl">5</p>
                  <p className="text-sm">
                    Karyawan <br /> Pengiriman
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section End */}

      {/* Testimoni Section Start */}
      <section id="testimoni" className="py-16 md:pt-32">
        <div className="container">
          <div className="w-full px-4 md:px-0">
            <div className="mx-auto mb-16 text-center">
              <h4 className="mb-2 text-lg font-semibold text-primary">
                Kenali Lebih Jauh
              </h4>
              <h2 className="mb-4 text-xl font-bold text-dark md:text-3xl">
                PELANGGAN SETIA KAMI YANG MEMBERIKAN <br /> PESAN TERBAIK MEREKA
              </h2>
            </div>

            <div className="flex flex-wrap justify-center md:justify-between">
              <div className="mb-28 w-[350px]">
                <img src={Alviansyah} alt="" className="shadow-md rounded-lg" />
                <div className="relative z-10 bg-white text-center p-4 rounded-md shadow-md w-[80%] mx-auto -mt-24">
                  <h4 className="mb-1 font-semibold">Alviansyah</h4>
                  <img
                    src={LineTentang}
                    alt=""
                    className="mx-auto mb-1"
                    width="204"
                    height="7"
                  />
                  <h5 className="text-sm mb-2">Pegawai Pemerintah Daerah</h5>
                  <p className="text-primary text-start text-xs italic">
                    “ Website ini sangat membantu saya dalam mencari Laundry
                    yang praktis dan mudah di kala waktu saya yang sibuk dan
                    melelahkan saya bisa menggunakan jasa ini untuk mencuci
                    pakaian kotor saya “
                  </p>
                </div>
              </div>
              <div className="mb-28 w-[350px]">
                <img src={Alfarisi} alt="" className="shadow-md rounded-lg" />
                <div className="relative z-10 bg-white text-center p-4 rounded-md shadow-md w-[80%] mx-auto -mt-24">
                  <h4 className="mb-1 font-semibold">Alfarisi Wildan</h4>
                  <img
                    src={LineTentang}
                    alt=""
                    className="mx-auto mb-1"
                    width="204"
                    height="7"
                  />
                  <h5 className="text-sm mb-2">Mahasiswa Semester 7</h5>
                  <p className="text-primary text-start text-xs italic">
                    “ Website ini sangat membantu saya dalam mencari Laundry
                    yang praktis dan mudah di kala waktu saya yang sibuk dan
                    melelahkan saya bisa menggunakan jasa ini untuk mencuci
                    pakaian kotor saya “
                  </p>
                </div>
              </div>
              <div className="mb-28 w-[350px]">
                <img src={Yulianti} alt="" className="shadow-md rounded-lg" />
                <div className="relative z-10 bg-white text-center p-4 rounded-md shadow-md w-[80%] mx-auto -mt-24">
                  <h4 className="mb-1 font-semibold">Yulian Tianti</h4>
                  <img
                    src={LineTentang}
                    alt=""
                    className="mx-auto mb-1"
                    width="204"
                    height="7"
                  />
                  <h5 className="text-sm mb-2">Pengusaha Kecantikan</h5>
                  <p className="text-primary text-start text-xs italic">
                    “ Website ini sangat membantu saya dalam mencari Laundry
                    yang praktis dan mudah di kala waktu saya yang sibuk dan
                    melelahkan saya bisa menggunakan jasa ini untuk mencuci
                    pakaian kotor saya “
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimoni Section End */}

      {/* Location Section Start */}
      <section id="location" className="pt-16 pb-24 md:pt-16 md:pb-48">
        <div className="container">
          <div className="w-full px-4 md:px-4 flex flex-wrap justify-between">
            <div className="w-full self-center md:pr-10 md:w-1/2">
              <img src={GmapsImg} alt="" className="w-full" height="400px" />
            </div>
            <div className="w-full self-center mt-10 md:mt-0 md:w-1/2">
              <h4 className="mb-2 text-lg font-semibold text-primary">
                Lokasi
              </h4>
              <h2 className="mb-4 text-xl font-bold md:text-3xl">
                KUNJUNGI KAMI LANGSUNG ALAMAT BERIKUT
              </h2>
              <div className="mb-8 text-base md:text-lg">
                <p>
                  Jl. Mekar Puspita No.29, Mekarwangi, Kec. Bojongloa Kidul,
                  Kota Bandung, Jawa Barat 40236
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/8riYbeTj7DEfS3LD8"
                target="_blank"
                rel="noreferrer"
                className="text-white rounded-lg bg-primary py-3 px-4 text-base transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
              >
                <img
                  src={GmapsIcon}
                  alt=""
                  className="inline mr-1"
                  width="24"
                  height="24"
                />
                GMAPS
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Location Section End */}

      <FooterPelanggan />
    </div>
  );
}

export default Tentang;
