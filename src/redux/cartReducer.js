import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "White Shirt",
      price: 500,
      img: "https://cdn.shopify.com/s/files/1/0101/1145/1195/products/standard-plain-round-neck-shirt-white_a69ff83d-7778-45cc-9225-3cdca1327a21_600x.png?v=1644205060",
      quantity: 1,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      name: "Red Shirt",
      price: 500,
      img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917/item/goods_25_427917.jpg?width=750",
      quantity: 1,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      name: "Blue Shirt",
      price: 500,
      img: "https://freitag.rokka.io/freitag_827_827_1x_focal_scale_crop/d39963d7a83c29414cba457b7601bfd4e397e85e.jpg",
      quantity: 1,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
