import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./output.css";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Register from "./views/auth/Register.jsx";
import HomePage from "./views/users/HomePage";
import Home from "./views/Home";
// import { Route, Routes } from "react-router-dom";
import { Posts } from "./views/posts/Posts";
import { Dashboard } from "./views/users/Dashboard.jsx";
import { useNavigate } from "react-router-dom";
import TopNavbar from "./components/items/TopNavbar";
import { Main } from "./router/index";
import Login from "./views/auth/Logini.jsx";
import { initializeUseSelector } from "react-redux/es/hooks/useSelector";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  // let token = localStorage.getItem("token") ?? false;
  const user = useSelector((state) => state.userDataSlice.userData.token);
  // let token = 'false';
  return (
    <div className="App">
      <Layout>
        {" "}
        {<TopNavbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />}{" "}
        <Main/>
      </Layout>{" "}
    </div>
  );
}

export default App;
