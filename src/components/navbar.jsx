import React from "react";
import { Link } from "react-router-dom";
import {
  UserIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  Bars3CenterLeftIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <>
      <div className='w-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 py-2 text-center tracking-wide'>
        <p className='font-rbtcondensed text-sm font-semibold text-white '>
          <a href='http://facebook.com'>Follow our Facebook Page &#8594; </a>
        </p>
      </div>

      <div className='bg-white drop-shadow-md first-letter:relative sm:p-1'>
        <div className='mx-auto w-full max-w-7xl'>
          <div className='flex flex-row justify-between px-4'>
            <div className='flex flex-auto items-center'>
              <Link
                to='/'
                className='flex flex-auto font-roboto text-3xl font-extrabold italic text-gray-800'>
                Dashop<span className='self-start text-base'>®</span>
              </Link>
            </div>
            <div className='hidden flex-auto items-center md:flex'>
              <Link to='/' className='navbar-button'>
                Home
              </Link>
              <Link to='/products' className='navbar-button'>
                Products
              </Link>
              <Link to='/services' className='navbar-button'>
                Services
              </Link>
              <Link to='/accessories' className='navbar-button'>
                Accessories
              </Link>
            </div>
            <div className='flex flex-1 items-center'>
              <button className='inline-block py-4 px-2 md:py-4 md:px-3'>
                <MagnifyingGlassIcon className='h-8 w-8  text-gray-800' />
              </button>
              <Link
                to='/account/signin'
                className='hidden py-4 px-2 md:inline-block md:py-4 md:px-3'>
                <UserIcon className='h-8 w-8  text-gray-800' />
              </Link>
              <button className='inline-block py-4 px-2 md:py-4 md:px-3'>
                <ShoppingBagIcon className='h-8 w-8  text-gray-800' />
              </button>
              <button className='inline-block py-4 px-2 md:hidden md:py-4 md:px-3'>
                <Bars3CenterLeftIcon className='h-8 w-8  text-gray-800' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
