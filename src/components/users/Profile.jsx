import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import { getUserSuccess } from "../store/users";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
// import PostItem from "./PostItem";
import { update } from "../../axios";
import { logout as logingout } from "../../store/AuthSlice";
import PostItem from "../post/PostItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Profile = () => {
  const [model, setmodel] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openModel = (state) => {
    setmodel(!model);
  };
  const logout = () => {
    dispatch(logingout());
    navigate("/login");
  };

  const token = useSelector((state) => state.auth.token) ?? null;
  const user = useSelector((state) => state.auth.user) ?? null;

  const [formValues, setFormValues] = useState({
    remember_token: token,
    email: user.email,
    username: user.username,
    password: user.password,
    bio: user.bio,
    img: {},
  });
  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
    if (event.target.files) {
      setFormValues({
        ...formValues,
        img: event.target.files[0],
      });
    }
    console.log("   form value update");
    console.log(formValues);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(update(formValues));
    setmodel(!model);
  };
  const [posts, setposts] = useState([]);
  const getUserPost = async () => {
    const response = await axios.post(
      "https://web.biruksoftware.com/api/v1/userposts",
      {
        id: user["id"],
      }
    );
    console.log(response.data.posts);
    setposts(response.data.posts);
  };

  useEffect(() => {
    getUserPost();
    console.log(posts);
  }, []);
  console.log("user");
  console.log(user.img);
  console.log(user.img);
  //   let image_Name = user.img ? user.img : "def.jpeg";
  let image = `https://web.biruksoftware.com/storage/profile/${
    user.img ? user.img : "def.jpeg"
  }`;

  return (
    <>
      <div className="relative  my-3">
        {model && (
          <div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10 z-10 mx-auto w-full h-full max-w-2xl md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Edit Profile
                  </h3>
                  <button
                    onClick={openModel}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="defaultModal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6 ">
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-start justify-between gap-2"
                  >
                    <Input
                      label="username"
                      name="username"
                      type="username"
                      value={formValues.username}
                      onChange={handleChange}
                    />
                    <Input
                      label="email"
                      name="email"
                      type="email"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                    <Input
                      label="password"
                      name="password"
                      type="password"
                      value={formValues.password}
                      onChange={handleChange}
                    />
                    <Input
                      label="bio"
                      name="bio"
                      type="bio"
                      value={formValues.bio}
                      onChange={handleChange}
                    />
                    <Input
                      label="Profile Image"
                      icon={<i className="fas fa-heart" />}
                      name="img"
                      type="file"
                      onChange={handleChange}
                    />

                    <Button
                      type="submit"
                      // onClick={() => {
                      //     handleSubmit();
                      // }}
                    >
                      update
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col justify-center items-center my-3">
          <div
            className="w-36 h-36  bg-center bg-cover bg-no-repeat rounded-full"
            img={image}
            Style={`background-image: url(${image})`}
          ></div>
          <span className="my-3">@{user.username}</span>

          <button
            className="my-5 px-5 py-2 font-semibold text-sm border border-gray-400"
            onClick={openModel}
          >
            Edit profile
          </button>

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
          <button className="mx-auto">
            <img
              onClick={logout}
              src="https://img.icons8.com/dotty/80/null/logout-rounded.png"
              className="w-6 h-6"
            />
          </button>
        </div>

        <div className="flex justify-center mt-5 w-full ">
          <div className="flex flex-wrap absolute items-center justify-center">
            {posts ? (
              posts.map((post, index) => (
                // Only do this if items have no stable IDs
                <>
                  <Grid item xs={2} md={2} className="grid ">
                    <PostItem
                      post={post.post}
                      title={post.title}
                      index={index}
                      img={post.img}
                      postid={post.pid}
                      userid={post.user_id}
                    />
                  </Grid>
                </>
              ))
            ) : (
              <div>no posts yet </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export { Profile };
