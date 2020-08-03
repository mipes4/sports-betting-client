import { ADD_SCORES, ADD_ROUNDS } from "./actions";

const initialState = {
  scores: [],
  rounds: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCORES:
      // console.log(
      //   "reducer mathes? type:",
      //   action.type,
      //   "payload:",
      //   action.payload
      // );
      return { ...state, scores: action.payload };
    case ADD_ROUNDS:
      return { ...state, rounds: action.payload };
    default:
      return state;
  }
};
