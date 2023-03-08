import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinUser: (state, action) => {
      state.currentUser = action.payload;
      console.log(state.currentUser);
    },
    signoutUser: (state, action) => {
      state.currentUser = {};
    },
  },
});

export const { signinUser, signoutUser } = userReducer.actions;

export default userReducer.reducer;
