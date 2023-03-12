import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cartReducer";
import newRequest from "../../utils/newrequest";

const Addresses = () => {
  document.title = "Addresses";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = localStorage.getItem("currentUser");

  useEffect(() => {
    if (!currentUser) {
      navigate("/account/signin");
    } else if (currentUser.addresses && currentUser.addresses.length > 0) {
      navigate("/account/addresses");
    }
  }, [currentUser, navigate]);

  const addProduct = async () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    try {
      const addItems = await newRequest.post("cart/add", {
        userId: currentUser._id,
        productId: 1,
        name: "Blue Lock",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917/item/goods_25_427917.jpg?width=750",
        price: 100.0,
        quantity: 1,
      });
      return Promise.resolve(navigate("/account"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='py-8 px-10'>
      <div className='mx-auto w-full max-w-7xl md:px-8'>
        <div className='mb-10 flex items-center'>
          <h1 className='mb-11 w-full font-rbtcondensed text-4xl font-bold text-gray-800 drop-shadow'>
            My Addresses
          </h1>
          <div>
            <button
              onClick={addProduct}
              className='w-full whitespace-nowrap font-rbtcondensed text-lg font-semibold uppercase text-gray-800 underline underline-offset-2 hover:text-blue-500'>
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
