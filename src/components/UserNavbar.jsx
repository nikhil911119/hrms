import React from "react";
import bell from "../assets/icons/bell.png";
import message from "../assets/icons/message.png";
import { Link } from "react-router-dom";

const NavIcon = ({ icon, iconbg }) => {
  return (
    <img
      src={icon}
      alt="icon"
      className="p-[8px] rounded-full h-[40px] w-[40px] object-contain"
      style={{ backgroundColor: iconbg }}
    />
  );
};

const UserNavbar = ({ profile_image }) => {
  return (
    <div className="text-[14px] bg-white fixed w-full z-20 top-0">
      <nav className="container  flex items-center justify-center relative  p-[20px] mx-auto">
        {/* Main navigation links */}
        <ul className="flex gap-[60px] font-semibold pt-[20px]">
          <li>
            <Link to={"/"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"#"}>Requests</Link>
          </li>
          <li>
            <Link>Payroll</Link>
          </li>
          <li>
            <Link>Company</Link>
          </li>
          <li>
            <Link>Extras</Link>
          </li>
        </ul>

        {/* Right-side icons */}
        <ul className="flex justify-center items-center absolute right-[20px] bottom-[10px] gap-[20px]">
          <Link to="/notification" className="flex items-center justify-center">
            <NavIcon icon={bell} iconbg="#253D90" />
          </Link>
          <Link to="/messages" className="flex items-center justify-center">
            <NavIcon icon={message} iconbg="#3F861E" />
          </Link>
          <Link to="/profile">
            <img
              src={profile_image}
              alt="user"
              className="h-[40px] w-[40px] rounded-full object-cover"
            />
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default UserNavbar;
