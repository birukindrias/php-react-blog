import React, { useState } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { actions_usr } from "../../store/users";
// import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import LoginComp from "../../components/items/LoginComp.jsx";
import Ty from "../../components/items/Ty";

const Login = ({ isLoggedIn, onLogin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);

  const saveUser = (userdatas) => {
    dispatch(actions_usr.userDataAdd(userdatas));
  };
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/createUser",
        formValues
      );
      saveUser(response.data.data);
      navigate("/dashboard");
    } catch (error) {
        console.log('sdfa')
    //   setErrorMessage(error.response.data.message);
    }
  };

  return (
    // <LoginComp
    //   formValues={formValues}
    //   handleChange={handleChange}
    //   handleSubmit={handleSubmit}
    // />
    <Ty
      formValues={formValues}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export { Login };
