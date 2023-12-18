import NavSideAdmin from '../Components/NavSideAdmin';
import UserPlus from '../assets/icon/user-plus.svg';
import PencilIcon from '../assets/icon/pen-to-squre.svg';
import TrashIcon from '../assets/icon/trash-icon.svg';
import FooterAdmin from '../Components/FooterAdmin';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ManajemenUser() {
  const [userData, setUserData] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');

      setUserData(response.data);
      console.log(userData);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // const deleteUser = async (uuid) => {
  //   try {
  //     await axios.delete(`http://localhost:5000/user/${uuid}`);
  //     getUsers();

  //     console.log('berhasil menghapus pengguna');
  //   } catch (error) {
  //     if (error.response) {
  //       alert(error.response.data.msg);
  //     } else {
  //       console.log(error);
  //     }
  //   }
  // };


  const deleteUser = async (uuid) => {
    try {
      const confirmation = window.confirm('Apakah anda yakin ingin menghapus data ini?');
      if (confirmation) {
        await axios.delete(`http://localhost:5000/user/${uuid}`);
        getUsers();
        console.log('Berhasil menghapus data');
      } else {
        console.log('Penghapusan pengguna dibatalkan');
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
      <section className="p-4 sm:ml-[17rem]">
        <div className="py-8 px-4 md:px-10 mt-16">
          <h4 className="mb-4 text-lg font-bold text-dark md:text-2xl">
            Manajemen User
          </h4>
          <div className="overflow-auto border border-gray-300 rounded-md p-4 mb-8">
            <Link to={'/admin/tambah-user'}>
              {/* <a href="tambah-user.html"> */}
              <button className="mb-4 py-2 px-4 text-white bg-primary rounded-md">
                <img
                  src={UserPlus}
                  alt=""
                  className="inline pr-1 mb-1"
                  width="20"
                />
                Tambah User
              </button>
              {/* </a> */}
            </Link>
            <table id="table-user" className="table-user text-xs w-full">
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Role</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user, index) => (
                  <tr>
                    <td>{user?.fullname}</td>
                    <td>{user?.email}</td>
                    <td>{user?.password}</td>
                    <td>{user?.role}</td>
                    <td>
                      <div className="w-full flex flex-wrap justify-center align-center gap-1">
                        <Link
                          className="text-center py-2 px-3 text-white bg-sky-600 rounded"
                          to={`/admin/ubah-user/${user.uuid}`}
                        >
                          {/* <a
                          href="ubah-user.html"
                          > */}
                          <img
                            src={PencilIcon}
                            alt=""
                            className="inline pr-1 mb-1"
                          />
                          Ubah
                          {/* </a> */}
                        </Link>
                        <button
                          onClick={() => deleteUser(user.uuid)}
                          className="text-center py-2 px-2 text-white bg-red-600 rounded"
                        >
                          {/* <a
                          href=""
                          > */}
                          <img
                            src={TrashIcon}
                            alt=""
                            className="inline pr-1 mb-1"
                          />
                          Hapus
                          {/* </a> */}
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

export default ManajemenUser;
