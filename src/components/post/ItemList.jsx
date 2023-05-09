import { useSelector } from 'react-redux';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PostItem from "./PostItem";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function ItemList() {
    const items = useSelector((state) => state.resource.items);
    const posts = useSelector((state) => state.resource.items);

    return (
      <ul>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {posts ? (
              posts.map((post, index) => (
                // Only do this if items have no stable IDs
                <Grid item xs={6} md={4}>
                  <PostItem
                    post={post.post}
                    title={post.title}
                    index={index}
                    img={post.img}
                    postid={post.pid}
                    userid={post.user_id}
                  />
                </Grid>
              ))
            ) : (
              <div class="w-full h-full text-center">No Posts</div>
            )}
          </Grid>
        </Box>
        {/* {items.map((item) => (
          <li key={item.id}>
            <div className="span">{item.title}</div>
            <div className="span">{item.post}</div>
          </li>
        ))} */}
      </ul>
    );
}
export default ItemList;
