import { Link, useNavigate } from 'react-router-dom';
import FooterAdmin from '../Components/FooterAdmin';
import NavSideAdmin from '../Components/NavSideAdmin';
import { useState } from 'react';
import axios from 'axios';

function TambahUser() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('user');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/user', {
        fullname: fullName,
        username: username,
        email: email,
        phone: phone,
        address: address,
        role: role,
        password: password,
        // confPassword: confirmPassword,

        //karena gaada field confpassword
        confPassword: password,
      });
      alert(response.data.msg);
      navigate('/admin/manajemen-user');
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
      <NavSideAdmin />

      {/* Tambah User Start */}
      <section className="p-4 sm:ml-[17rem]">
        <div className="py-8 px-4 md:px-10 mt-16">
          <h4 className="mb-4 text-lg font-bold text-dark md:text-2xl">
            Tambah User
          </h4>
          <div className="border border-gray-300 rounded-md p-4">
            <form action="" onSubmit={createUser}>
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
                    placeholder="Nama Lengkap"
                    id="nama"
                    name="nama"
                    className="w-full mb-4 py-2 px-4 bg-white rounded-md border border-slate-300"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />

                  <label
                    htmlFor="username"
                    className="block mb-2 font-semibold text-sm text-gray-500"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    name="username"
                    className="w-full mb-4 py-2 px-4 bg-white rounded-md border border-slate-300"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    name="telepon"
                    className="w-full mb-4 py-2 px-4 bg-white rounded-md border border-slate-300"
                    placeholder="No. Telepon"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />

                  <label
                    htmlFor="alamat"
                    className="block mb-2 font-semibold text-sm text-gray-500"
                  >
                    Alamat
                  </label>
                  <textarea
                    name="alamat"
                    id="alamat"
                    className="w-full py-3 px-4 bg-white rounded-lg border border-slate-300"
                    rows="10"
                    value={address}
                    placeholder="Alamat"
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                </div>

                <div className="w-full md:w-1/2 md:pl-6">
                  <label
                    htmlFor="role"
                    className="block mb-2 font-semibold text-sm text-gray-500"
                  >
                    Role
                  </label>
                  <select
                    name="role"
                    id="role"
                    className="w-full mb-4 py-3 px-4 bg-white rounded-md border border-slate-300"
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="user">--Pilih Role--</option>
                    <option value="admin">admin</option>
                    <option value="user">pelanggan</option>
                  </select>

                  <label
                    htmlFor="email"
                    className="block mb-2 font-semibold text-sm text-gray-500"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full mb-4 py-2 px-4 bg-white rounded-md border border-slate-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />

                  <label
                    htmlFor="password"
                    className="block mb-2 font-semibold text-sm text-gray-500"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full mb-4 py-2 px-4 bg-white rounded-md border border-slate-300"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan Password"
                    required
                  />

                  <div className="flex justify-center items-center gap-4">
                    <Link
                      to={'/admin/manajemen-user'}
                      className="w-full text-center text-white bg-red-600 py-2 rounded-xl"
                    >
                      {/* <a
                      href="manajemen-user.html"
                      > */}
                      Kembali
                      {/* </a> */}
                    </Link>
                    {/* <a href="manajemen-user.html">Simpan</a> */}

                    <button
                      className="w-full text-center text-white bg-primary py-2 rounded-xl"
                      type="submit"
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
      {/* Tambah User End */}

      <FooterAdmin />
    </div>
  );
}

export default TambahUser;
