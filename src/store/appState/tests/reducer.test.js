import reducer from "../reducer";
import { APP_LOADING, APP_DONE_LOADING, CLEAR_MESSAGE } from "../actions";

describe("appStateReducer", () => {
  describe("if given no state and a random action", () => {
    const initialState = {
      loading: false,
      message: null,
    };
    test("returns the inital state", () => {
      const newState = reducer(undefined, { type: APP_DONE_LOADING });
      expect(newState).toEqual(initialState);
      expect(newState.message).toBeNull;
    });
    test("returns the inital state", () => {
      const newState = reducer(undefined, { type: APP_LOADING });
      expect(newState.loading).toBe(true);
      expect(newState.message).toBeNull;
    });
  });
  describe("when given APP_LOADING action type", () => {
    const initialState = {
      loading: false,
      message: null,
    };
    test("returns a new state with loading set to true", () => {
      const action = { type: APP_LOADING };
      const newState = reducer(initialState, action);
      expect(newState).toEqual({ loading: true, message: null });
      expect(newState.loading).toBe(true);
    });
  });
  describe("when given APP_DONE_LOADING action type", () => {
    const initialState = {
      loading: false,
      message: null,
    };
    test("returns a new state with loading set to false", () => {
      const action = { type: APP_DONE_LOADING };
      const newState = reducer(initialState, action);
      expect(newState).toEqual({ loading: false, message: null });
      expect(newState.loading).toBe(false);
    });
  });
  describe("when given a CLEAR_MESSAGE action type", () => {
    const state = {
      loading: true,
      message: "test_message",
    };
    test("returns a new state with the message set to null", () => {
      const action = { type: CLEAR_MESSAGE };
      const newState = reducer(state, action);
      expect(newState).toEqual({ loading: true, message: null });
      expect(newState.message).toBeNull;
      expect(newState.loading).toBe(true);
    });
  });
});
