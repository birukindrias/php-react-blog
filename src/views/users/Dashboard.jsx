import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react"; 
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
      .then((res) => console.log(res));
  };
  console.log(postData);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setpostData(e.target.value);
        }}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={(e) => {
          setpostData(e.target.value);
        }}
      ></textarea>

      <button
        type="submit"
        onClick={() => {
          createPost();
        }}
      >
        post
      </button>
    </>
  );
};
