import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavbarPelanggan from './NavbarPelanggan';
import NavbarLanding from './NavbarLanding';

const Navbar = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getMe = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getme');

        // return response.data;
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMe();
  }, []);

  return (
    <div>{user ? <NavbarPelanggan user={user} /> : <NavbarLanding />}</div>
    // <div>
    //   <NavbarPelanggan user={user} />
    // </div>
  );
};

export default Navbar;
