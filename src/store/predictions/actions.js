import { apiUrl } from "../../config/constants";
import Axios from "axios";
import {
  appLoading,
  showMessageWithTimeout,
  appDoneLoading,
} from "../appState/actions";

export const CREATE_PREDICTION = "CREATE_PREDICTION";
export const UPDATE_PREDICTION = "UPDATE_PREDICTION";
export const ALL_PREDICTIONS_SCORES = "ALL_PREDICTIONS_SCORES";
export const MATCH_PREDICTION_DATA = "MATCH_PREDICTION_DATA";
export const GAME_SCORES_DATA = "GAME_SCORES_DATA";

const predictionsData = (data) => {
  return {
    type: ALL_PREDICTIONS_SCORES,
    payload: data,
  };
};
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

const matchPredictionsData = (dataPrediction) => {
  return {
    type: MATCH_PREDICTION_DATA,
    payload: dataPrediction,
  };
};

const gameScoresData = (dataPrediction) => {
  return {
    type: GAME_SCORES_DATA,
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

export async function fetchPredictions(dispatch, getState) {
  try {
    const response = await Axios.get(`${apiUrl}/predictions`);
    dispatch(predictionsData(response.data));
  } catch (e) {}
}

export const fetchMatchPredictions = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await Axios.get(`${apiUrl}/predictions/match/${id}`);
      // console.log("output:", response.data);
      dispatch(matchPredictionsData(response.data));
    } catch (e) {}
  };
};

export const fetchGameScores = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await Axios.get(`${apiUrl}/predictions/game/${id}`);
      // console.log("output:", response.data);
      dispatch(gameScoresData(response.data));
    } catch (e) {}
  };
};
