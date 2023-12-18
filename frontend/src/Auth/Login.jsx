import BgLogin from '../assets/img/bg-login.png';
import LoginImg from '../assets/img/login-image.png';
import UserLoginIcon from '../assets/icon/user-login.svg';
import PasswordIcon from '../assets/icon/password.svg';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [userData, setUserData] = useState('');

  const navigate = useNavigate();

  const authLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email: email,
        password: password,
      });

      // setUserData(response.data);
      if (response.data.role == 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/');
      }
      // console.log(response.data.msg);
      console.log('Login sukses');
      // window.location.reload();
    } catch (error) {
      //dibawah ini opsi tampilkan error
      if (error.response) {
        alert(error.response.data.msg); // Menampilkan pesan error sebagai popup
      } else {
        console.log(error); // Menampilkan error pada konsol
      }
    }
  };

  return (
    <div>
      {/* Login Section Start */}
      <section
        id="login"
        style={{ backgroundImage: `url(${BgLogin})` }}
        className="relative h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center px-4 md:px-0"
      >
        <div className="bg-primary flex flex-row items-center max-w-4xl">
          <img
            src={LoginImg}
            alt="Gambar Login"
            className="hidden md:block max-w-[50%] h-auto"
          />
          <div className="flex-1 px-8 md:px-16 text-center mt-10">
            <h2 className="text-2xl text-white font-semibold mb-1">MASUK</h2>
            <span className="text-slate-300">Silahkan masuk ke akun anda</span>
            <form className="text-left mt-10" onSubmit={authLogin}>
              <div className="flex relative items-center mb-8">
                <a
                  href="#"
                  className="absolute left-0 flex h-14 w-14 rounded-full items-center justify-center bg-slate-100 text-dark"
                >
                  <img src={UserLoginIcon} alt="" width="30" />
                </a>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full bg-slate-200 text-sm py-3 pl-16 rounded-3xl outline-none"
                  placeholder="Masukkan Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex relative items-center mb-12">
                <a
                  href="#"
                  className="absolute left-0 flex h-14 w-14 rounded-full items-center justify-center bg-slate-100 text-dark"
                >
                  <img src={PasswordIcon} alt="" width="30" />
                </a>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-slate-200 text-sm py-3 pl-16 rounded-3xl outline-none"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* <a
                href="src/pelanggan/beranda.html"
                > */}
              <button
                className="block text-center text-base w-full font-bold py-3 bg-slate-100 rounded-full"
                type="submit"
              >
                Masuk
              </button>
              {/* </a> */}
            </form>
            <p className="mt-2 text-slate-300 text-sm">
              Belum Punya Akun?{' '}
              <Link to={'/register'} className="text-white">
                {/* <a href="register.html" className="text-white"> */}
                Daftar
                {/* </a> */}
              </Link>
            </p>
            <div
              className="block mt-8 text-center w-full text-sm font-bold py-3 text-transparent bg-transparent rounded-full"
            >
              Masuk
            </div>
          </div>
        </div>
      </section>
      {/* Login Section End */}
    </div>
  );
}

export default Login;
