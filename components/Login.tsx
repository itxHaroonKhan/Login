"use client";
import UserContext from "@/context/UserContext";
import React, { useContext, useState } from "react";

const Login = () => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");

  const  {setUser} = useContext(UserContext)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      setUser({UserName, Password})
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg space-y-4 w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <input
          type="text"
          value={UserName}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
        />

        <input
          type="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 font-medium"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
