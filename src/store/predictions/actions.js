import { apiUrl } from "../../config/constants";
import Axios from "axios";
import {
  appLoading,
  showMessageWithTimeout,
  appDoneLoading,
} from "../appState/actions";

export const CREATE_PREDICTION = "CREATE_PREDICTION";
export const UPDATE_PREDICTION = "UPDATE_PREDICTION";

const createPrediction = (dataPrediction) => {
  return {
    type: CREATE_PREDICTION,
    payload: dataPrediction,
  };
};

const updatePrediction = (dataPrediction) => {
  return {
    type: UPDATE_PREDICTION,
    payload: dataPrediction,
  };
};

export const postPrediction = (
  predGoalsHomeTeam,
  predGoalsAwayTeam,
  userId,
  scoreId,
  matchId
) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await Axios.post(`${apiUrl}/predictions`, {
        predGoalsHomeTeam,
        predGoalsAwayTeam,
        userId,
        scoreId,
        matchId,
      });

      dispatch(createPrediction(response.data));
      dispatch(
        showMessageWithTimeout("success", true, "Voorspelling opgeslagen")
      );
      dispatch(appDoneLoading());
    } catch (e) {}
  };
};

export const changePrediction = (
  predGoalsHomeTeam,
  predGoalsAwayTeam,
  predictionId
) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await Axios.patch(
        `${apiUrl}/predictions/prediction/${predictionId}`,
        {
          predGoalsHomeTeam,
          predGoalsAwayTeam,
        }
      );
      dispatch(updatePrediction(response.data));
      dispatch(
        showMessageWithTimeout("success", true, "Voorspelling aangepast")
      );
      dispatch(appDoneLoading());
    } catch (e) {}
  };
};
