import { useEffect, useState } from 'react';
import NavSideAdmin from '../Components/NavSideAdmin';
import EnvelopeIcon from '../assets/icon/envelope.svg';
import TrashIcon from '../assets/icon/trash-icon.svg';
import axios from 'axios';
import FooterAdmin from '../Components/FooterAdmin';

function LaporanPelanggan() {
  const [reportData, setReportData] = useState([]);

  const getReports = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/reports`);

      setReportData(response.data);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      } else {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getReports();
  }, []);

  // const deleteReport = async (uuid) => {
  //   try {
  //     await axios.delete(`http://localhost:5000/report/${uuid}`);

  //     console.log(`berhasil menghapus data laporan`);

  //     getReports();

  //     //ketika getreports berada dalam useefect
  //     // window.location.reload();
  //   } catch (error) {
  //     if (error.response) {
  //       alert(error.response.data.msg);
  //     } else {
  //       console.log(error);
  //     }
  //   }
  // };

  const deleteReport = async (uuid) => {
    try {
      const confirmation = window.confirm('Apakah anda yakin ingin menghapus data ini?');
      if (confirmation) {
        await axios.delete(`http://localhost:5000/report/${uuid}`);
        console.log(`Berhasil menghapus data laporan`);
        getReports();
        // window.location.reload();
      } else {
        console.log('Penghapusan data laporan dibatalkan');
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
            Laporan Pelanggan
          </h4>
          <div className="overflow-auto border border-gray-300 rounded-md p-4 mb-8">
            <table id="table-laporan" className="text-xs md:text-sm w-full">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Pesan</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((report, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{report.fullname}</td>
                    <td>{report.email}</td>
                    <td>{report.reportMessage}</td>
                    <td>
                      <div className="w-full flex flex-wrap justify-center align-center gap-1">
                        <a
                          href={"mailto:" + report.email} target="_blank" rel="noreferrer"
                          className="text-center py-2 px-3 text-white bg-sky-600 rounded"
                        >
                          <img
                            src={EnvelopeIcon}
                            alt=""
                            className="inline pr-1 mb-1"
                          />
                          Email
                        </a>
                        <button
                          onClick={() => deleteReport(report.uuid)}
                          className="text-center py-2 px-2 text-white bg-red-600 rounded"
                        >
                          <img
                            src={TrashIcon}
                            alt=""
                            className="inline pr-1 mb-1"
                          />
                          Hapus
                        </button>
                        {/* <a
                        href=""
                        className="text-center py-2 px-2 text-white bg-red-600 rounded"
                      > */}
                        {/* Hapus */}
                        {/* </a> */}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Main Section Start */}

      <FooterAdmin/>
    </div>
  );
}

export default LaporanPelanggan;
