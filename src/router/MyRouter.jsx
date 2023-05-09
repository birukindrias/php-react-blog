import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";
import rootReducer from "./reducers";

export const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer),
  compose(applyMiddleware(routerMiddleware(history)))
);

function MyRouter({ children }) {
  return <Router history={history}>{children}</Router>;
}
