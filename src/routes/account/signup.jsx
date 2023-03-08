import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newrequest";

const Signup = () => {
  document.title = "Create Account";
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    fullname: "",
    isSeller: false,
  });
  const [displayError, setDisplayError] = useState();
  const userAvailable = useSelector((state) => state.user.currentUser._id);

  useEffect(() => {
    if (!userAvailable) {
      navigate("/account/signup");
    } else {
      navigate("/account");
    }
  }, [userAvailable, navigate]);

  const verifyEmail = async (checkEmail) => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(checkEmail)) {
      setUser((prev) => {
        return {
          ...prev,
          email: checkEmail,
          fullname: `${user.firstname} ${user.lastname}`,
        };
      });
      setDisplayError(false);
    } else {
      setDisplayError(true);
    }
  };

  const addUser = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleError = async (e) => {
    e.preventDefault();

    if (!displayError) {
      try {
        await newRequest.post("auth/signup", {
          ...user,
        });
        navigate("/account/signin");
      } catch (error) {
        setDisplayError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className='py-8'>
        <div className='mx-auto w-full max-w-7xl'>
          <div className='mx-auto max-w-lg p-6 md:p-14'>
            <h1 className='mb-12 block font-rbtcondensed text-5xl font-extrabold'>
              Create Account
            </h1>
            {displayError ? (
              <p className='mb-2 inline-flex w-full items-center rounded-sm border border-red-500 bg-red-50 py-2 px-4 font-rbtcondensed font-semibold text-red-500'>
                <span className='mr-2 flex h-2 w-2 rounded-full bg-red-500' />
                {displayError.length > 0 ? displayError : "Email is invalid"}
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
                name='firstname'
                onChange={addUser}
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
                name='lastname'
                onChange={addUser}
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
                name='email'
                onChange={(e) => verifyEmail(e.target.value)}
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
                name='password'
                onChange={addUser}
                className='mb-7 w-full rounded-sm border border-gray-200 py-2 px-3 focus:outline-blue-500'
                required
              />
              <button
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
