import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col gap-2 w-full justify-center items-center h-screen">
      <input
        className="bg-gray-500 rounded px-2"
        type="text"
        placeholder="full name"
      />
      <input
        className="bg-gray-500 rounded px-2"
        type="email"
        placeholder="email"
      />
      <input
        className="bg-gray-500 rounded px-2"
        type="password"
        placeholder="password"
      />
      <button className="border border-green-500 rounded px-3">Login</button>
    </div>
  );
};

export default Login;
