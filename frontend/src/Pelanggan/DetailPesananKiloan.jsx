import BankBRI from '../assets/img/logo-bank/bri.png';
import BankBNI from '../assets/img/logo-bank/bni.png';
import BankBCA from '../assets/img/logo-bank/bca.png';
import BankMandiri from '../assets/img/logo-bank/mandiri.png';
import BankBSI from '../assets/img/logo-bank/bsi.png';
import BorderDashed from '../assets/icon/border-dashed.svg';
import NavbarPelanggan from '../Components/NavbarPelanggan';
import FooterPelanggan from '../Components/FooterPelanggan';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function DetailPesananKiloan() {
  const [laundryData, setLaundryData] = useState('');

  const { uuid } = useParams();

  useEffect(() => {
    const getLaundryByUUID = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/laundry/${uuid}`
        );

        setLaundryData(response.data);
        console.log(laundryData);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.msg);
        } else {
          console.log(error);
        }
      }
    };

    getLaundryByUUID();
  }, []);

  const [showCOD, setShowCOD] = useState(true);
  const [showTransfer, setShowTransfer] = useState(false);
  const [activeButton, setActiveButton] = useState('COD');

  const handleCODClick = () => {
    setShowCOD(true);
    setShowTransfer(false);
    setActiveButton('COD');
  };

  const handleTransferClick = () => {
    setShowCOD(false);
    setShowTransfer(true);
    setActiveButton('Transfer');
  };

  return (
    <div className="bg-sky-100">
      <NavbarPelanggan />

      {/* Detail Kiloan Section Start */}
      <section id="detail" className="pt-32 pb-32">
        <div className="container">
          <div className="w-full px-4 md:px-0">
            <div className="w-full bg-white mb-14">
              <div className="py-6 px-10 border-b border-dark">
                <h4 className="font-semibold text-lg">Detail Pesanan</h4>
              </div>

              <div className="p-10">
                <table
                  id="table-detail"
                  className="mb-8 table-detail text-xs md:text-base"
                >
                  <tr>
                    <td>Nama</td>
                    <td>{laundryData?.fullname}</td>
                  </tr>
                  <tr>
                    <td>Nomor Telepon</td>
                    <td>{laundryData?.phone}</td>
                  </tr>
                  <tr>
                    <td>Alamat</td>
                    <td>{laundryData?.address}</td>
                  </tr>
                  <tr>
                    <td>Jenis Paket</td>
                    <td>{laundryData?.typeItem}</td>
                  </tr>
                  <tr>
                    <td>Status Pesanan</td>
                    <td>{laundryData?.statusOrder}</td>
                  </tr>
                </table>
                <table className="table-detail text-xs md:text-base">
                  <tr>
                    <td>Berat Cucian (Kg)</td>
                    <td>Harga Paket Per/Kg</td>
                    <td>Sub Total Pesanan</td>
                  </tr>
                  <tr>
                    <td>{laundryData?.amountItem}</td>
                    <td>
                      {'Rp' +
                        laundryData?.typeItemPrice?.toLocaleString('id-ID')}
                    </td>
                    <td>
                      {'Rp' + (laundryData.totalPrice - 4000).toLocaleString('id-ID')}
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            <div className="w-full bg-white">
              <div className="flex justify-between py-6 px-10 border-b border-dark">
                <h4 className="font-semibold text-sm md:text-lg">
                  Metode Pembayaran
                </h4>
                <div className="flex gap-2">
                  <div onClick={handleCODClick}
                    className={`cursor-pointer text-xs md:text-base py-1 px-2 font-semibold border border-dark rounded ${
                      activeButton === 'COD' ? 'active-payment' : ''
                    }`}
                  >
                    COD
                  </div>
                  <div onClick={handleTransferClick}
                    className={`cursor-pointer text-xs md:text-base py-1 px-2 font-semibold border border-dark rounded ${
                      activeButton === 'Transfer' ? 'active-payment' : ''
                    }`}
                  >
                    Transfer Bank
                  </div>
                </div>
              </div>
              {showCOD && <COD />}
              {showTransfer && <Transfer />}
              <img src={BorderDashed} alt="" className="w-full" height="1" />
              <div className="w-full flex justify-end py-8 px-10">
                <Link
                  to={'/riwayat-pemesanan'}
                  className="py-2 px-4 text-sm md:text-base text-white bg-primary rounded"
                >
                  {/* <a
                  href="riwayat-pemesanan.html"
                  > */}
                  BUAT PESANAN
                  {/* </a> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Detail Kiloan Section End */}

      <FooterPelanggan />
    </div>
  );

  function COD() {
    return (
      <div className="payment-item">
        <div className="flex gap-24 text-xs md:text-base py-6 px-10 border-b border-dark">
          <h4>COD</h4>
          <h4>CASH ON DELIVERY</h4>
        </div>
        <div className="flex justify-end py-8 px-10">
          <table className="table-payment text-xs md:text-base">
            <tr>
              <td className="py-2 pr-16 md:pr-24">Sub Total Pesanan</td>
              <td className="pl-16 md:pl-24 text-right">
                {' '}
                {'Rp' +
                  (laundryData.totalPrice - 4000).toLocaleString('id-ID')}
              </td>
            </tr>
            <tr>
              <td className="py-2">Total Ongkos Kirim</td>
              <td className="text-right">
                {'Rp' + laundryData?.ongkir?.toLocaleString('id-ID')}
              </td>
            </tr>
            <tr>
              <td className="py-2">Layanan</td>
              <td className="text-right">Rp. 1.000</td>
            </tr>
            <tr>
              <td className="py-4">Total Pembayaran :</td>
              <td className="text-right text-base md:text-2xl font-bold">
                {'Rp' +
                  (laundryData.totalPrice + laundryData.ongkir + 1000 - 4000).toLocaleString(
                    'id-ID'
                  )}
              </td>
            </tr>
          </table>
        </div>
      </div>
    )
  }

  function Transfer() {
    return (
      <div className="payment-item"> 
        <div className="flex flex-wrap justify-between px-10">
          <div className="flex gap-6 md:gap-24 py-6 text-xs md:text-base">
            <h4>
              Pilih <br /> Bank
            </h4>
            <div>
              <div className="flex items-center gap-4 mb-10">
                <input
                  id="bank-bri"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <img src={BankBRI} alt="" />
                <label
                  htmlFor="bank-bri"
                  className="ms-2 text-xs md:text-sm font-medium text-gray-900"
                >
                  Bank BRI
                </label>
              </div>
              <div className="flex items-center gap-4 mb-10">
                <input
                  id="bank-bni"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <img src={BankBNI} alt="" />
                <label
                  htmlFor="bank-bni"
                  className="ms-2 text-xs md:text-sm font-medium text-gray-900"
                >
                  Bank BNI
                </label>
              </div>
              <div className="flex items-center gap-4 mb-10">
                <input
                  id="bank-bca"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <img src={BankBCA} alt="" />
                <label
                  htmlFor="bank-bca"
                  className="ms-2 text-xs md:text-sm font-medium text-gray-900"
                >
                  Bank BCA
                </label>
              </div>
              <div className="flex items-center gap-4 mb-10">
                <input
                  id="bank-mandiri"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <img src={BankMandiri} alt="" />
                <label
                  htmlFor="bank-mandiri"
                  className="ms-2 text-xs md:text-sm font-medium text-gray-900"
                >
                  Bank Mandiri
                </label>
              </div>
              <div className="flex items-center gap-4">
                <input
                  id="bank-bsi"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <img src={BankBSI} alt="" />
                <label
                  htmlFor="bank-bsi"
                  className="ms-2 text-xs md:text-sm font-medium text-gray-900"
                >
                  Bank BSI
                </label>
              </div>
            </div>
          </div>
          <div className="py-6 md:pt-80">
            <table className="table-payment text-xs md:text-base">
              <tr>
                <td className="py-2 pr-16 md:pr-24">Sub Total Pesanan</td>
                <td className="pl-16 md:pl-24 text-right">
                  {' '}
                  {'Rp' +
                    (laundryData.totalPrice - 4000).toLocaleString('id-ID')}
                </td>
              </tr>
              <tr>
                <td className="py-2">Total Ongkos Kirim</td>
                <td className="text-right">
                  {'Rp' + laundryData?.ongkir?.toLocaleString('id-ID')}
                </td>
              </tr>
              <tr>
                <td className="py-2">Layanan</td>
                <td className="text-right">Rp. 1.000</td>
              </tr>
              <tr>
                <td className="py-4">Total Pembayaran :</td>
                <td className="text-right text-base md:text-2xl font-bold">
                  {'Rp' +
                    (laundryData.totalPrice + laundryData.ongkir + 1000 - 4000).toLocaleString(
                      'id-ID'
                    )}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailPesananKiloan;
