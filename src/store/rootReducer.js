import { combineReducers } from "redux";
import matches from "./matches/reducer";
import predictions from "./predictions/reducer";
import configs from "./configs/reducer";
import user from "./user/reducer";
import appState from "./appState/reducer";

export default combineReducers({
  matches,
  predictions,
  configs,
  user,
  appState,
});
