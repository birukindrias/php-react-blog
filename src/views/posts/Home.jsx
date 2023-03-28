import { React } from "react";
import HomePage from "./views/users/HomePage";
import Register from "./views/auth/Register.js";


export const Home = () => {

    const token = useSelector((state) => state.userDataSlice.userData["token"]);
  return <div>{token ? <HomePage /> : <Register />} </div>;
};

