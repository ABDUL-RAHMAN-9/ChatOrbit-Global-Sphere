import React from "react";
import { assets, dummyUserData } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import MenuItems from "./MenuItems";
import { CirclePlus, LogOut } from "lucide-react";
import { UserButton, useClerk } from "@clerk/clerk-react";

// Sidebar component receives SidebarOpen and setSidebarOpen as props
const Sidebar = ({ SidebarOpen, setSidebarOpen }) =>
{
  const navigate = useNavigate();
  const user = dummyUserData; // Temporary dummy user data
  const { signOut } = useClerk(); // Clerk's signOut function for logout

  return (
    <div
      className={`w-60 xl:w-72 bg-white border-r border-gray-200 flex flex-col justify-between items-center 
      max-sm:absolute top-0 bottom-0 z-20
      ${SidebarOpen ? "translate-x-0" : "max-sm:-translate-x-full"} 
      transition-all duration-300 ease-in-out`}
    >
      {/* Sidebar top section */}
      <div className="w-full">
        {/* Logo (clickable to navigate home) */}
        <img
          src={assets.logo}
          alt="logo"
          className="w-26 ml-7 my-2 cursor-pointer"
          onClick={() =>
          {
            navigate("/");
            setSidebarOpen(false); // Close sidebar on mobile
          }}
        />

        {/* Divider */}
        <hr className="border-gray-300 mb-8" />

        {/* Navigation menu items */}
        <MenuItems setSidebarOpen={setSidebarOpen} />
 
        {/* Create Post button */}
        <Link
          to="/create post"
          onClick={() => setSidebarOpen(false)} // Close sidebar when navigating
          className="flex items-center justify-center gap-2 py-2.5 mt-6 mx-6 rounded-lg 
          bg-gradient-to-r from-indigo-500 to-purple-600
          hover:from-indigo-700 hover:to-purple-800 active:scale-95 
          transition text-white cursor-pointer"
        >
          <CirclePlus className="w-5 h-5" />
          Create Post
        </Link>
      </div>

      {/* Sidebar bottom section (user profile + logout) */}
      <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
        {/* User info with Clerk's UserButton */}
        <div className="flex gap-2 items-center cursor-pointer">
          <UserButton /> {/* Avatar with Clerk auth controls */}
          <div>
            <h1 className="text-sm font-medium">{user.full_name}</h1>
            <p className="text-xs text-gray-500">@{user.username}</p>
          </div>
        </div>

        {/* Logout button */}
        <LogOut
          onClick={() =>
          {
            signOut();
            setSidebarOpen(false); // Close sidebar on mobile after logout
          }}
          className="w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Sidebar;
