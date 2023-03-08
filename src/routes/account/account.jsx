import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newrequest";
import { useDispatch, useSelector } from "react-redux";
import { signoutUser } from "../../redux/userReducer";

const Account = () => {
  document.title = "Account";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userAvailable = useSelector((state) => state.user.currentUser._id);

  useEffect(() => {
    if (!userAvailable) {
      navigate("/account/signin");
    } else {
      navigate("/account");
    }
  }, [userAvailable, navigate]);

  const logoutUser = async () => {
    try {
      await newRequest.post("auth/logout");
      await dispatch(signoutUser());
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <div className='z-0 py-8 px-10'>
        <div className='mx-auto w-full max-w-7xl'>
          <div className='mb-10 flex items-center'>
            <h1 className='mb-11 w-full font-rbtcondensed text-4xl font-bold text-gray-800 drop-shadow'>
              My Account
            </h1>
            <div>
              <button
                onClick={logoutUser}
                className='font-rbtcondensed font-semibold text-gray-800 underline-offset-2 hover:text-red-500 hover:underline'>
                Logout
              </button>
            </div>
          </div>
          <div className='flex flex-wrap'>
            <div className='w-full md:w-2/3'>
              <h2 className='mb-5 font-rbtcondensed text-3xl font-bold text-gray-700 drop-shadow'>
                Order History
              </h2>
              <p className='font-roboto font-medium text-gray-600'>
                You haven't placed any orders yet.
              </p>
            </div>
            <div className='w-full md:w-2/6'>
              <h2 className='mb-5 font-rbtcondensed text-2xl font-semibold text-gray-700 drop-shadow'>
                Account Details
              </h2>
              <p className='mb-2 font-roboto font-medium text-gray-600'>
                Philippines
              </p>
              <Link
                to='addresses'
                className='font-roboto font-medium text-gray-600 underline-offset-2 hover:text-blue-500 hover:underline'>
                View Addresses (1)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
