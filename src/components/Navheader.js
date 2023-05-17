import React from "react";
import { useDispatch } from "react-redux";
import { AuthSliceAction } from "../Store/AuthSlice";

const Navheader = () => {
  const dispatch = useDispatch();
  const LogoutHandler = (e) => {
    e.preventDefault();
    dispatch(AuthSliceAction.logout());
  };
  return (
    <div>
      <button onClick={LogoutHandler}>Logout</button>{" "}
    </div>
  );
};

export default Navheader;
