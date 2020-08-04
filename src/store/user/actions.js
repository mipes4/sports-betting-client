import { apiUrl } from "../../config/constants";
import Axios from "axios";
import { selectToken } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";
export const UPDATE_USER = "UPDATE_USER";

const loginSuccess = (userWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken,
  };
};

const tokenStillValid = (userWithoutToken) => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
});

export const logOut = () => ({ type: LOG_OUT });

export const updateUser = (data) => {
  return {
    type: UPDATE_USER,
    payload: data,
  };
};

export const signUp = (
  userName,
  firstName,
  lastName,
  telNumber,
  email,
  password,
  totaalToto,
  isAdmin
) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await Axios.post(`${apiUrl}/signup`, {
        userName,
        firstName,
        lastName,
        telNumber,
        email,
        password,
        totaalToto,
        isAdmin,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "account created"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        // console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await Axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "Welkom terug!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await Axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

export const changeUser = (
  userId,
  username,
  email,
  firstName,
  lastName,
  phoneNumber,
  club,
  totaalToto
  // password
) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await Axios.patch(`${apiUrl}/change_me/${userId}`, {
        userId,
        username,
        email,
        firstName,
        lastName,
        phoneNumber,
        club,
        totaalToto,
        // password,
      });
      dispatch(loginSuccess(response.data));
      dispatch(
        showMessageWithTimeout(
          "success",
          true,
          "Je profiel is aangepast!",
          1500
        )
      );
      dispatch(appDoneLoading());
      dispatch(updateUser(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
