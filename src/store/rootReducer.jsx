import { createBrowserHistory } from "history";
import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import counterReducer from "./counterSlice";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  counter: counterReducer,
});

export default rootReducer;
