import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import PostsItem from "../../components/items/PostsItem.jsx";
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
export const Dashboard = () => {
  const user = useSelector((state) => state.userDataSlice.userData.user) ?? false;
  const token  = useSelector((state) => state.userDataSlice.userData.token);
  const [selectedFile, setSelectedFile] = useState(null);
  const [update, setupdate] = useState(false);

  const [postValues, setpostValues] = useState({
    user_id: user.id,
    post: "",
    img: {},
  });
  //   erorr
  // handle form insertion

  const handleChange = (event) => {
    console.log(postValues);

    setpostValues({
      ...postValues,
      [event.target.name]: event.target.value,
    });
    if (event.target.files) {
      setpostValues({
        ...postValues,
        img: event.target.files[0],
      });
    }
    console.log(postValues);
  };

  const createPost = async () => {
    setupdate(false);

    const response = await axios.post(
      "http://localhost:8080/api/v1/createpost",
      postValues,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setupdate(true);
    console.log(response.data);
  };
  const getUserDAta = async () => {

    const response = await axios.post(
      "http://localhost:8080/api/v1/getuser",
      {'token': token },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response.data);
  };

  return (
    <>
      <div className=" ">
      
        <PostsItem />
      </div>
    </>
  );
};
