import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import PostsItem from "../../components/items/PostsItem.jsx";
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import UploadComponent from "../../components/items/i.jsx";
export const Dashboard = () => {
  const user = useSelector((state) => state.userDataSlice.userData.user);
  const [selectedFile, setSelectedFile] = useState(null);

  const [postValues, setpostValues] = useState({
    user_id: user.id,
    body: "",
    img: {},
  });
  //   erorr
  // handle form insertion
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

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
    const response = await axios.post(
      "http://localhost:8080/api/v1/createpost",
      postValues ,
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
        <div className="w-ful px-60  flex flex-col align-bottom justify-between h-60">
          <Textarea
            label="Body"
            name="body"
            value={postValues.body}
            onChange={handleChange}
          />
          <Input
            label="Image"
            icon={<i className="fas fa-heart" />}
            name="img"
            type="file"
            onChange={handleChange}
          />
          <UploadComponent />
          <img src="http://localhost:8080/filea/img/7444Screenshot_2023-03-09_16_49_23.png"/>

          <Button
            type="submit"
            onClick={() => {
              createPost();
            }}
          >
            post
          </Button>
        </div>
        <PostsItem />
      </div>
    </>
  );
};
