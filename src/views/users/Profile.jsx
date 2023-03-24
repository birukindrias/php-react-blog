import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import axios from "axios";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
const Profile = () => {
  const dispatch = useDispatch();

  const user =
    useSelector((state) => state.userDataSlice.userData["user"]) ?? false;
  const token = useSelector((state) => state.userDataSlice.token) ?? false;
  console.log(user);
  const [model, setmodel] = useState(false);
  const [formValues, setFormValues] = useState({
    remember_token: token,
    email: user.email,
    username: user.username,
    password: user.password,
    bio: user.bio,
    img: {},
  });
  const logout = () => {
    dispatch(actions_usr.logout());
    navigate("/login");
    navigate("/login");
  };
  const saveUser = (userdatas) => {
    dispatch(actions_usr.userDataAdd(userdatas));
  };
  const signinUser = () => {
    dispatch(actions_usr.signinUser());
  };
  const [userposts, setPosts] = useState(null);

  // handle form insertion
  const handleChange = (event) => {
    console.log("   asdfklsa");

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
    console.log("   asdfklsa");
    console.log(formValues);
  };
  const navigate = useNavigate();
  let getPosts = async () => {
    let res = await axios.post("http://localhost:8080/api/v1/userposts", {
      remember_token: token,
    });
    setPosts(res.data.posts);
    console.log(userposts);
  };

  console.log("userposts");
  console.log(userposts);

  useEffect(() => {
    getPosts();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues);
    const response = await axios.post(
      "http://localhost:8080/api/v1/update",
      formValues,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    saveUser(response.data.data);

    console.log("response.data");
    signinUser();
    console.log(response.data.data);
    console.log("response.data.data");
    setmodel(!model);

    //   setErrorMessage(error.response.data.message);
  };
  const openModel = (state) => {
    console.log(model);
    setmodel(!model);
    console.log(model);

    // console.log('asjdfkajfkssdhsdkfssffsdfasdgsdgggdfngdjgjdgjdkgjdjfsjfjssdjdhhjhhhhh')
  };
  const userValue =
    useSelector((state) => state.userDataSlice.userData["user"]) ?? false;

  let imagevar = user.img ? userValue.img : "def.jpeg";
  let imgi = `http://localhost:8080/storage/profile/${imagevar}`;

  //   let imgi = `http://localhost:8080/storage/profile/${user.img}`;
  let username = user.username;
  let bio = user.bio;
  let image = `background-image: url(${imgi})`;
  console.log(image);

  return (
    <>
      <div className="relative  my-3">
        {/* <div className="flex justify-between items-center text-sm">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
            </button>
            <a href="#" className="flex gap-1 items-center">
                <span className="font-bold">Geeky Gamer</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </a>
            <div className="flex gap-2">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div> */}

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
                    {/* <Input
                    label="Profile Picture"
                    type="file"
                    icon={<i className="fas fa-heart" />}
                    name="img"
                    value={formValues.email}
                    onChange={handleChange}
                  /> */}

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
                {/* <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    I accept
                  </button>
                  <button
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    Decline
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col justify-center items-center my-3">
          <div
            className="w-16 h-16 bg-cover bg-center bg-no-repeat rounded-full"
            img={image}
          >
            <img
              className="w-16 h-16 bg-cover bg-center bg-no-repeat rounded-full"
              src={imgi}
              alt=""
            />
          </div>
          <span className="my-3">@{username}</span>
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

          <button
            className="my-5 px-5 py-2 font-semibold text-sm border border-gray-400"
            onClick={openModel}
          >
            Edit profile
          </button>

          <p className="mb-3">{bio}</p>
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
                stroke-linejoin="round"
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
              stroke-width="2"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
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
              stroke-width="2"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
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
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
               
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg> */}
          </button>
        </div>

        <div className="flex justify-center mt-5 w-full ">
          <div className="flex flex-wrap absolute items-center justify-center">
            {userposts ? (
              userposts.map((post, index) => (
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
          {/* {userposts &&
          userposts.map((post, index) => (
            // Only do this if items have no stable IDs
              <PostItem
                post={post.post}
                title={post.title}
                index={index}
                img={post.img}
              />
          ))} */}
        </div>
      </div>
    </>
  );
};
export { Profile };
