import { loginFailure, loginStart, LoginSuccess } from "./userRedux";

import { publicRequest } from "../pages/requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);

    dispatch(LoginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

// change to register, change make new reducer.
export const register = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/register", user);

    dispatch(LoginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
