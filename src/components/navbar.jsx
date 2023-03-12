import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  UserIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  Bars3CenterLeftIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getCartItemsAsync,
  removeItem as deleteItem,
} from "../redux/cartReducer";
import newRequest from "../utils/newrequest";

const Navbar = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const totalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity * item.price;
    });

    return total.toFixed(2);
  };

  const removeItem = async (productId) => {
    try {
      const remove = await newRequest.put("cart/delete", {
        userId: currentUser._id,
        productId: productId,
      });
      dispatch(deleteItem(productId));
    } catch (error) {
      console.log(error);
    }
  };

  const cartItems = useSelector((state) => state.cart.cartItems);
  const status = useSelector((state) => state.cart.status);
  const error = useSelector((state) => state.cart.error);

  useEffect(() => {
    dispatch(getCartItemsAsync());
  }, [dispatch]);

  return (
    <>
      <nav className='fixed z-50 w-full bg-white drop-shadow-md sm:p-1'>
        <div className='w-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 py-2 text-center tracking-wide'>
          <p className='font-rbtcondensed text-sm font-semibold text-white '>
            <a href='http://facebook.com'>Follow our Facebook Page &#8594; </a>
          </p>
        </div>
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
            <div>
              {showCart ? (
                <button
                  className='inline-flex items-center py-4 px-2 md:py-4 md:px-3'
                  onClick={() => setShowCart(!showCart)}>
                  <span className='font-rbtcondensed font-semibold text-gray-800'>
                    Close
                  </span>
                  <XMarkIcon className='h-8 w-8 text-gray-800' />
                </button>
              ) : (
                <div className='flex flex-1 items-center justify-end'>
                  <button className='inline-block py-4 px-2 md:py-4 md:px-3'>
                    <MagnifyingGlassIcon className='h-8 w-8  text-gray-800' />
                  </button>
                  <Link
                    to='/account'
                    className='hidden py-4 px-2 md:inline-block md:py-4 md:px-3'>
                    <UserIcon className='h-8 w-8 text-gray-800' />
                  </Link>
                  <button
                    className='relative inline-block py-4 px-2 md:py-4 md:px-3'
                    onClick={() => setShowCart(!showCart)}>
                    <ShoppingBagIcon className='h-8 w-8  text-gray-800' />
                    <div className='absolute top-2 right-1 h-6 w-6 rounded-full bg-blue-500 text-center font-rbtcondensed text-sm font-semibold text-white'>
                      {cartItems && cartItems.length !== 0
                        ? `${cartItems.length}`
                        : 0}
                    </div>
                  </button>
                  <button
                    className='inline-block py-4 px-2 md:hidden md:py-4 md:px-3'
                    onClick={() => setIsEnabled(!isEnabled)}>
                    <Bars3CenterLeftIcon className='h-8 w-8  text-gray-800' />
                  </button>
                </div>
              )}
            </div>
          </div>
          {showCart && (
            <div className='fixed right-5 h-auto w-5/6 translate-y-2 rounded-md bg-white py-2 px-4 drop-shadow-sm md:right-10 md:w-1/2 lg:w-1/3 xl:right-32 xl:w-1/4'>
              <div className='relative '>
                <div className='flex items-center justify-between border-b border-b-gray-200'>
                  <h3 className='py-4 font-rbtcondensed text-xl font-bold uppercase text-gray-800'>
                    My Bag
                  </h3>
                  {cartItems && cartItems.length !== 0 && (
                    <button
                      className='rounded-full bg-red-500 py-1 px-4 font-rbtcondensed text-sm font-semibold text-white hover:bg-red-600'
                      onClick={() => dispatch(clearCart())}>
                      Reset Cart
                    </button>
                  )}
                </div>
                {cartItems && cartItems.length > 0 ? (
                  cartItems.map(
                    (
                      { productId, name, price, img, desc, quantity },
                      index
                    ) => (
                      <div className='mt-5 flex flex-auto' key={index}>
                        <img
                          src={img}
                          alt=''
                          className='h-28 w-24 bg-gray-200 object-cover'
                        />
                        <div className='flex flex-col px-4'>
                          <span className='font-rbtcondensed text-2xl font-bold'>
                            {name}
                          </span>
                          <p className='font-roboto text-xs text-gray-700'>
                            {desc}
                          </p>
                          <p className='font-rbtcondensed text-lg font-bold'>
                            {quantity} x $ {price}
                          </p>
                        </div>
                        <div>
                          <button onClick={() => removeItem(productId)}>
                            <TrashIcon className='mt-5 h-8 w-8 text-red-600' />
                          </button>
                        </div>
                      </div>
                    )
                  )
                ) : (
                  <p className='mt-4 px-2 font-rbtcondensed text-lg font-medium'>
                    Your cart is currently empty.
                  </p>
                )}
              </div>
              <div className='bottom-0 mt-4 border-t border-t-gray-200 p-2'>
                <div className='flex justify-between'>
                  <span className='font-rbtcondensed text-xl font-bold text-gray-800'>
                    Subtotal
                  </span>
                  <span className='font-rbtcondensed text-lg font-bold text-gray-800'>
                    $ {cartItems ? totalPrice() : 0}
                  </span>
                </div>
                <div className='mt-4 flex justify-end gap-3'>
                  <button className='w-1/2 rounded-md bg-blue-500 py-2 px-8 font-rbtcondensed font-bold text-white '>
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
          {isEnabled && (
            <div className='p-4'>
              <div className='flex w-full flex-col items-start justify-center rounded-md border border-gray-200 p-2 px-3'>
                <Link to='/' className='navbar-button !p-2.5'>
                  Home
                </Link>
                <Link to='/products' className='navbar-button !p-2.5'>
                  Products
                </Link>
                <Link to='/services' className='navbar-button !p-2.5'>
                  Services
                </Link>
                <Link to='/accessories' className='navbar-button !p-2.5'>
                  Accessories
                </Link>
              </div>
              <div className='mt-3 flex items-center'>
                <Link
                  to='/account/signin'
                  className='mx-auto flex w-1/2 justify-center rounded bg-blue-500 py-2 px-4 font-rbtcondensed text-lg font-semibold text-white'>
                  Sign In
                </Link>
                <Link
                  to='/account/signup'
                  className='flex w-1/2 justify-center rounded  py-2 px-4 font-rbtcondensed text-lg font-semibold text-gray-800'>
                  Create Account
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
