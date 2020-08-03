import {
  CREATE_PREDICTION /*UPDATE_PREDICTION*/,
  ALL_PREDICTIONS_SCORES,
  MATCH_PREDICTION_DATA,
  GAME_SCORES_DATA,
} from "./actions";
import { act } from "react-dom/test-utils";

const initialState = {
  data: [],
  totoScores: [],
  matchPrediction: [],
  gameScores: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PREDICTION:
      console.log("What is my payload?", action.payload);
      return { ...state, ...action.payload };

    // case UPDATE_PREDICTION:
    //   const updatedPrediction = action.payload;
    //   console.log("What is updatedPrediction?", updatedPrediction);
    // return {}

    case ALL_PREDICTIONS_SCORES:
      return {
        ...state,
        finalScores: action.payload,
      };
    case MATCH_PREDICTION_DATA:
      return {
        ...state,
        matchPrediction: action.payload,
      };
    case GAME_SCORES_DATA:
      return {
        ...state,
        gameScores: action.payload,
      };
    default:
      return state;
  }
};
