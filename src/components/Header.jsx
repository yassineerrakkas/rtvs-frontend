import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let Links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="shadow-md w-full fixed top-0 left-0 flex justify-between px-6 items-center h-16 z-10 bg-slate-50">
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
    </header>
  );
};

export default Header;
