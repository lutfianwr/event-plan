import React from "react";
import Link from "next/link";
import { CgFormatSlash } from "react-icons/cg";
import User from "./User";

const Header = () => {
  //   const loggedin = localStorage.getItem("token");
  //   const loggedout = !loggedin;

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-400 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src="" alt="logo" className="h-8" />
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 font-semibold text-xl tracking-tight"
          >
            KAPANGIH
          </Link>
        </div>
        <div className="px-2">
          <Link
            href="/login"
            className="inline-block text-sm px-4 py-2 leading-none  rounded text-white hover:text-orange-400 mt-4 lg:mt-0"
          >
            LOGIN
          </Link>
        </div>

        <CgFormatSlash className="inline-block text-white" />
        <div className="px-2">
          <Link
            href="/register"
            className="inline-block text-sm px-4 py-2 leading-none  rounded text-white hover:text-orange-400 mt-4 lg:mt-0"
          >
            SIGN UP
          </Link>
        </div>
        <User></User>
      </div>
    </nav>
  );
};

export default Header;
