import {combineReducers} from "redux";
import modal from "./modal";
import user from "./user";
import instruction from "./instruction";

export default combineReducers({ modal, user, instruction });
