import { ADD_MATCHES, CURRENT_ROUND_MATCHES } from "./actions";

const initialState = {
  data: [],
  curRoundMatches: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MATCHES:
      return { ...state, data: action.payload };
    case CURRENT_ROUND_MATCHES:
      return { ...state, curRoundMatches: action.payload };
    default:
      return state;
  }
};
