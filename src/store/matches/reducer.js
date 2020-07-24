import { ADD_MATCHES } from "./actions";

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MATCHES:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
