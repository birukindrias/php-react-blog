import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Ck = () => {
  let ioo = useSelector((state) => state.userDataSlice.userData["user"]);
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login");
  };
  useEffect(() => {
    navigate("/login");
  
  }, []);
  console.log(ioo);
  const user = () => {
    if (useSelector((state) => state.userDataSlice.userData["user"])) {
      console.log(useSelector((state) => state.userDataSlice.userData["user"]));
      return true;
    }
    return false;
  };
  user;

  if (ioo) {
    console.log("sfadfsfd");
  } else {
    navigate("/login");
    console.log("w");
  }
  return "user";
};
export default Ck;
