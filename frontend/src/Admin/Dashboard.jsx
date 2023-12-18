import FooterAdmin from '../Components/FooterAdmin';
import NavSideAdmin from '../Components/NavSideAdmin';
import Dashboard1 from '../assets/img/Content/dashboard-1.png';
import Dashboard2 from '../assets/img/Content/dashboard-2.png';
import Dashboard3 from '../assets/img/Content/dashboard-3.png';
import Dashboard4 from '../assets/img/Content/dashboard-4.png';

function Dashboard() {
  return (
    <div>
      <NavSideAdmin />

      {/* Dashboard Section Start */}
      <section className="p-4 sm:ml-[17rem]">
        <div className="py-8 px-4 md:px-10 mt-16">
          <div className="grid w-full grid-cols-1 gap-4 mt-4 mb-12 md:grid-cols-3">
            <img src={Dashboard1} alt="" className="w-full" />
            <img src={Dashboard2} alt="" className="w-full" />
            <img src={Dashboard3} alt="" className="w-full" />
          </div>
          <img src={Dashboard4} alt="" className="w-full" />
        </div>
      </section>
      {/* Dashboard Section End */}

      <FooterAdmin />
    </div>
  );
}

export default Dashboard;
