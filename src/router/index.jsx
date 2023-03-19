import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Register from "../views/auth/Register.jsx";
import SignInSidei from "../views/auth/Logini.jsx";
import HomePage from "../views/users/HomePage";
import Home from "../views/Home.jsx";

// import { Route, Routes } from "react-router-dom";
import { Posts } from "../views/posts/Posts";
import { Dashboard } from "../views/users/Dashboard.jsx";
import { Profile } from "../views/users/Profile.jsx";
// import { useState } from "react";
import { Login } from "../views/auth/Login.jsx";
// const token = useSelector((state) => state.userDataSlice.userData["token"]);
const navigate = false;
const onLogout = () => {
  //   navigate("/login");
};
const handleLogout = () => {
  onLogout();
  navigate("/login");
};
const setIsLoggedIn = () => {
  onLogout();
  navigate("/login");
};
export const Main = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<HomePage />} />
    <Route
      path="/login"
      element={<SignInSidei onLogin={() => setIsLoggedIn(true)} />}
    />
    <Route
      path="/register"
      element={<Register onLogin={() => setIsLoggedIn(true)} />}
    />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/blogs" element={<Posts />} />
  </Routes>
);
