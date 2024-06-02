import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { extractUserDetailsFromToken } from "../utils/jwtUtils";

const Header = ({ isLoggedIn, onLogout }) => {
  const Links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const token = localStorage.getItem("token");
  const userDetails = extractUserDetailsFromToken(token);
  const userEmail = userDetails ? userDetails.sub : "";
  const [showEmail, setShowEmail] = useState(false);

  return (
    <header className="shadow-md w-full fixed top-0 left-0 flex justify-between px-6 items-center h-16 z-10 bg-slate-50 select-none">
      <div className="w-12 h-9 rounded-full bg-slate-800"></div>
      <nav className="flex gap-4">
        <ul className="md:flex md:items-center md:justify-between">
          {Links.map((link, index) => (
            <li
              key={index}
              className="md:mx-6 md:text-xl text-slate-800 hover:text-slate-400 transition-all duration-300"
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {isLoggedIn ? (
        <div className="relative flex items-center gap-4">
          <div
            onMouseEnter={() => setShowEmail(true)}
            onMouseLeave={() => setShowEmail(false)}
            className="relative"
          >
            <CgProfile className="w-10 h-10 text-slate-900 hover:text-slate-400 duration-300 cursor-pointer" />
            {showEmail && (
              <div className="absolute top-16 right-0 bg-slate-100 p-2 rounded-lg shadow-md">
                <p className="text-slate-800">{userEmail}</p>
              </div>
            )}
          </div>
          <button
            onClick={onLogout}
            className="text-slate-900 text-lg p-2 rounded-lg hover:rounded-xl hover:text-slate-500 duration-500"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <Link to="/login">
            <button className="text-gray-900 border-2 border-slate-300 p-2 rounded-lg hover:rounded-xl hover:bg-slate-200 duration-500">
              Log In
            </button>
          </Link>
          <Link to="/register">
            <button className="text-gray-100 bg-slate-800 p-2 rounded-lg hover:rounded-xl hover:bg-slate-700 duration-500">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
