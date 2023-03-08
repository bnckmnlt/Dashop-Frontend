import React from "react";

const Addresses = () => {
  document.title = "Addresses";
  return (
    <div className='py-8 px-10'>
      <div className='mx-auto w-full max-w-7xl md:px-8'>
        <div className='mb-10 flex items-center'>
          <h1 className='mb-11 w-full font-rbtcondensed text-4xl font-bold text-gray-800 drop-shadow'>
            My Addresses
          </h1>
          <div>
            <button className='w-full whitespace-nowrap font-rbtcondensed text-lg font-semibold uppercase text-gray-800 underline underline-offset-2 hover:text-blue-500'>
              Add Address
            </button>
          </div>
        </div>
        <div>
          <h4 className='mb-5 font-rbtcondensed text-xl font-semibold text-gray-800'>
            Default
          </h4>
          <p className='mb-4 font-rbtcondensed text-lg font-medium text-gray-800'>
            Philippines
          </p>
          <div className='space-x-2'>
            <button className='w-24 rounded-xl bg-gray-800 py-2 px-6 font-rbtcondensed font-semibold uppercase text-white'>
              Edit
            </button>
            <button className='w-24 rounded-xl border border-gray-800 py-2 px-4 font-rbtcondensed font-semibold uppercase text-gray-800'>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
