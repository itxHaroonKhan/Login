"use client";
import React from "react";
import Login from "@/components/Login";
import UserContextProvider from "@/context/UserContextProveder";
import Profile from "@/components/Profill";


const Page = () => {
  return (
    <UserContextProvider>
      <div className="text-center">

        <Login />
        <Profile />
        <h1 className="text-2xl font-bold">Context API</h1>
      </div>
    </UserContextProvider>
  );
};

export default Page;
