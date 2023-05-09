import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../axios";
import ItemList from "./post/ItemList";

const Home = () => {
  
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const items = useSelector((state) => state.resource.items);
  console.log(items);
  if (!user) {
    return <div>You must be logged in to view this page.</div>;
  }
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  return (
    <div>
      
      {items ? <ItemList /> : "noopsts "}
    </div>
  );
};

export default Home;
