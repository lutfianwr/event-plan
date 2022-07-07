import React from "react";
import Link from "next/link";
import { CgFormatSlash } from "react-icons/cg";
import User from "./User";

const Header = () => {
  let loggedin;
  let loggedout;
  if (typeof window !== "undefined") {
    //console.log("You are on the browser");
    loggedin = localStorage.getItem("token");
    loggedout = !loggedin;

    // 👉️ can use localStorage here
  } else {
    //console.log("You are on the server");
    // 👉️ can't use localStorage
  }

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 border-b-2 drop-shadow-md sticky top-0 bg-white">
      <div className="flex items-center flex-shrink-0 mr-6">
        <img
          src="https://th.bing.com/th/id/OIP.mMZYVKRM9liWWB_ErBOJZgAAAA?pid=ImgDet&rs=1"
          alt="logo"
          className="h-8"
        />
      </div>

      <div className="w-full flex-grow flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 font-semibold text-xl tracking-tight"
          >
            KAPANGIH
          </Link>
        </div>

        <div hidden={loggedin}>
          <div className="flex">
            <div className="px-2">
              <Link
                href="/login"
                className="block text-sm px-4 py-2 leading-none  rounded text-white hover:text-orange-400 mt-4 lg:mt-0"
              >
                LOGIN
              </Link>
            </div>

            <CgFormatSlash className="inline-block text-gray-600" />
            <div className="px-2">
              <Link
                href="/register"
                className="inline-block text-sm px-4 py-2 leading-none  rounded text-white hover:text-orange-400 mt-4 lg:mt-0"
              >
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
        <div hidden={loggedout}>
          {" "}
          <User></User>
        </div>
      </div>
    </nav>
  );
};

export default Header;
