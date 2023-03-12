import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartItems: (state, action) => {
      return { ...state, cartItems: action.payload };
    },
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.productId === action.payload.productId
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.productId !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { getCartItems, addToCart, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
