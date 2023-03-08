import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Homepage = () => {
  return (
    <>
      <div className='antialiased'>
        <Navbar />
        <div className='pt-[100px] md:pt-[110px]'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
