import reducer from "../reducer";
import { APP_LOADING } from "../actions";

describe("appStateReducer", () => {
  const initialState = {
    loading: false,
    message: null,
  };
  describe("when given APP_LOADING action type", () => {
    test("returns a new state with loading set to true", () => {
      const action = { type: APP_LOADING };
      const newState = reducer(initialState, action);
      expect(newState).toEqual({ loading: true, message: null });
      expect(newState.loading).toBe(true);
    });
  });
});
