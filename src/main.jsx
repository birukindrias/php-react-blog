import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./output.css";
import { store } from "./store/index";
import { Routes, Route } from "react-router-dom";
import Register from "./views/auth/Register.jsx";
import HomePage from "./views/users/HomePage";
import Home from "./views/Home.jsx";
// import { Route, Routes } from "react-router-dom";
import { Posts } from "./views/posts/Posts";
import { Dashboard } from "./views/users/Dashboard.jsx";
import { Profile } from "./views/users/Profile.jsx";
const container = document.getElementById("root");
const root = createRoot(container);
import { ThemeProvider } from "@material-tailwind/react";

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <ThemeProvider>
        <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
