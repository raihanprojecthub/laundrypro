import PemesananSatuan from '../assets/img/Content/pemesanan-satuan.png';
import PemesananKiloan from '../assets/img/Content/pemesanan-kiloan.png';
import PemesananImg from '../assets/img/Content/pemesanan.png';
import NavbarPelanggan from '../Components/NavbarPelanggan';
import FooterPelanggan from '../Components/FooterPelanggan';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';

function Pemesanan() {
  return (
    <div>
      <NavbarPelanggan />

      {/* Pemesanan Section Start */}
      <section className="pt-32 pb-32">
        <div className="container">
          <div className="w-full px-4 md:px-0">
            <div className="mx-auto mb-8 text-center">
              <h4 className="mb-2 text-lg font-semibold text-primary">
                Pemesanan
              </h4>
              <h2 className="mb-4 text-2xl font-bold text-dark md:text-4xl">
                Pilih Jenis Layanan
              </h2>
            </div>

            <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6 bg-sky-100 border-4 border-primary rounded-3xl p-6 max-w-4xl mx-auto">
              <div className="flex flex-col gap-6">
                <Link to={'/cuci-satuan'}>
                  <div className="border-4 border-primary rounded-3xl overflow-hidden relative">
                    <img
                      src={PemesananSatuan}
                      alt=""
                      className="duration-500 hover:scale-125"
                    />
                    <div className="absolute bottom-0 bg-white py-3 w-full text-center font-semibold">
                      LAUNDRY SATUAN
                    </div>
                  </div>
                </Link>

                {/* <a href="cuci-satuan.html">
                </a> */}
                {/* <a href="cuci-kiloan.html"> */}
                <Link to={'/cuci-kiloan'}>
                  <div className="border-4 border-primary rounded-3xl overflow-hidden relative">
                    <img
                      src={PemesananKiloan}
                      alt=""
                      className="duration-500 hover:scale-125"
                    />
                    <div className="absolute bottom-0 bg-white py-3 w-full text-center font-semibold">
                      LAUNDRY KILOAN
                    </div>
                  </div>
                </Link>
                {/* </a> */}
              </div>
              <div className="border-4 border-primary rounded-3xl overflow-hidden">
                <img src={PemesananImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pemesanan Section End */}

      <FooterPelanggan />
    </div>
  );
}

export default Pemesanan;
