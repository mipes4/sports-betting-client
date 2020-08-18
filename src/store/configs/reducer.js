import { ADD_SCORES, ADD_ROUNDS, CURRENT_GAME, CURRENT_ROUND } from "./actions";

const initialState = {
  scores: [],
  rounds: null,
  currentGame: null,
  currentRound: null,
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
    case CURRENT_GAME:
      return { ...state, currentGame: action.payload };
    case CURRENT_ROUND:
      return { ...state, currentRound: action.payload };
    default:
      return state;
  }
};
