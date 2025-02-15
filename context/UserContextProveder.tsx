"use client";
import React, { useState } from "react";
import UserContext from "./UserContext";
import { UserType } from "./types";


const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [User, setUser] = useState<UserType | null>(null);

  return (
    <UserContext.Provider value={{ User, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
