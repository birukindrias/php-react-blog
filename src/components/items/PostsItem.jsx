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
  const posts = useSelector((state) => state.userDataSlice.posts) ?? false;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {posts
          ? posts.map((post, index) => (
              // Only do this if items have no stable IDs
              <Grid item xs={6} md={4}>
                <PostItem
                  post={post.post}
                  title={post.title}
                  index={index}
                  img={post.img}
                  user_id={post.id}
                />
              </Grid>
            ))
          : "Loading..."}
      </Grid>
    </Box>
  );
}
