"use client";

import { viewUser } from "@/lib/features/userSlice";
import React from "react";
import { useSelector } from "react-redux";

const Main = ({ setShow }) => {
  const user = useSelector(viewUser);

  return (
    <div>
      <button onClick={() => setShow(false)}>Back</button>
      <p>userName: {user.name}</p>
      <p>email: {user.email}</p>
      <p>password: {user.password}</p>
    </div>
  );
};

export default Main;
