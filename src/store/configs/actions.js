import { apiUrl } from "../../config/constants";
import Axios from "axios";

export const ADD_SCORES = "ADD_SCORES";
export const ADD_ROUNDS = "ADD_ROUNDS";

export function dataScores(data) {
  return { type: ADD_SCORES, payload: data };
}

export function dataRounds(data) {
  return { type: ADD_ROUNDS, payload: data };
}

export function fetchScores() {
  return async (dispatch, getState) => {
    try {
      const response = await Axios.get(`${apiUrl}/scores`);
      dispatch(dataScores(response.data));
    } catch (e) {}
  };
}

export function fetchRounds() {
  return async (dispatch, getState) => {
    try {
      const response = await Axios.get(`${apiUrl}/rounds`);
      dispatch(dataRounds(response.data));
    } catch (e) {}
  };
}

// updating prediction table to final score of the player.
export function addTotalScore(id, totalScore) {
  return async (dispatch, getState) => {
    try {
      const response = await Axios.patch(`${apiUrl}/predictions/${id}`, {
        totalScore,
      });
    } catch (e) {}
  };
}
