import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },

    LoginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutSucess: (state) => {
      state.currentUser = false;
      state.error = false;
    },
  },
});

export const { loginStart, LoginSuccess, loginFailure, logoutSucess } =
  userSlice.actions;

export default userSlice.reducer;
