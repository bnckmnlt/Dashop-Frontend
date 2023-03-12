import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signinUser } from "../../redux/userReducer";
import { getCartItemsAsync } from "../../redux/cartReducer";
import newRequest from "../../utils/newrequest";

const Signin = () => {
  document.title = "Account";
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const currentUser = localStorage.getItem("currentUser");

  useEffect(() => {
    if (!currentUser) {
      navigate("/account/signin");
    } else {
      navigate("/account");
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email)) {
      setError("Email is invalid");
      return;
    }

    try {
      const res = await newRequest.post("auth/signin", { email, password });
      const getCart = await newRequest.post("cart", { _id: res.data.data._id });
      localStorage.setItem("currentUser", JSON.stringify(res.data.data));
      localStorage.setItem("cartItems", JSON.stringify(getCart.data.cartItems));
      dispatch(signinUser(res.data.data));
      dispatch(getCartItemsAsync(getCart.data.cartItems));
      navigate("/account");
    } catch (error) {
      setError(error.response);
    }
  };

  return (
    <>
      <div className='py-8'>
        <div className='mx-auto w-full max-w-7xl'>
          <div className='mx-auto max-w-lg p-6 md:p-14'>
            <h1 className='mb-12 block font-rbtcondensed text-5xl font-extrabold'>
              Login
            </h1>
            {error ? (
              <p className='mb-2 inline-flex w-full items-center rounded-sm border border-red-500 bg-red-50 py-2 px-4 font-rbtcondensed font-semibold text-red-500'>
                <span className='mr-2 flex h-2 w-2 rounded-full bg-red-500' />
                {error && error}
              </p>
            ) : (
              ""
            )}
            <form action='' onSubmit={handleSubmit}>
              <label
                htmlFor=''
                className='mb-3 block font-rbtcondensed text-[17px] font-semibold text-gray-800'>
                Email
              </label>
              <input
                type='text'
                onChange={(e) => setEmail(e.target.value)}
                className='mb-7 w-full rounded-sm border border-gray-200 py-2 px-3 focus:outline-blue-500'
                required
              />
              <div className='mb-3 flex items-center justify-between'>
                <label
                  htmlFor=''
                  className='block font-rbtcondensed text-[17px] font-semibold text-gray-800'>
                  Password
                </label>
                <Link
                  to=''
                  className='font-rbtcondensed font-semibold text-blue-600'
                  tabIndex={-1}>
                  Forgot Password?
                </Link>
              </div>
              <input
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                className='mb-7 w-full rounded-sm border border-gray-200 py-2 px-3 focus:outline-blue-500'
                required
              />
              <button className='text-bold w-full rounded-md bg-black py-3 px-4 font-rbtcondensed text-lg font-bold text-white'>
                SIGN IN
              </button>
            </form>
            <p className='mt-4 font-rbtcondensed'>
              Didn't have an account?{" "}
              <Link to='/account/signup' className='font-bold text-blue-600'>
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
