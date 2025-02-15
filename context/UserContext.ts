"use client";
import React, { createContext } from "react";
import { UserType } from "./types";


interface UserContextType {
  User: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
}

const UserContext = createContext<UserContextType>({
  User: null,
  setUser: () => {},
} as UserContextType); 

export default UserContext;
