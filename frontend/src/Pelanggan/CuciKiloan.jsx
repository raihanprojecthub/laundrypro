import { useState } from 'react';
import FooterPelanggan from '../Components/FooterPelanggan';
import Navbar from '../Components/Navbar';
import NavbarPelanggan from '../Components/NavbarPelanggan';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function CuciKiloan() {
  const navigate = useNavigate();
  const [laundryData, setLaundryData] = useState({
    typeLaundry: 'weight',

    fullname: '',
    phone: '',
    address: '',
    amountItem: '',
    typeItem: '',
    typeItemPrice: '',
    note: '',
    ongkir: '4000',
  });

  // Input data to state
  const handleChange = (e) => {
    const name = e.name;
    const value = e.value;
    // const id = e.name;
    setLaundryData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const createLaundry = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/laundry`, laundryData);

      alert('Sukses menambah pesanan laundry');
      navigate('/pemesanan');
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
      {/* <NavbarPelanggan /> */}
      <Navbar />

      {/* Pemesanan Cuci Kiloan Start */}
      <section id="cuci-kiloan" className="pt-32 pb-32">
        <div className="container">
          <div className="w-full px-4 md:px-0">
            <h2 className="mb-4 text-xl font-bold text-dark md:text-2xl">
              Buat Pesanan Cuci Kiloan
            </h2>
            <div className="bg-sky-100 px-6 py-6 md:px-12 md:py-12 rounded-2xl border-2 border-primary">
              <form action="" onSubmit={createLaundry}>
                <div className="flex flex-wrap justify-center text-sm md:text-base">
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
                      className="w-full mb-4 py-3 px-6 bg-white rounded-md border border-slate-300"
                      placeholder="Masukkan Nama Anda"
                      required
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
                      className="w-full mb-4 py-3 px-6 bg-white rounded-md border border-slate-300"
                      placeholder="Masukkan Nomor Telepon"
                      required
                    />

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
                      placeholder="Masukkan Detail Alamat Anda"
                    ></textarea>
                  </div>

                  <div className="w-full md:w-1/2 md:pl-6">
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
                        const selectedName =
                          selectedOption.getAttribute('name');

                        setLaundryData({
                          ...laundryData,
                          typeItem: selectedName,
                          typeItemPrice: e.target.value,
                        });
                      }}
                      id="jenis-paket"
                      className="w-full mb-4 py-4 px-6 text-gray-400 bg-white rounded-md border border-slate-300"
                    >
                      <option value="">-- Pilih Jenis Paket --</option>
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
                      className="w-full mb-4 py-3 px-6 bg-white rounded-md border border-slate-300"
                      placeholder="Masukkan Jumlah (Kg)"
                      required
                    />

                    <label
                      htmlFor="catatan"
                      className="block mb-2 font-semibold text-sm text-gray-500"
                    >
                      Catatan Tambahan
                    </label>
                    <textarea
                      id="catatan"
                      name="note"
                      onChange={(e) => handleChange(e.target)}
                      className="w-full py-3 px-6 mb-2 bg-white rounded-lg border border-slate-300"
                      rows="8"
                      placeholder="Masukkan Catatan Tambahan (Optional)"
                    ></textarea>

                    {/* Status Pesanan input data default */}
                    <input
                      type="hidden"
                      name="status-pesanan"
                      id="status-pesanan"
                      value="Sedang Diproses"
                    />

                    {/* Ongkir input data default */}
                    <input
                      type="hidden"
                      name="ongkir"
                      id="ongkir"
                      value="4000"
                    />

                    <div className="flex justify-center items-center gap-2 md:gap-4">
                      {/* <a
                        href="pemesanan.html"
                        className="w-full text-xs md:text-sm text-center text-white bg-red-600 py-2 rounded-xl"
                        >
                        Kembali
                      </a> */}
                      {/* <a
                        href="pemesanan.html"
                        className="w-full text-xs md:text-sm text-center text-white bg-primary py-2 rounded-xl"
                        >
                        Pesan
                      </a> */}
                      <Link
                        to={'/pemesanan'}
                        className="w-full text-xs md:text-sm text-center text-white bg-red-600 py-2 rounded-xl"
                      >
                        Kembali
                      </Link>
                      <button
                        type="submit"
                        className="w-full text-xs md:text-sm text-center text-white bg-primary py-2 rounded-xl"
                      >
                        Pesan
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Pemesanan Cuci Kiloan End */}

      <FooterPelanggan />
    </div>
  );
}

export default CuciKiloan;
