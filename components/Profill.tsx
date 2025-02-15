"use client";
import UserContext from "@/context/UserContext";
import React, { useContext } from "react";

const Profile = () => {
  const { User } = useContext(UserContext);

  return (
    <div>
      <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Profile</div>
          <div>
            {User ? (
              <span className="flex items-center gap-2">
                <span>Welcome,</span>
                <span className="font-semibold">{User.UserName}</span>
              </span>
            ) : (
              <span>Login</span>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Profile;
