import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import PostsItem from "../../components/items/PostsItem.jsx";
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
export const Dashboard = () => {
  const user = useSelector((state) => state.userDataSlice.userData.user);
  console.log(user);
  const [postData, setpostData] = useState("");

  const createPost = async () => {
    await fetch("http://localhost:8080/api/v1/createpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        title: postData,
        img: postData,
        post: postData,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      {/* <input
        type="text"
        onChange={(e) => {
          setpostData(e.target.value);
        }}
      /> */}
      <div className=" ">
        <div className="w-ful px-60  flex flex-col align-bottom justify-between h-60">
          <Textarea
            label="Body"
            onChange={(e) => {
              setpostData(e.target.value);
            }}
          />
                <Input label="Image" icon={<i className="fas fa-heart"  />} type="file" />
          {/* <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={(e) => {
            setpostData(e.target.value);
          }}
        ></textarea> */}

          <Button
            type="submit"
            onClick={() => {
              createPost();
            }}
          >
            post
          </Button>
        </div>
        <PostsItem  />
      </div>
    </>
  );
};
