import { Link, useNavigate, useParams } from 'react-router-dom';
import FooterAdmin from '../Components/FooterAdmin';
import NavSideAdmin from '../Components/NavSideAdmin';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ProsesKiloan() {
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

  const [updateLaundryData, setUpdateLaundryData] = useState({
    typeLaundry: 'weight',

    fullname: laundryData.fullname,
    phone: laundryData.phone,
    address: laundryData.address,
    amountItem: laundryData.amountItem,

    typeItem: laundryData.typeItem,
    typeItemPrice: laundryData.typeItemPrice,
    note: laundryData.note,
    ongkir: laundryData.ongkir,

    statusOrder: laundryData.statusOrder,
  });

  // Input data to state
  const handleChange = (e) => {
    const name = e.name;
    const value = e.value;
    // const id = e.name;
    setUpdateLaundryData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const navigate = useNavigate();

  const updateLaundry = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://localhost:5000/laundry/${laundryData.uuid}`,
        updateLaundryData
      );

      console.log('data', updateLaundryData);
      alert('Berhasil memperbarui data laundry');
      navigate('/admin/manajemen-order');
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

      {/* Proses Kiloan Start */}
      <section className="p-4 sm:ml-[17rem]">
        <div className="py-8 px-4 md:px-10 mt-16">
          <h4 className="mb-4 text-lg font-bold text-dark md:text-2xl">
            Proses Cuci Kiloan
          </h4>
          <div className="border border-gray-300 rounded-md p-4">
            <form action="" onSubmit={updateLaundry}>
              <div className="flex flex-wrap justify-center">
                <div className="w-full md:w-1/2 md:pr-6">
                  <label
                    htmlFor="nama"
                    className="block mb-2 font-semibold text-sm text-gray-500"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="fullname"
                    onChange={(e) => handleChange(e.target)}
                    className="w-full mb-4 py-2 px-4 bg-white rounded-md border border-slate-300"
                    placeholder={laundryData?.fullname}
                  />

                  <label
                    htmlFor="telepon"
                    className="block mb-2 font-semibold text-sm text-gray-500"
                  >
                    Nomor Telepon
                  </label>
                  <input
                    type="text"
                    id="telepon"
                    name="phone"
                    onChange={(e) => handleChange(e.target)}
                    className="w-full mb-4 py-2 px-4 bg-white rounded-md border border-slate-300"
                    placeholder={laundryData?.phone}
                  />

                  <label
                    htmlFor="jenis-paket"
                    className="block mb-2 font-semibold text-sm text-gray-500"
                  >
                    Jenis Paket
                  </label>
                  <select
                    // name="typeItem"
                    onChange={(e) => {
                      const selectedOption =
                        e.target.options[e.target.selectedIndex];
                      const selectedId = selectedOption.getAttribute('id');
                      const selectedName = selectedOption.getAttribute('name');

                      setUpdateLaundryData({
                        ...updateLaundryData,
                        typeItem: selectedName,
                        typeItemPrice: e.target.value,
                      });
                    }}
                    id="jenis-paket"
                    className="w-full mb-4 py-3 px-6 text-gray-400 bg-white rounded-md border border-slate-300"
                  >
                    <option selected disabled>
                      -- Pilih Jenis Paket --
                    </option>
                    <option value="10000" name="Kering Saja">
                      Kering Saja
                    </option>
                    <option value="10000" name="Cuci Saja">
                      Cuci Saja
                    </option>
                    <option value="7000" name="Setrika Wangi">
                      Setrika Wangi
                    </option>
                    <option value="6000" name="Cuci Lipat Rapi">
                      Cuci Lipat Rapi
                    </option>
                    <option value="12000" name="Cuci Setrika Wangi">
                      Cuci Setrika Wangi
                    </option>
                  </select>

                  <label
                    htmlFor="alamat"
                    className="block mb-2 font-semibold text-sm text-gray-500"
                  >
                    Detail Alamat
                  </label>
                  <textarea
                    id="alamat"
                    name="address"
                    onChange={(e) => handleChange(e.target)}
                    className="w-full py-3 px-6 bg-white rounded-lg border border-slate-300"
                    rows="10"
                    placeholder={laundryData?.address}
                  ></textarea>
                </div>

                <div className="w-full md:w-1/2 md:pl-6">
                  <label
                    htmlFor="status-pesanan"
                    className="block mb-2 font-semibold text-sm text-gray-500"
                  >
                    Status Pesanan
                  </label>
                  <select
                    onChange={(e) => {
                      const selectedOption =
                        e.target.options[e.target.selectedIndex];
                      const selectedId = selectedOption.getAttribute('id');
                      const selectedName = selectedOption.getAttribute('name');

                      setUpdateLaundryData({
                        ...updateLaundryData,
                        // typeItem: selectedName,
                        statusOrder: e.target.value,
                      });
                    }}
                    id="status-pesanan"
                    className="w-full mb-4 py-3 px-4 bg-white rounded-md border border-slate-300"
                  >
                    <option selected disabled>
                      --Status Pesanan--
                    </option>
                    <option value="Proses Selesai">Proses Selesai</option>
                    <option value="Sedang Diproses">Sedang Diproses</option>
                  </select>

                  <label
                    htmlFor="jumlah-berat"
                    className="block mb-2 font-semibold text-sm text-gray-500"
                  >
                    Jumlah Berat
                  </label>
                  <input
                    type="number"
                    id="jumlah-berat"
                    name="amountItem"
                    onChange={(e) => handleChange(e.target)}
                    className="w-full mb-4 py-2 px-4 bg-white rounded-md border border-slate-300"
                    placeholder={laundryData?.amountItem}
                  />

                  <label
                    htmlFor="ongkir"
                    className="block mb-2 font-semibold text-sm text-gray-500"
                  >
                    Harga Ongkir
                  </label>
                  <input
                    type="text"
                    id="ongkir"
                    name="ongkir"
                    onChange={(e) => handleChange(e.target)}
                    className="w-full mb-4 py-2 px-4 bg-white rounded-md border border-slate-300"
                    placeholder={laundryData?.ongkir}
                  />

                  <label
                    htmlFor="catatan"
                    className="block mb-2 font-semibold text-sm text-gray-500"
                  >
                    Catatan Tambahan
                  </label>
                  <textarea
                    name="note"
                    onChange={(e) => handleChange(e.target)}
                    id="catatan"
                    className="w-full py-2 px-4 mb-2 bg-white rounded-lg border border-slate-300"
                    rows="8"
                    placeholder={laundryData?.note}
                  ></textarea>

                  <div className="flex justify-center items-center gap-4">
                    <Link
                      to={'/admin/manajemen-order'}
                      className="w-full text-xs md:text-sm text-center text-white bg-red-600 py-2 rounded-xl"
                    >
                      Kembali
                    </Link>
                    <button
                      type="submit"
                      className="w-full text-xs md:text-sm text-center text-white bg-primary py-2 rounded-xl"
                    >
                      Simpan
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Proses Kiloan End */}

      <FooterAdmin />
    </div>
  );
}

export default ProsesKiloan;
