import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../../axios";

const ItemList = () => {
  const items = useSelector((state) => state.items.items);
  const loading = useSelector((state) => state.items.loading);
  const error = useSelector((state) => state.items.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default ItemList;
