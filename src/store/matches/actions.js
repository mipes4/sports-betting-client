import { apiUrl } from "../../config/constants";
import Axios from "axios";

export const ADD_MATCHES = "ADD_MATCHES";

export function dataFullyFetched(data) {
  return { type: ADD_MATCHES, payload: data };
}

export function fetchMatchesAndPredictions(userId) {
  return async (dispatch, getState) => {
    try {
      const response = await Axios.get(`${apiUrl}/matches/user/${userId}`);
      dispatch(dataFullyFetched(response.data));
    } catch (e) {}
  };
}
