import React from "react";
import { Link } from "react-router-dom";
import logo from "./compoments/image/percilok.png";

function ResponNav() {
  return (
    <div className="navbar bg-base-300 py-5 flex-1 fixed top-0 left-0 right-0 z-50 sticky-nav">
      <div className="flex-1">
        <Link to={`/`}>
          <img src={logo} alt="Percilok Logo" className="pl-4 w-14 rouded " />
        </Link>
        <Link to={`/`}>
          <div
            className="hover:bg-none normal-case text-xl font-bold pl-3"
            href="/"
          >
            Per<span className="text-primary">Movies</span>
          </div>
        </Link>
      </div>

      <div className="dropdown dropdown-end flex-none">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            href="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to={`/`}>Home Page</Link>
          </li>
          <li>
            <Link to={`/discover/topmovies`}>Discover</Link>
          </li>
          <li>
            <Link to={`/aboutus`}>About Us</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={`/`}>Home Page</Link>
          </li>
          <li>
            <Link to={`/discover/topmovies`}>Discover</Link>
          </li>
          <li>
            <Link to={`/aboutus`}>About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

const Navbar = () => {
  return (
    <div className="container m-2">
      <ResponNav />
    </div>
  );
};

export default Navbar;
