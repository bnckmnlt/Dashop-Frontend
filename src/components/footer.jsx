import React from "react";
import { Link } from "react-router-dom";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import {
  Facebook,
  Instagram,
  Twitter,
  Discord,
  Tiktok,
  Youtube,
} from "react-bootstrap-icons";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className='border-y border-gray-200 bg-slate-50 py-7'>
          <div className='mx-auto w-full max-w-7xl px-4 md:px-10'>
            <div className='flex flex-auto flex-col items-center justify-center gap-4 md:flex-row md:px-5 lg:gap-0'>
              <p className='text-center font-rbtcondensed text-[16px] font-bold text-gray-800 md:text-lg'>
                Don't miss out on important updates and exclusive deals - sign
                up for our email list today.
              </p>
              <div className='flex flex-auto items-center justify-end space-x-3'>
                <div className=''>
                  <span className='mb-2 block font-rbtcondensed text-sm font-bold text-gray-800'>
                    Join our newsletter
                  </span>
                  <input
                    id='maillist'
                    type='email'
                    placeholder='Email Address'
                    autoCapitalize='false'
                    autoCorrect='false'
                    autoComplete='false'
                    className='rounded-md border border-gray-200 py-2 px-3 font-rbtcondensed placeholder:text-gray-500'
                  />
                </div>
                <button className='self-end rounded-md bg-gray-800 py-1.5 px-3 font-rbtcondensed text-lg font-bold uppercase text-white'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='border-b border-gray-200 bg-slate-50 py-7 md:pt-12 md:pb-7'>
          <div className='mx-auto max-w-[1500px] px-4 md:px-10'>
            <div className='mx-auto flex w-full max-w-7xl flex-wrap justify-center'>
              <div className='flex w-1/2 flex-col flex-wrap md:w-full md:max-w-[210px]'>
                <div className='mb-4 font-roboto text-[14px] font-semibold text-gray-800 md:text-base'>
                  Kawaii Studio
                </div>
                <ul className=''>
                  <Link to='' className='footer-list'>
                    About Us
                  </Link>
                  <Link to='' className='footer-list'>
                    Works
                  </Link>
                  <Link to='' className='footer-list'>
                    Documentation
                  </Link>
                  <Link to='' className='footer-list'>
                    Contact Us
                  </Link>
                </ul>
              </div>
              <div className='flex w-1/2 flex-col flex-wrap md:w-full md:max-w-[210px]'>
                <div className='mb-4 font-roboto text-[14px] font-semibold text-gray-800 md:text-base'>
                  Support
                </div>
                <ul className=''>
                  <Link to='' className='footer-list'>
                    FAQ
                  </Link>
                  <Link to='' className='footer-list'>
                    Shipping Policy
                  </Link>
                  <Link to='' className='footer-list'>
                    Payments
                  </Link>
                  <Link to='' className='footer-list'>
                    Privacy Policy
                  </Link>
                  <Link to='' className='footer-list'>
                    Product Warranty
                  </Link>
                  <Link to='' className='footer-list'>
                    Terms & Conditions
                  </Link>
                </ul>
              </div>
              <div className='flex w-full py-4 md:w-[200px] md:flex-col md:space-y-4 md:py-0'>
                <div className='flex w-1/2 flex-col flex-wrap md:w-full md:max-w-[210px]'>
                  <div className='mb-4 font-roboto text-[14px] font-semibold text-gray-800 md:text-base'>
                    Get in touch
                  </div>
                  <a href=''>
                    <span className='font-roboto text-sm text-gray-800 underline underline-offset-2'>
                      <EnvelopeIcon className='mr-1 inline-block h-5 w-5 text-gray-800' />
                      Email Us
                    </span>
                  </a>
                </div>
                <div className='flex w-1/2 flex-col flex-wrap md:w-full md:max-w-[210px] md:py-4'>
                  <div className='mb-4 font-roboto text-[14px] font-semibold text-gray-800 md:text-base'>
                    Follow Us
                  </div>
                  <ul className='flex flex-wrap gap-4'>
                    <li className=''>
                      <a href=''>
                        <Facebook className='h-6 w-6 transform transition-all delay-75 duration-150 hover:text-blue-500' />
                      </a>
                    </li>
                    <li>
                      <a href=''>
                        <Instagram className='h-6 w-6 transform transition-all delay-75 duration-150 hover:text-rose-500' />
                      </a>
                    </li>
                    <li>
                      <a href=''>
                        <Twitter className='h-6 w-6 transform transition-all delay-75 duration-150 hover:text-sky-500' />
                      </a>
                    </li>
                    <li>
                      <a href=''>
                        <Discord className='h-6 w-6 transform transition-all delay-75 duration-150 hover:text-indigo-500' />
                      </a>
                    </li>
                    <li>
                      <a href=''>
                        <Tiktok className='h-6 w-6 transform transition-all delay-75 duration-150 hover:text-slate-500' />
                      </a>
                    </li>
                    <li>
                      <a href=''>
                        <Youtube className='h-6 w-6 transform transition-all delay-75 duration-150 hover:text-red-500' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='flex w-full flex-col flex-wrap md:max-w-[210px]'>
                <div className='mb-4 font-roboto text-[14px] font-semibold text-gray-800 md:text-base'>
                  We Accept
                </div>
                <a href=''></a>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-slate-50 py-8'>
          <div className='mx-auto w-full max-w-7xl text-center'>
            <span className='px-4 font-rbtcondensed text-[13px]'>
              &copy; 2023 Dashop® | Your one-stop-shop for unique and unexpected
              finds
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
