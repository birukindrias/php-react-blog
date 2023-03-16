import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Register from "./views/auth/Register.jsx";
import HomePage from "./views/users/HomePage";
import Home from "./views/Home.js";
import { Posts } from "./views/posts/Posts";
import { Dashboard } from "./views/users/Dashboard.jsx";
import { Profile } from "./views/users/Profile.jsx";
import { useNavigate } from "react-router-dom";
import TopNavbar from "./components/items/TopNavbar";

import { Login } from "./views/auth/Login";


function App() {
    const token = useSelector((state) => state.userDataSlice.userData["token"]);
    console.log(token);
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
    // let token = 'false';
    return ( <
            div className = "App" >
            <
            Layout > { " " } <
            TopNavbar isLoggedIn = { isLoggedIn }
            onLogout = { handleLogout }
            />{" "} { / * Add other components here * / } { " " } <
            Routes >
            <
            Route path = "/"
            element = { < Home / > }
            />{" "} <
            Route path = "/home"
            element = { < HomePage / > }
            />{" "} <
            Route path = "/login"
            element = { < Login onLogin = {
                    () => setIsLoggedIn(true)
                }
                />} / >
                <
                Route
                path = "/register"
                element = { < Register onLogin = {
                        () => setIsLoggedIn(true)
                    }
                    />} / >
                    <
                    Route path = "/dashboard"
                    element = { < Dashboard / > }
                    />{" "} <
                    Route path = "/profile"
                    element = { < Profile / > }
                    />{" "} <
                    Route path = "/blogs"
                    element = { < Posts / > }
                    />{" "} < /
                    Routes > { " " } <
                    /Layout>{" "} < /
                    div >
                );
            }

            export default App;