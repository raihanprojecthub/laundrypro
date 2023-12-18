import NavSideAdmin from '../Components/NavSideAdmin';
import PlusIcon from '../assets/icon/plus.svg';
import PencilIcon from '../assets/icon/pen-to-squre.svg';
import TrashIcon from '../assets/icon/trash-icon.svg';
import FooterAdmin from '../Components/FooterAdmin';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ManajemenOrder() {
  const [laundryWeight, setLaundryWeight] = useState([]);
  const [laundryPiece, setLaundryPiece] = useState([]);

  const getLaundryWeight = async () => {
    try {
      const response = await axios.get('http://localhost:5000/laundry-weight');

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
      const response = await axios.get('http://localhost:5000/laundry-piece');

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

//   const deleteLaundry = async (uuid) => {
//     try {
// alert()

//       await axios.delete(`http://localhost:5000/laundry/${uuid}`);

//       getLaundryWeight();
//       getLaundryPiece();
//       // window.location.reload();
//       console.log('berhasil menghapus item');
//     } catch (error) {
//       if (error.response) {
//         alert(error.response.data.msg);
//       } else {
//         console.log(error);
//       }
//     }
//   };

const deleteLaundry = async (uuid) => {
  try {
    const confirmation = window.confirm("Apakah anda yakin ingin menghapus data ini?");

    if (confirmation) {
      await axios.delete(`http://localhost:5000/laundry/${uuid}`);
      getLaundryWeight();
      getLaundryPiece();
      console.log('Berhasil menghapus data');
    } else {
      console.log('Penghapusan dibatalkan');
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
      <NavSideAdmin />

      {/* Main Section Start */}
      <section className="p-4 sm:ml-[17rem] scroll">
        <div className="py-8 pb-16 px-4 md:px-10 mt-16">
          <h4 className="mb-4 text-lg font-bold text-dark md:text-2xl">
            Manajemen Cuci Satuan
          </h4>
          <div className="overflow-auto border border-gray-300 rounded-md p-4 mb-8">
            <Link to={'/admin/tambah-satuan'}>
              {/* <a href="tambah-satuan.html"> */}
              <button className="mb-4 py-2 px-4 text-white bg-primary rounded-md">
                <img
                  src={PlusIcon}
                  alt=""
                  className="inline pr-1 mb-1"
                  width="20"
                />
                Tambah Pesanan
              </button>
              {/* </a> */}
            </Link>
            <table
              id="table-order1"
              className="text-start text-xs md:text-sm w-full"
            >
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
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
                    <td>{laundry.fullname}</td>
                    <td>{laundry.typeItem}</td>
                    <td>{laundry.statusOrder}</td>
                    <td>{laundry.amountItem}</td>
                    <td>
                      {'Rp' + laundry.typeItemPrice.toLocaleString('id-ID')}
                    </td>
                    <td>{'Rp' + (laundry.totalPrice - 4000).toLocaleString('id-ID')}</td>
                    <td>
                      <div className="w-full flex flex-wrap justify-center align-center gap-1">
                        <Link
                          to={`/admin/proses-satuan/${laundry.uuid}`}
                          className="text-center py-2 px-3 text-white bg-green-600 rounded"
                        >
                          <img
                            src={PencilIcon}
                            alt=""
                            className="inline pr-1 mb-1"
                          />
                          Proses
                        </Link>

                        <button
                          onClick={() => deleteLaundry(laundry.uuid)}
                          className="text-center py-2 px-2 text-white bg-red-600 rounded"
                        >
                          <img
                            src={TrashIcon}
                            alt=""
                            className="inline pr-1 mb-1"
                          />
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 className="mb-4 text-lg font-bold text-dark md:text-2xl">
            Manajemen Cuci Kiloan
          </h4>
          <div className="overflow-auto border border-gray-300 rounded-md p-4">
            <Link to={'/admin/tambah-kiloan'}>
              {/* <a href="tambah-satuan.html"> */}
              <button className="mb-4 py-2 px-4 text-white bg-primary rounded-md">
                <img
                  src={PlusIcon}
                  alt=""
                  className="inline pr-1 mb-1"
                  width="20"
                />
                Tambah Pesanan
              </button>
              {/* </a> */}
            </Link>
            <table
              id="table-order2"
              className="text-start text-xs md:text-sm w-full"
            >
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
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
                    <td>{laundry.fullname}</td>
                    <td>{laundry.typeItem}</td>
                    <td>{laundry.statusOrder}</td>
                    <td>{laundry.amountItem}</td>
                    <td>
                      {'Rp' + laundry.typeItemPrice.toLocaleString('id-ID')}
                    </td>
                    <td>{'Rp' + (laundry.totalPrice - 4000).toLocaleString('id-ID')}</td>
                    <td>
                      <div className="w-full flex flex-wrap justify-center align-center gap-1">
                        <Link
                          to={`/admin/proses-kiloan/${laundry.uuid}`}
                          className="text-center py-2 px-3 text-white bg-green-600 rounded"
                        >
                          <img
                            src={PencilIcon}
                            alt=""
                            className="inline pr-1 mb-1"
                          />
                          Proses
                        </Link>

                        <button
                          onClick={() => deleteLaundry(laundry.uuid)}
                          className="text-center py-2 px-2 text-white bg-red-600 rounded"
                        >
                          <img
                            src={TrashIcon}
                            alt=""
                            className="inline pr-1 mb-1"
                          />
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
      </section>
      {/* Main Section End */}

      <FooterAdmin />
    </div>
  );
}

export default ManajemenOrder;
