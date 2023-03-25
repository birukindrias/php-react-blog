import React, { useState } from "react";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PostItem from "./PostItem";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { actions_usr } from "../../store/users";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function PostsItem() {
  const [posts, setPosts] = useState([]);

  const update = useSelector((state) => state.userDataSlice.pstupdate);
  //   const postsdata  = useSelector((state) => state.userDataSlice.postsdata);
  const userpostsdata =
    useSelector((state) => state.userDataSlice.userpostsdata) ?? false;
  const dispatch = useDispatch();

  console.log(update);
  const setpostsdata = (data) => {
    dispatch(actions_usr.setpostsdata(data));
  };
  console.log("update");
  console.log(update);
  let getPosts = async () => {
    let res = await axios.get("http://localhost:8080/api/v1/posts");
    setPosts(res.data.posts);
    setpostsdata(res.data.posts);
  };

  useEffect(() => {
    console.log("update");
    console.log(update);
    getPosts();
  }, []);
  //   const postsList = posts.map((post, index) => (
  //     // Only do this if items have no stabl e IDs
  //     <Grid item xs={6} md={4}>
  //       <PostItem post={post.post} index={index} />
  //     </Grid>
  //   ));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {userpostsdata &&
          userpostsdata.map((post, index) => (
            // Only do this if items have no stable IDs
            <Grid item xs={6} md={4}>
              <PostItem
                post={post.post}
                title={post.title}
                index={index}
                img={post.img}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
