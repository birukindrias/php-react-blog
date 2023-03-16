import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  rightButtons: {
    marginLeft: 'auto',
  },
}));

const TopNavbar = ({ isLoggedIn, onLogout }) => {
  const classes = useStyles();
  isLoggedIn = true;
  const navigate = useNavigate();

  const handleLogout = () => {
    // onLogout();
    localStorage.removeItem("token");
            console.log(localStorage.getItem("token"));

    navigate('/login');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            <Typography variant="h6" className={classes.title}>
              MyApp
            </Typography>
          </Button>
          <div className={classes.rightButtons}>
            {isLoggedIn && (
              <>
                <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
                <Button color="inherit" component={Link} to="/blogs">Blogs</Button>
                <Button color="inherit" component={Link} to="/profile">Profile</Button>
                <Button color="inherit" onClick={handleLogout}>Logout</Button>
              </>
            )}
            {!isLoggedIn && (
              <Button color="inherit" component={Link} to="/login">Login</Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopNavbar;
