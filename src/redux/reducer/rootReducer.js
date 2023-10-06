import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
const combinedReducer = combineReducers({
  userReducer,
  postReducer,
});
export default combinedReducer;
