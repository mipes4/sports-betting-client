import reducer from "../reducer";
import {
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  LOG_OUT,
  UPDATE_USER,
} from "../actions";

describe("#userReducer", () => {
  describe("#LOGIN_SUCCESS action type", () => {
    const initialState = {
      token: null,
      email: null,
    };
    const userWithToken = {
      token: "test_token",
      email: "test_email",
      userDetails: "test_user_details",
    };
    test("should return a new state with user, including token property", () => {
      const action = { type: LOGIN_SUCCESS, payload: userWithToken };
      const newState = reducer(initialState, action);
      expect(newState).toEqual(userWithToken);
      expect(newState.token).not.toBeNull();
    });
  });
  describe("#LOG_OUT action type", () => {
    const initialState = {
      token: null,
      email: null,
    };
    const userWithToken = {
      token: "test_token",
      email: "test_email",
      userDetails: "test_user_details",
    };
    test("should return initialState", () => {
      const action = { type: LOG_OUT };
      const newState = reducer(userWithToken, action);
      expect(newState).toEqual(initialState);
      expect(newState.token).toBeNull();
    });
  });
  describe("#TOKEN_STILL_VALID action type", () => {
    const initialState = {
      token: null,
      email: null,
    };
    const userWithToken = {
      token: "test_token",
      email: "test_email",
      userDetails: "test_user_details",
    };
    test("should return a new state with user, including token property", () => {
      const action = { type: TOKEN_STILL_VALID, payload: userWithToken };
      const newState = reducer(initialState, action);
      expect(newState).toEqual(userWithToken);
      expect(newState.token).not.toBeNull();
    });
  });
});
