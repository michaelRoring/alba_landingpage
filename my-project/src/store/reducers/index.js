import { combineReducers } from "redux";
import userReducer from "./user";

const rootReducer = combineReducers({
  // reducerList
  userReducer,
});

export default rootReducer;
