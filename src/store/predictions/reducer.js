import { CREATE_PREDICTION /*UPDATE_PREDICTION*/ } from "./actions";

const initialState = {
  data: [],
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

    default:
      return state;
  }
};
