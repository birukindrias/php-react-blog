import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./output.css";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Register from "./views/auth/Register.jsx";
import HomePage from "./views/users/HomePage";
// ? import Home from "./views/Home";
// ? import { Route, Routes } from "react-router-dom";
// ? import { Main } from "./router/index";
// ? import Login from "./views/auth/Logini.jsx";
import { Posts } from "./views/posts/Posts";
import { Dashboard } from "./views/users/Dashboard.jsx";
import SignInSidei from "./views/auth/Logini.jsx";
import Ck from "./components/items/Ck";

import { useNavigate } from "react-router-dom";
import { default as TopNavbar } from "./components/items/TopNavbar.jsx";

import { initializeUseSelector } from "react-redux/es/hooks/useSelector";
import PostsItem from "./components/items/PostsItem";
import { Profile } from "./views/users/Profile";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login");
  };

  let user = useSelector((state) => state.userDataSlice.userData["user"]);

  return (
    <div className="App">
      <Layout>
        {" "}
        {<TopNavbar />}{" "}
        <Routes>
          {/* <Route path="/" element={<Home />} />
    <Route path="/home" element={<HomePage />} /> */}

          {user ? (
            <>
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/profile" element={<Profile />} />
            </>
          ) : (
            <>
              <Route
                path="/login"
                element={<SignInSidei onLogin={() => setIsLoggedIn(true)} />}
              />

              <Route
                path="/register"
                element={<Register onLogin={() => setIsLoggedIn(true)} />}
              />

              <Route path="/" element={<HomePage />} />
              <Route path="/*" element={<Ck />} />
            </>
          )}
        </Routes>
      </Layout>{" "}
    </div>
  );
}

export default App;
