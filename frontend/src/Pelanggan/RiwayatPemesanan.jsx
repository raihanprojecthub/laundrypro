import { useEffect, useState } from 'react';
import NavSidePelanggan from '../Components/NavSidePelanggan';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RiwayatPemesanan() {
  const [laundryWeight, setLaundryWeight] = useState([]);
  const [laundryPiece, setLaundryPiece] = useState([]);

  const getLaundryWeight = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/my-laundry-weight'
      );

      setLaundryWeight(response.data);
      console.log('weight laundry', laundryWeight);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  const getLaundryPiece = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/my-laundry-piece'
      );

      setLaundryPiece(response.data);
      console.log('piece laundry', laundryPiece);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getLaundryWeight();
    getLaundryPiece();
  }, []);

  // const deleteLaundry = async (uuid) => {
  //   try {
  //     await axios.delete(`http://localhost:5000/laundry/${uuid}`);

  //     getLaundryWeight();
  //     getLaundryPiece();
  //     // window.location.reload();
  //     console.log('berhasil menghapus item');
  //   } catch (error) {
  //     if (error.response) {
  //       alert(error.response.data.msg);
  //     } else {
  //       console.log(error);
  //     }
  //   }
  // };

  const deleteLaundry = async (uuid) => {
    try {
      const confirmation = window.confirm(
        'Apakah Anda yakin ingin menghapus item ini?'
      );
      if (confirmation) {
        await axios.delete(`http://localhost:5000/laundry/${uuid}`);
        getLaundryWeight();
        getLaundryPiece();
        // window.location.reload();
        console.log('berhasil menghapus item');
      } else {
        console.log('Penghapusan item dibatalkan');
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <NavSidePelanggan />

      {/* <!-- Main Section Start --> */}
      <div className="p-4 sm:ml-[17rem]">
        <div className="py-8 px-12 mt-16 bg-sky-50 h-screen">
          <div className="mx-auto mb-12 text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">
              Pemesanan
            </h4>
            <h2 className="mb-4 text-xl font-bold text-dark md:text-3xl">
              Daftar Riwayat Pemesanan
            </h2>
          </div>

          <div className="mb-8">
            <h4 className="mb-2 text-lg font-bold text-dark md:text-2xl">
              Daftar Pemesanan - Cuci Satuan
            </h4>
            <div className="overflow-auto">
              <table
                id="table-riwayat1"
                className="text-start text-xs md:text-sm bg-white w-full"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Jenis Paket</th>
                    <th>Status Pesanan</th>
                    <th>Per/Pcs</th>
                    <th>Harga Paket</th>
                    <th>Sub Total</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {laundryPiece.map((laundry, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{laundry.typeItem}</td>
                      <td>{laundry.statusOrder}</td>
                      <td>{laundry.amountItem}</td>
                      <td>
                        {'Rp' + laundry.typeItemPrice.toLocaleString('id-ID')}
                      </td>
                      <td>
                        {'Rp' + (laundry.totalPrice - 4000).toLocaleString('id-ID')}
                      </td>
                      <td>
                        <div className="w-full flex flex-wrap justify-center align-center gap-1">
                          <Link
                            to={`/detail-pesanan/satuan/${laundry.uuid}`}
                            className="text-center py-2 px-3 text-white bg-sky-600 rounded"
                          >
                            Detail
                          </Link>
                          <button
                            onClick={() => deleteLaundry(laundry.uuid)}
                            className="text-center py-2 px-2 text-white bg-red-600 rounded"
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="mb-2 text-lg font-bold text-dark md:text-2xl">
              Daftar Pemesanan - Cuci Kiloan
            </h4>
            <div className="overflow-auto">
              <table
                id="table-riwayat2"
                className="text-start text-xs md:text-sm bg-white w-full"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Jenis Paket</th>
                    <th>Status Pesanan</th>
                    <th>Berat</th>
                    <th>Harga Paket</th>
                    <th>Sub Total</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {laundryWeight.map((laundry, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{laundry.typeItem}</td>
                      <td>{laundry.statusOrder}</td>
                      <td>{laundry.amountItem}</td>
                      <td>
                        {'Rp' + laundry.typeItemPrice.toLocaleString('id-ID')}
                      </td>
                      <td>
                        {'Rp' + (laundry.totalPrice - 4000).toLocaleString('id-ID')}
                      </td>
                      <td>
                        <div className="w-full flex flex-wrap justify-center align-center gap-1">
                          <Link
                            to={`/detail-pesanan/kiloan/${laundry.uuid}`}
                            className="text-center py-2 px-3 text-white bg-sky-600 rounded"
                          >
                            Detail
                          </Link>
                          <button
                            onClick={() => deleteLaundry(laundry.uuid)}
                            className="text-center py-2 px-2 text-white bg-red-600 rounded"
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Main Section Start --> */}
    </div>
  );
}

export default RiwayatPemesanan;
