import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  },[]);


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {allpost.map((e)=>{
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
        }) }


        {/* Add more Grid items for more blog posts */}
      </Grid>
    </div>
  );
}

export { Posts };
