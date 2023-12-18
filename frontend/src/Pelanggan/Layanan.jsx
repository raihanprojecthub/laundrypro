import CuciSetrikaWangi from '../assets/img/Content/cuci-setrika-wangi.png';
import SetrikaWangi from '../assets/img/Content/setrika-wangi.png';
import CuciSaja from '../assets/img/Content/cuci-saja.png';
import CuciLipatRapih from '../assets/img/Content/cuci-lipat-rapi.png';
import CuciSatuan from '../assets/img/Content/cuci-satuan.png';
import KeringSaja from '../assets/img/Content/kering-saja.png';
import IconKiloan from '../assets/img/icon-kiloan.png';
import IconSatuan from '../assets/img/icon-satuan.png';
import NavbarPelanggan from '../Components/NavbarPelanggan';
import FooterPelanggan from '../Components/FooterPelanggan';
import Navbar from '../Components/Navbar';

function Layanan() {
  return (
    <div>
      {/* <NavbarPelanggan /> */}
      <NavbarPelanggan/>

      {/* Layanan Section Start */}
      <section className="pt-32 pb-16 md:pt-32 md:pb-32 bg-sky-100">
        <div className="container">
          <div className="w-full px-4 md:px-0">
            <div className="mx-auto mb-8 text-center">
              <h4 className="mb-2 text-lg font-semibold text-primary">
                Layanan
              </h4>
              <h2 className="mb-4 text-2xl font-bold text-dark md:text-4xl">
                Layanan Kami
              </h2>
            </div>

            <div className="flex flex-wrap justify-center items-center mx-auto gap-8 mb-8">
              <div className="border-2 border-black rounded-xl overflow-hidden relative">
                <img
                  src={CuciSetrikaWangi}
                  alt=""
                  className="duration-500 hover:scale-125"
                />
                <div className="absolute bottom-6 bg-white bg-opacity-50 py-2 w-full text-center font-semibold">
                  Cuci Setrika Wangi
                </div>
              </div>
              <div className="border-2 border-black rounded-xl overflow-hidden relative">
                <img
                  src={SetrikaWangi}
                  alt=""
                  className="duration-500 hover:scale-125"
                />
                <div className="absolute bottom-6 bg-white bg-opacity-50 py-2 w-full text-center font-semibold">
                  Setrika Wangi
                </div>
              </div>
              <div className="border-2 border-black rounded-xl overflow-hidden relative">
                <img
                  src={CuciSaja}
                  alt=""
                  className="duration-500 hover:scale-125"
                />
                <div className="absolute bottom-6 bg-white bg-opacity-50 py-2 w-full text-center font-semibold">
                  Cuci Saja
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center mx-auto gap-8">
              <div className="border-2 border-black rounded-xl overflow-hidden relative">
                <img
                  src={CuciLipatRapih}
                  alt=""
                  className="duration-500 hover:scale-125"
                />
                <div className="absolute bottom-6 bg-white bg-opacity-50 py-2 w-full text-center font-semibold">
                  Cuci Lipat Rapi
                </div>
              </div>
              <div className="border-2 border-black rounded-xl overflow-hidden relative">
                <img
                  src={CuciSatuan}
                  alt=""
                  className="duration-500 hover:scale-125"
                />
                <div className="absolute bottom-6 bg-white bg-opacity-50 py-2 w-full text-center font-semibold">
                  Cuci Satuan
                </div>
              </div>
              <div className="border-2 border-black rounded-xl overflow-hidden relative">
                <img
                  src={KeringSaja}
                  alt=""
                  className="duration-500 hover:scale-125"
                />
                <div className="absolute bottom-6 bg-white bg-opacity-50 py-2 w-full text-center font-semibold">
                  Kering Saja
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Layanan Section End */}

      {/* Harga Section Start */}
      <section id="daftar-harga" className="py-16 md:pt-32 :pb-32">
        <div className="container">
          <div className="w-full px-4 md:px-0">
            <div className="mx-auto mb-8 text-center">
              <h4 className="mb-2 text-lg font-semibold text-primary">Harga</h4>
              <h2 className="mb-4 text-2xl font-bold text-dark md:text-4xl">
                Daftar Harga
              </h2>
            </div>

            <div className="flex flex-wrap mx-auto">
              <div className="w-full overflow-auto md:w-1/2 mb-8">
                <div className="flex justify-center items-center gap-8 mb-6 font-bold text-xl text-center">
                  <img src={IconKiloan} alt="" />
                  <h4>Cuci Kiloan</h4>
                </div>
                <table
                  id="table-layanan1"
                  className="mx-auto text-xs md:text-base"
                >
                  <thead className="bg-primary text-white">
                    <tr>
                      <th>Daftar Layanan</th>
                      <th>Harga</th>
                    </tr>
                  </thead>
                  <tbody className="bg-sky-50">
                    <tr>
                      <td>Kering Saja (30 Menit)</td>
                      <td>10.000</td>
                    </tr>
                    <tr>
                      <td>Cuci Saja (30 Menit)</td>
                      <td>10.000</td>
                    </tr>
                    <tr>
                      <td>Setrika Wangi (1 Hari)</td>
                      <td>7.000</td>
                    </tr>
                    <tr>
                      <td>Cuci Lipat Rapi (2 Jam)</td>
                      <td>6.000</td>
                    </tr>
                    <tr>
                      <td>Cuci Setrika Wangi (6 Jam)</td>
                      <td>12.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-full overflow-auto md:w-1/2">
                <div className="flex justify-center items-center gap-8 mb-6 font-bold text-xl text-center">
                  <img src={IconSatuan} alt="" />
                  <h4>Cuci Satuan</h4>
                </div>
                <table
                  id="table-layanan2"
                  className="mx-auto text-xs md:text-base"
                >
                  <thead className="bg-primary text-white">
                    <tr>
                      <th>Daftar Layanan</th>
                      <th>Harga</th>
                    </tr>
                  </thead>
                  <tbody className="bg-sky-50">
                    <tr>
                      <td>Bantal / Guling</td>
                      <td>20.000</td>
                    </tr>
                    <tr>
                      <td>Selimut</td>
                      <td>25.000</td>
                    </tr>
                    <tr>
                      <td>Boneka</td>
                      <td>15.000</td>
                    </tr>
                    <tr>
                      <td>Sajadah</td>
                      <td>20.000</td>
                    </tr>
                    <tr>
                      <td>Handuk</td>
                      <td>15.000</td>
                    </tr>
                    <tr>
                      <td>Jaket Kulit</td>
                      <td>35.000</td>
                    </tr>
                    <tr>
                      <td>Jas Setelan</td>
                      <td>45.000</td>
                    </tr>
                    <tr>
                      <td>Karpet</td>
                      <td>40.000</td>
                    </tr>
                    <tr>
                      <td>Keset</td>
                      <td>8.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Harga Section End */}

      <FooterPelanggan />
    </div>
  );
}

export default Layanan;
