import {
  APP_LOADING,
  APP_DONE_LOADING,
  CLEAR_MESSAGE,
  SET_MESSAGE,
  appLoading,
  appDoneLoading,
  clearMessage,
  setMessage,
  // showMessageWithTimeout,
} from "../actions";

describe("appState", () => {
  describe("#setMessage", () => {
    const variant = "success";
    const dismissable = true;
    const text = "test_text";
    const expected = {
      type: SET_MESSAGE,
      payload: { variant, dismissable, text },
    };
    test("should return an object with type and payload", () => {
      expect(setMessage(variant, dismissable, text)).toEqual(expected);
      expect(setMessage(variant, dismissable, text).type).toBe(SET_MESSAGE);
      expect(setMessage(variant, dismissable, text).payload).toEqual(
        expected.payload
      );
    });
  });
  describe("#clearMessage", () => {
    const expected = {
      type: CLEAR_MESSAGE,
    };
    test("should return an object with type and no payload", () => {
      expect(clearMessage()).toEqual(expected);
      expect(clearMessage().type).toBe(CLEAR_MESSAGE);
      expect(clearMessage().payload).toBeUndefined;
    });
  });
  describe("#appLoading", () => {
    const expected = {
      type: APP_LOADING,
    };
    test("should return an object with type and no payload", () => {
      expect(appLoading()).toEqual(expected);
      expect(appLoading().type).toBe(APP_LOADING);
      expect(appLoading().payload).toBeUndefined;
    });
  });
  describe("#appDoneLoading", () => {
    const expected = {
      type: APP_DONE_LOADING,
    };
    test("should return an object with type and no payload", () => {
      expect(appDoneLoading()).toEqual(expected);
      expect(appDoneLoading().type).toBe(APP_DONE_LOADING);
      expect(appDoneLoading().payload).toBeUndefined;
    });
  });
});

/* To do: test showMessageWithTimeout. For this the functions probably needs to be converterd in to a normal function instead of being a thunk. */
