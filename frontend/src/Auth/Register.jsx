import BgLogin from '../assets/img/bg-login.png';
import RegisterImg from '../assets/img/register-image.png';
import UserLoginIcon from '../assets/icon/user-login.svg';
import UserCheckIcon from '../assets/icon/user-check.svg';
import MailIcon from '../assets/icon/mail.svg';
import PhoneIcon from '../assets/icon/phone.svg';
import PasswordIcon from '../assets/icon/password.svg';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const authRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/register', {
        fullname: fullName,
        username: username,
        email: email,
        phone: phone,
        password: password,
        // confPassword: confirmPassword,

        //karena gaada field confpassword
        confPassword: password,
      });
      alert(response.data.msg);
      navigate('/login');
      // window.location.reload();
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
      {/* <!-- Register Section Start --> */}
      <section
        id="register"
        style={{ backgroundImage: `url(${BgLogin})` }}
        className="relative h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center px-4 md:px-0"
      >
        <div className="bg-primary py-8 md:py-0 flex flex-row items-center max-w-4xl">
          <img
            src={RegisterImg}
            alt="Gambar Register"
            className="hidden md:block max-w-[50%] h-auto"
          />
          <div className="flex-1 px-8 md:px-16 text-center">
            <h2 className="text-xl text-white font-semibold mb-1">DAFTAR</h2>
            <span className="text-slate-300 text-sm">
              Ayo Bergabung Bersama 10,000 User Lainnya
            </span>
            <form className="text-left mt-10" onSubmit={authRegister}>
              <div className="flex relative items-center mb-8">
                <a
                  href="#"
                  className="absolute left-0 flex h-14 w-14 rounded-full items-center justify-center bg-slate-100 text-dark"
                >
                  <img src={UserLoginIcon} alt="" width="30" />
                </a>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  className="w-full bg-slate-200 text-sm py-3 pl-16 rounded-3xl outline-none"
                  placeholder="Nama Lengkap"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="flex relative items-center mb-8">
                <a
                  href="#"
                  className="absolute left-0 flex h-14 w-14 rounded-full items-center justify-center bg-slate-100 text-dark"
                >
                  <img src={UserCheckIcon} alt="" width="30" />
                </a>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full bg-slate-200 text-sm py-3 pl-16 rounded-3xl outline-none"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="flex relative items-center mb-8">
                <a
                  href="#"
                  className="absolute left-0 flex h-14 w-14 rounded-full items-center justify-center bg-slate-100 text-dark"
                >
                  <img src={MailIcon} alt="" width="30" />
                </a>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-slate-200 text-sm py-3 pl-16 rounded-3xl outline-none"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex relative items-center mb-8">
                <a
                  href="#"
                  className="absolute left-0 flex h-14 w-14 rounded-full items-center justify-center bg-slate-100 text-dark"
                >
                  <img src={PhoneIcon} alt="" width="30" />
                </a>
                <input
                  type="number"
                  id="telepon"
                  name="telepon"
                  className="w-full bg-slate-200 text-sm py-3 pl-16 rounded-3xl outline-none"
                  placeholder="No. Telepon"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
              {/* Alamat input data default */}
              <input type="hidden" name="alamat" id="alamat" value="-" />

              {/* Role input data default */}
              <input type="hidden" name="role" id="role" value="pelanggan" />

              {/* <a
                href="login.html"
                className="block text-center w-full text-sm font-bold py-3 bg-slate-100 rounded-full"
              >
                Daftar
              </a> */}

              <button
                className="block text-center text-base w-full font-bold py-3 bg-slate-100 rounded-full"
                type="submit"
              >
                Daftar
              </button>
            </form>
            <p className="mt-2 text-slate-300 text-sm">
              Sudah Punya Akun?{' '}
              <Link to={'/login'} className="text-white">
                {/* <a href="login.html" className="text-white"> */}
                  Masuk
                {/* </a> */}
              </Link>
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Register Section End --> */}
    </div>
  );
}

export default Register;
