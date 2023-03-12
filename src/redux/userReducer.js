import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || {},
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinUser: (state, action) => {
      state.currentUser = action.payload;
    },
    signoutUser: (state, action) => {
      state.currentUser = {};
    },
  },
});

export const { signinUser, signoutUser } = userReducer.actions;

export default userReducer.reducer;
