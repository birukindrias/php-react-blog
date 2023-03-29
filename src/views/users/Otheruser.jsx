import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import PostItem from "../../components/items/PostItem";
import { actions_usr } from "../../store/users";
// import { actions_usr } from "../store/users";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import PostItem from "./PostItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Otheruser = () => {
  //hooks
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  //dispatchs

  const saveOtherUser = (ouser) => {
    dispatch(actions_usr.setOthorUser(ouser));
  };
  // data
  const user = useSelector((state) => state.userDataSlice.ouser) ?? false;

  const getUserDAta = async () => {
    const id = location.state.id;
    console.log(id);
    if (id) {
      const response = await axios.post(
        "http://localhost:8080/api/v1/getotheruser",
        {
          id: id,
        }
      );
      console.log(response.data.data.user);
      saveOtherUser(response.data.data.user);
      const oposts = await axios.post(
        "http://localhost:8080/api/v1/userposts",
        {
          id: id,
        }
      );
      console.log(oposts.data.posts);
      setPosts(oposts.data.posts);
    }
  };
  useEffect(() => {
    getUserDAta();
  }, []);

  // console.log(data);
  //   let image_Name = user.img ? user.img : "def.jpeg";
  let image = `http://localhost:8080/storage/profile/${
    user.img ? user.img : "def.jpeg"
  }`;

  return (
    <>
      <div className="relative  my-3">
        <div className="flex flex-col justify-center items-center my-3">
          <div
            className="w-16 h-16 bg-cover bg-center  bg-no-repeat rounded-full"
            img={image}
            Style={`background-image: url(${image})`}
          ></div>
          <span className="my-3">@{user.username}</span>
          {/* 
            <div className="flex gap-10 text-sm">
                <div className="flex flex-col items-center">
                    <span className="font-bold">10</span>
                    <span>Following</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-bold">1.20 K</span>
                    <span>Followers</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-bold">100 K</span>
                    <span>Likes</span>
                </div>
            </div> */}

          <p className="mb-3">{user.bio}</p>
        </div>

        <div className="max-w-2xl mx-auto grid grid-cols-4">
          <button className="mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="border-b-2 border-gray-600 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </button>

          <button className="mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </button>
          <button className="mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-5 w-full ">
          <div className="flex flex-wrap absolute items-center justify-center">
            {posts ? (
              posts.map((post, index) => (
                // Only do this if items have no stable IDs
                <Grid item xs={2} md={2} className="flex flex-wrap">
                  <PostItem
                    post={post.post}
                    title={post.title}
                    index={index}
                    img={post.img}
                    className="w-2"
                  />
                </Grid>
              ))
            ) : (
              <div>no posts yet </div>
            )}
            {/* {userposts && <div>no posts yet </div>} */}
          </div>
        </div>
      </div>
    </>
  );
};
export { Otheruser };
