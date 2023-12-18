import { useState } from 'react';
import FooterPelanggan from '../Components/FooterPelanggan';
import Navbar from '../Components/Navbar';
import NavbarPelanggan from '../Components/NavbarPelanggan';
import CostumerService from '../assets/img/Content/costumer-service.jpg';
import axios from 'axios';

function Kontak() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [reportMessage, setReportMessage] = useState('');

  const createReport = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/report', {
        fullname: fullName,
        email: email,
        reportMessage: reportMessage,
      });

      alert('Pesan anda sudah terkirim');
      window.location.reload();
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg); // Menampilkan pesan error sebagai popup
      } else {
        console.log(error); // Menampilkan error pada konsol
      }
    }
  };

  return (
    <div>
      {/* <NavbarPelanggan /> */}
      <NavbarPelanggan />

      {/* Contact Section Start */}
      <section id="contact" className="pt-32 pb-32">
        <div className="container">
          <div className="w-full px-4 md:px-0">
            <div className="bg-sky-100 px-6 py-6 md:px-12 md:pt-12 pb-12 md:pb-0 rounded-xl flex flex-wrap justify-center items-center">
              <div className="w-full self-center mb-10 md:w-1/2">
                <img src={CostumerService} alt="" className="md:pr-10" />
              </div>
              <div className="w-full self-center text-sm md:text-base md:w-1/2">
                <h2 className="mb-2 text-center text-xl font-bold text-dark md:text-3xl">
                  Kontak Kami
                </h2>
                <p className="mb-6 text-center">
                  Silahkan tinggalkan Pesan anda pada Kolom yang Tersedia
                </p>
                <form onSubmit={createReport}>
                  <label htmlFor="nama" className="block mb-3 font-semibold">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    className="w-full mb-6 py-3 px-6 bg-white rounded-lg"
                    placeholder="Masukkan Nama Lengkap"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />

                  <label htmlFor="email" className="block mb-3 font-semibold">
                    Email Aktif
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full mb-6 py-3 px-6 bg-white rounded-lg"
                    placeholder="Masukkan Email Aktif"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <label htmlFor="pesan" className="block mb-3 font-semibold">
                    Pesan / Pengaduan
                  </label>
                  <textarea
                    name="pesan"
                    id="pesan"
                    className="w-full mb-4 py-3 px-6 bg-white rounded-lg"
                    rows="4"
                    placeholder="Masukkan Pesan Anda"
                    value={reportMessage}
                    onChange={(e) => setReportMessage(e.target.value)}
                  ></textarea>

                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-primary rounded-md"
                  >
                    KIRIM
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}

      <FooterPelanggan />
    </div>
  );
}

export default Kontak;
