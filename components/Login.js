"use client";

import { addUser } from "@/lib/features/userSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Login = ({ setShow }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    dispatch(addUser({ name, email, password }));
    setShow(true);
  };

  return (
    <div className="flex flex-col gap-2 w-full justify-center items-center h-screen">
      <input
        onChange={(e) => setName(e.target.value)}
        className="bg-gray-500 rounded px-2"
        type="text"
        placeholder="full name"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="bg-gray-500 rounded px-2"
        type="email"
        placeholder="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        className="bg-gray-500 rounded px-2"
        type="password"
        placeholder="password"
      />
      <button
        onClick={handleClick}
        className="border border-green-500 rounded px-3"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
