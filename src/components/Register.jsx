import { useDispatch } from "react-redux";
import { Signup } from "../axios";




import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

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





function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const username = event.target.username.value;
    const password = event.target.password.value;
    if (dispatch(Signup(username, email, password))) {
      navigate("/home");
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input type="text" name="username" />
    //   <input type="email" name="email" />
    //   <input type="password" name="password" />
    //   <button type="submit">Signup</button>
    // </form>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random/?city,night)",
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
              SignUp{" "}
            </Typography>{" "}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              {/* {errors} */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="Username"
                label="Username"
                name="username"
                autoComplete="Username"
                // onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                // onChange={(e) => setEmail(e.target.value)}
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
                // onChange={(e) => setPassword(e.target.value)}
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
                SignUp{" "}
              </Button>{" "}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password ?
                  </Link>{" "}
                </Grid>{" "}
                <Grid item>
                  <Link href="/login" variant="body2">
                    {" "}
                    {" have an account?"}{" "}
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
export default Register;
