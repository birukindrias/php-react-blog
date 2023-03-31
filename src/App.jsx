import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./output.css";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Register from "./views/auth/Register.jsx";
import HomePage from "./views/users/HomePage";
import { Dashboard } from "./views/users/Dashboard.jsx";
import Login from "./views/auth/Login.jsx";
import Ck from "./components/items/Ck";
import TopNavbar from "./components/items/TopNavbar.jsx";

import { Profile } from "./views/users/Profile";
import Users from "./components/items/Users";
import { Otheruser } from "./views/users/Otheruser";
import PostItem from "./components/items/PostItem";
import Post from "./views/posts/Post";

function App() {
  let token = useSelector((state) => state.userDataSlice.token);

  return (
    <div className="App">
      <Layout>
        {" "}
        {<TopNavbar />}{" "}
        <Routes>
          {token ? (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/users" element={<Users />} />
              <Route path="/userprofile" element={<Otheruser />} />
              <Route path="/postitem" element={<Post />} />
              <Route path="/*" element={<Ck />} />

            </>
          ) : (
            <>
              <Route path="/userprofile" element={<Otheruser />} />
              <Route path="/postitem" element={<Post />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<HomePage />} />

              <Route
                path="/register"
                element={<Register onLogin={() => setIsLoggedIn(true)} />}
              />
              <Route path="/users" element={<Users />} />

              <Route
                path="/login"
                element={<Login onLogin={() => setIsLoggedIn(true)} />}
              />
              <Route path="/*" element={<Ck />} />
            </>
          )}
        </Routes>
      </Layout>{" "}
    </div>
  );
}

export default App;
