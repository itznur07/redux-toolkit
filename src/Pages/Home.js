import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getUsers } from "../store/actions/usersAction";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      <h1>List of users</h1>
    </div>
  );
};

export default Home;
