import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import { Link as linko}  from "react-router-dom";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { actions_usr } from "../../store/users";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {" "}
      {"Copyright © "}{" "}
      <Link color="inherit" href="https://mui.com/">
        Blogini{" "}
      </Link>{" "}
      {new Date().getFullYear()} {"."}{" "}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSidei() {
  const user = useSelector((state) => state.userDataSlice.userData["user"]);
  const [useriData, setuserData] = useState();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  //   erorr
  const [errorMessage, setErrorMessage] = useState(null);
  // handle form insertion
  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues);
    const response = await axios.post(
      "http://localhost:8080/api/v1/create",
      formValues
    );
    console.log(response.data);
    console.log(response.data);
    saveUser(response.data.data);
    console.log("response.data");
    console.log(response.data.data);
    navigate("/dashboard");
    console.log("response.data.data");

    //   setErrorMessage(error.response.data.message);
  };

  const dispatch = useDispatch();
  const saveUser = (userdatas) => {
    dispatch(actions_usr.userDataAdd(userdatas));
  };
  const signinUser = () => {
    dispatch(actions_usr.signinUser());
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />{" "}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>{" "}
            <Typography component="h1" variant="h5">
              Login{" "}
            </Typography>{" "}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formValues.email}
                onChange={handleChange}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formValues.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
        
              {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                          /> */}{" "}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login{" "}
              </Button>{" "}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password ?
                  </Link>{" "}
                </Grid>{" "}
                <Grid item>
                  <Link href='/register'  variant="body2">  {" "}
                    {"Don't have an account?"}{" "}
                  </Link>{" "}
                </Grid>{" "}
              </Grid>{" "}
              <Copyright sx={{ mt: 5 }} />{" "}
            </Box>{" "}
          </Box>{" "}
        </Grid>{" "}
      </Grid>{" "}
    </ThemeProvider>
  );
}
