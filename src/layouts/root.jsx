import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Homepage = () => {
  return (
    <>
      <div className='antialiased'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
