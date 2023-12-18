import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './Index/LandingPage';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Pemesanan from './Pelanggan/Pemesanan';
import AkunSaya from './Pelanggan/AkunSaya';
import CuciSatuan from './Pelanggan/CuciSatuan';
import CuciKiloan from './Pelanggan/CuciKiloan';
import Kontak from './Pelanggan/Kontak';
import Layanan from './Pelanggan/Layanan';
import Tentang from './Pelanggan/Tentang';
import RiwayatPemesanan from './Pelanggan/RiwayatPemesanan';
import PengaturanAkun from './Pelanggan/PengaturanAkun';
import DetailPesananSatuan from './Pelanggan/DetailPesananSatuan';
import DetailPesananKiloan from './Pelanggan/DetailPesananKiloan';
import Dashboard from './Admin/Dashboard';
import ManajemenOrder from './Admin/ManajemenOrder';
import ManajemenUser from './Admin/ManajemenUser';
import LaporanPelanggan from './Admin/LaporanPelanggan';
import ProsesSatuan from './Admin/ProsesSatuan';
import ProsesKiloan from './Admin/ProsesKiloan';
import TambahSatuan from './Admin/TambahSatuan';
import TambahKiloan from './Admin/TambahKiloan';
import UbahUser from './Admin/UbahUSer';
import TambahUser from './Admin/TambahUser';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/akun-saya" element={<AkunSaya />} />
          <Route path="/pemesanan" element={<Pemesanan />} />

          <Route path="/cuci-kiloan" element={<CuciKiloan />} />
          <Route path="/cuci-satuan" element={<CuciSatuan />} />

          <Route path="/kontak" element={<Kontak />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/tentang" element={<Tentang />} />

          <Route path="/riwayat-pemesanan" element={<RiwayatPemesanan />} />
          <Route path="/pengaturan-akun" element={<PengaturanAkun />} />

          <Route
            path="/detail-pesanan/satuan/:uuid"
            element={<DetailPesananSatuan />}
          />
          <Route
            path="/detail-pesanan/kiloan/:uuid"
            element={<DetailPesananKiloan />}
          />

          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/manajemen-order" element={<ManajemenOrder />} />
          <Route path="/admin/manajemen-user" element={<ManajemenUser />} />
          <Route
            path="/admin/laporan-pelanggan"
            element={<LaporanPelanggan />}
          />

          <Route path="/admin/proses-satuan/:uuid" element={<ProsesSatuan />} />
          <Route path="/admin/proses-kiloan/:uuid" element={<ProsesKiloan />} />

          <Route path="/admin/tambah-satuan" element={<TambahSatuan />} />
          <Route path="/admin/tambah-kiloan" element={<TambahKiloan />} />

          <Route path="/admin/ubah-user/:uuid" element={<UbahUser />} />
          <Route path="/admin/tambah-user" element={<TambahUser />} />
        </Routes>
      </BrowserRouter>
      {/* <LandingPage/> */}
    </div>
  );
}
