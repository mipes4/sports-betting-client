import {
  APP_LOADING,
  APP_DONE_LOADING,
  CLEAR_MESSAGE,
  SET_MESSAGE,
  appLoading,
  appDoneLoading,
  clearMessage,
  setMessage,
  showMessageWithTimeout,
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
    test("should return an object containing type and payload", () => {
      expect(setMessage(variant, dismissable, text)).toEqual(expected);
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
});
