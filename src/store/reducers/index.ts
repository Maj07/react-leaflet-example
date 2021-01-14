import { combineReducers } from "redux";
import places from "./places";
import search from "./search";

export default combineReducers({ places, search });
