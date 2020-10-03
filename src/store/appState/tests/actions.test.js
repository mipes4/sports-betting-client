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
});
