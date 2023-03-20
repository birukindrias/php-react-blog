import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PostItem from "./PostItem";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function PostsItem() {
  const [posts, setPosts] = React.useState([]);

  let get = async () => {
    let res = await axios.get("http://localhost:8080/api/v1/posts");
    setPosts(res.data.posts);
    console.log(res.data.posts);
  };

  React.useEffect(() => {
    console.log("ssssss");
    get();
  }, []);
  const postsList = posts.map((post, index) => (
    // Only do this if items have no stable IDs
    <Grid item xs={6} md={4}>
      <PostItem post={post.post} index={index} />
    </Grid>
  ));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {postsList}
      </Grid>
    </Box>
  );
}
