import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayError, setDisplayError] = useState();

  const verifyEmail = (email) => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
      setDisplayError(true);
    } else {
      setDisplayError(false);
    }
  };

  const handleError = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='py-8'>
        <div className='mx-auto w-full max-w-7xl'>
          <div className='mx-auto max-w-lg p-14'>
            <h1 className='mb-12 block font-rbtcondensed text-5xl font-extrabold'>
              Create Account
            </h1>
            {displayError === false ? (
              <p className='mb-2 inline-flex w-full items-center rounded-sm border border-red-500 bg-red-50 py-2 px-4 font-rbtcondensed font-semibold text-red-500'>
                <span className='mr-2 flex h-2 w-2 rounded-full bg-red-500' />
                Email is invalid
              </p>
            ) : (
              ""
            )}
            <form action='' onSubmit={handleError}>
              <label
                htmlFor=''
                className='mb-3 block font-rbtcondensed text-[17px] font-semibold text-gray-800'>
                First Name
              </label>
              <input
                type='text'
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                className='mb-7 w-full rounded-sm border border-gray-200 py-2 px-3 focus:outline-blue-500'
                required
              />
              <label
                htmlFor=''
                className='mb-3 block font-rbtcondensed text-[17px] font-semibold text-gray-800'>
                Last Name
              </label>
              <input
                type='text'
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                className='mb-7 w-full rounded-sm border border-gray-200 py-2 px-3 focus:outline-blue-500'
                required
              />
              <label
                htmlFor=''
                className='mb-3 block font-rbtcondensed text-[17px] font-semibold text-gray-800'>
                Email
              </label>
              <input
                type='email'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className='mb-7 w-full rounded-sm border border-gray-200 py-2 px-3 focus:outline-blue-500'
                required
              />
              <label
                htmlFor=''
                className='block font-rbtcondensed text-[17px] font-semibold text-gray-800'>
                Password
              </label>
              <input
                type='password'
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className='mb-7 w-full rounded-sm border border-gray-200 py-2 px-3 focus:outline-blue-500'
                required
              />
              <button
                onClick={() => verifyEmail(email)}
                name='submit'
                id='submit'
                className='text-bold w-full rounded-md bg-black py-3 px-4 font-rbtcondensed text-lg font-bold text-white'>
                CREATE
              </button>
            </form>
            <p className='mt-4 text-center font-rbtcondensed'>
              Already have an account?{" "}
              <Link
                to='/account/signin'
                className='font-semibold text-blue-600'>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
