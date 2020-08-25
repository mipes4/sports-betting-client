import { apiUrl } from "../../config/constants";
import Axios from "axios";

export const ADD_SCORES = "ADD_SCORES";
export const ADD_ROUNDS = "ADD_ROUNDS";
export const CURRENT_GAME = "CURRENT_GAME";
export const CURRENT_ROUND = "CURRENT_ROUND";
export const ADD_TEAMS = "ADD_TEAMS";

export function dataScores(data) {
  return { type: ADD_SCORES, payload: data };
}

export function dataRounds(data) {
  return { type: ADD_ROUNDS, payload: data };
}

export function dataTeams(data) {
  return { type: ADD_TEAMS, payload: data };
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

export async function fetchTeams(dispatch, getState) {
  try {
    const response = await Axios.get(`${apiUrl}/teams`);
    dispatch(dataTeams(response.data));
  } catch (e) {}
}

// updating prediction table to final score of the player.
export async function fetchCurrentGame(dispatch, getState) {
  try {
    const response = await Axios.get(`${apiUrl}/game`);

    const round = response.data[0].round.replace(/\D/g, "");

    const game =
      round === 34
        ? 11
        : round % 3 === 0
        ? round / 3
        : Math.floor(round / 3) + 1;
    console.log("game:", game);
    dispatch({
      type: CURRENT_GAME,
      payload: game,
    });
  } catch (e) {}
}

// updating prediction table to final score of the player.
export async function fetchCurrentRound(dispatch, getState) {
  try {
    const response = await Axios.get(`${apiUrl}/game/currentround`);
    const round = response.data[0].round;
    dispatch({
      type: CURRENT_ROUND,
      payload: round,
    });
  } catch (e) {}
}
