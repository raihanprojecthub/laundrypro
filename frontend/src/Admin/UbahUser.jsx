import { useEffect, useState } from 'react';
import FooterAdmin from '../Components/FooterAdmin';
import NavSideAdmin from '../Components/NavSideAdmin';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UbahUser() {
  const { uuid } = useParams();
  const [user, setUser] = useState('');

  const getUserByUUID = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/user/${uuid}`);

      setUser(response.data);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getUserByUUID();
  }, []);

  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [role, setRole] = useState('user');
  // const [image, setImage] = useState(null);
  // const [imageData, setImageData] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();
  const updateUser = async () => {
    // e.preventDefault();
    try {
      const formUpdate = new FormData();

      formUpdate.append('username', username);
      formUpdate.append('fullname', fullName);
      formUpdate.append('address', address);
      formUpdate.append('phone', phone);
      formUpdate.append('email', email);
      formUpdate.append('role', role);

      //updateuser
      await axios.patch(`http://localhost:5000/user/${user.uuid}`, formUpdate, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log('data user', formUpdate);
   
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  const updateUserPassword = async () => {
    try {
      await axios.patch(`http://localhost:5000/user/password/${user.uuid}`, {
        password: password,
        confPassword: password,
      });

      console.log('Berhasil update password user');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  const handleSubmit = () => {
    // e.preventDefault();

    updateUserPassword();
    updateUser();

    alert('sukses update data user');
    navigate('/admin/manajemen-user');
  };

  return (
    <div>
      <NavSideAdmin />

      {/* Ubah User Start */}
      <section className="p-4 sm:ml-[17rem]">
        <div className="py-8 px-4 md:px-10 mt-16">
          <h4 className="mb-4 text-lg font-bold text-dark md:text-2xl">
            Ubah User
          </h4>
          <div className="border border-gray-300 rounded-md p-4">
            {/* <form action=""> */}
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
                  name="nama"
                  className="w-full mb-4 py-2 px-4 bg-white rounded-md border border-slate-300"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={user?.fullname}
                  // required
                />

                <label
                  htmlFor="username"
                  className="block mb-2 font-semibold text-sm text-gray-500"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full mb-4 py-2 px-4 bg-white rounded-md border border-slate-300"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder={user?.username}
                  // required
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={user?.phone}
                  // required
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
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={user?.address}
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
                  placeholder={user?.email}
                  // required
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
                  placeholder="***************"
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
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full text-center text-white bg-primary py-2 rounded-xl"
                  >
                    Simpan
                  </button>
                  {/* <a
                      href="manajemen-user.html"
                    > */}
                  {/* </a> */}
                </div>
              </div>
            </div>
            {/* </form> */}
          </div>
        </div>
      </section>
      {/* Ubah User End */}

      <FooterAdmin />
    </div>
  );
}

export default UbahUser;
