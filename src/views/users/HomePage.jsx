import  { useSelector } from "react-redux";
import  React from "react";
// import { Dashboard } from "./Dashboards.jsx";
import { Posts } from "../posts/Posts.jsx";

export default function HomePage() {
  const token = useSelector((state) => state.userDataSlice.userData["token"]);

  return (
    <>
      <Posts />
    </>
  );
}
