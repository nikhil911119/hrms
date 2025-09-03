import React, { useEffect } from "react";
import UserNavbar from "../components/UserNavbar";

const UserLayout = ({ children }) => {
    useEffect(()=>{
        
    })
  return (
    <>
      <UserNavbar />
      <div className="container mx-auto px-[10px] mt-[100px]"> 

      {children}
      </div>
    </>
  );
};

export default UserLayout;
