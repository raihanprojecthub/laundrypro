import React from 'react';
import Navbar from '../Components/Navbar';

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <div className="">
        <Navbar />
        <div>{children}</div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
