import LaundryproLogoPutih from '../assets/img/laundrypro-logo-putih.png';
import TwitterIcon from '../assets/icon/twitter.svg';
import FacebookIcon from '../assets/icon/facebook.svg';
import InstragamIcon from '../assets/icon/instagram.svg';
import YoutubeIcon from '../assets/icon/youtube.svg';
import TiktokIcon from '../assets/icon/tiktok.svg';

function FooterPelanggan() {
  return (
    <div>
      {/* Footer Section Start */}
      <footer className="bg-primary">
        <div className="container">
          <div className="border-b-2 border-slate-300 py-8 px-4 md:px-0">
            <img src={LaundryproLogoPutih} alt="" width="100px" className="mb-4 md:mb-0" />
          </div>

          <div className="flex flex-wrap pt-8">
            <div className="mb-12 w-full px-4 font-medium md:px-0 md:w-1/2">
              <h2 className="mb-5 text-2xl font-bold text-white">LaundryPro</h2>
              <p className="w-full md:w-[435px] text-slate-300">LaundryPro adalah sebuah platform pemesanan laundry online yang memudahkan pengguna untuk mengatur dan memesan layanan
              laundry mereka secara efisien. Dengan LaundryPro, Anda dapat menjadwalkan jadwal pengambilan dan pengantaran laundry
              Anda, serta memilih jenis layanan yang Anda butuhkan. Website ini
              menyediakan kemudahan dan kenyamanan bagi pengguna yang ingin menjaga pakaian mereka tetap bersih dan rapi tanpa harus
              repot datang ke tempat laundry.</p>
            </div>
            <div className="mb-12 w-full px-4 md:px-0 md:w-1/4">
              <h3 className="mb-5 text-2xl font-semibold text-white">
                Usefull Links
              </h3>
              <ul className="text-slate-300">
                <li>
                  <a href="beranda.html" className="mb-3 inline-block text-base hover:text-white">Beranda</a>
                </li>
                <li>
                  <a href="pemesanan.html" className="mb-3 inline-block text-base hover:text-white">Pemesanan</a>
                </li>
                <li>
                  <a href="layanan.html" className="mb-3 inline-block text-base hover:text-white">Layanan</a>
                </li>
                <li>
                  <a href="tentang.html" className="mb-3 inline-block text-base hover:text-white">Tentang</a>
                </li>
                <li>
                  <a href="kontak.html" className="mb-3 inline-block text-base hover:text-white">Kontak</a>
                </li>
              </ul>
            </div>
            <div className="mb-12 w-full px-4 md:px-0 md:w-1/4">
              <h3 className="mb-5 text-2xl font-semibold text-white">Hubungi Kami</h3>
              <p className="w-[300px] text-slate-300 mb-4">LaundryPro <br />
              Jl. Mekar Puspita No. 29, Mekarwangi <br />
              Kecamatan Bojongloa Kidul <br />
              Kota Bandung</p>
              <p className="w-[200px] text-slate-300 mb-6">Phone : 081234567890 <br />
              Email : help@laundry.id</p>
              <div className="flex">
                {/* <!-- Twitter --> */}
                <a href="https://twitter.com/" target="_blank" rel="noreferrer"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full text-primary border border-white bg-white hover:bg-primary hover:text-white">
                  <img src={TwitterIcon} alt="" className="fill-current" width="20" />
                </a>
              
                {/* <!-- Facebook --> */}
                <a href="https://facebook.com/" target="_blank" rel="noreferrer"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full text-primary border border-white bg-white hover:bg-primary hover:text-white">
                  <img src={FacebookIcon} alt="" className="fill-current" width="20" />
                </a>
              
                {/* <!-- Instagram --> */}
                <a href="https://instagram.com/" target="_blank" rel="noreferrer"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full text-primary border border-white bg-white hover:bg-primary hover:text-white">
                  <img src={InstragamIcon} alt="" className="fill-current" width="20" />
                </a>
              
                {/* <!-- Youtube --> */}
                <a href="https://youtube.com/" target="_blank" rel="noreferrer"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full text-primary border border-white bg-white hover:bg-primary hover:text-white">
                  <img src={YoutubeIcon} alt="" className="fill-current" width="20" />
                </a>
              
                {/* <!-- TikTok --> */}
                <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full text-primary border border-white bg-white hover:bg-primary hover:text-white">
                  <img src={TiktokIcon} alt="" className="fill-current" width="20" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-4 bg-sky-950 text-center">
          <span className="text-sm md:text-base text-white font-medium">Copyright LaundryPro. All Rights Reserved, 2023</span>
        </div>
      </footer>
      {/* Footer Section End */}
    </div>
  )
}

export default FooterPelanggan;