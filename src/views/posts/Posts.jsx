import React, { useEffect, useLayoutEffect } from "react";
import { makeStyles } from "@mui/styles";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions_post } from "../../store/posts";
import { actions_usr } from "../../store/users";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

function Posts() {
    const [allpost, setallpost] = useState([]);

    const dispatch = useDispatch();
    const saveUser = (userdatas) => {
      dispatch(actions_usr.userDataAdd(userdatas));
    };
    const signinUser = () => {
      dispatch(actions_usr.signinUser());
    };
  
    let token = useSelector((state) => state.userDataSlice.token);
    const handleSubmit = async () => {
      const response = await axios.post("http://localhost:8080/api/v1/getuser", {
        token: token,
      });
  
      console.log(response.data.data);
      saveUser(response.data.data);
  
      //   setErrorMessage(error.response.data.message);
    };
    handleSubmit()
    console.log(token);
    useLayoutEffect(() => {
      handleSubmit();
    }, []);
    const getPosts = (posts) => {
      dispatch(actions_post.postDataAdd(posts));
    };
 
useEffect(() => {
    let rees =  axios
    .get("http://localhost:8080/api/v1/posts").then((result) => {
        console.log(result.data)
        getPosts(result.data.posts)
        console.log(result.data.posts)
        setallpost(result.data.posts)
  
        console.log("getallposts")
        
    }).catch((err) => {
        console.log(err)
    });
 
   console.log('sssssssssss')
   console.log(rees)
   console.log('asdjfiaidfa')
   const response =  axios.post("http://localhost:8080/api/v1/getuser", {
        token: token,
      });
  
      console.log(response.data.data);
      saveUser(response.data.data);
  },[]);

const postsarray = ()=>{
    if (allpost) {
        return allpost
    }else{
        return 'no post'
    }
}
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {/* {allpost  ? allpost.map((e)=>{
            return   <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://source.unsplash.com/random"
                title="Blog post title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                 {e.post}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A brief summary of the blog post.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        }) :  'no posts'} */}
       asdf


        {/* Add more Grid items for more blog posts */}
      </Grid>
    </div>
  );
}

export { Posts };
