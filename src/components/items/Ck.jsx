import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Ck = () => {
  let token = useSelector((state) => state.userDataSlice.token);
  const navigate = useNavigate();
//   useEffect(() => {
    console.log("token");
    console.log(token);
    if (token) {
      navigate("/");
    }
    // else{{
    //   navigate("/login");

    // }}
//   }, []);
};
export default Ck;
