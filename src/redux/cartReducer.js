import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import newRequest from "../utils/newrequest";

export const getCartItemsAsync = createAsyncThunk(
  "cart/getCartItemsAsync",
  async (_, { getState }) => {
    const { currentUser } = getState().user;
    const response = await newRequest.post("cart", { _id: currentUser._id });
    return response.data.cartItems;
  }
);

const initialState = {
  cartItems: [],
  status: "idle",
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartItems: (state, action) => {
      return { ...state, cartItems: action.payload };
    },
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.productId === action.payload.productId
      );

      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.productId !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
      e;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItemsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCartItemsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems = action.payload;
      })
      .addCase(getCartItemsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addToCart, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
