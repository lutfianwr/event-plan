import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#F77E21] text-center lg:text-left flex flex-row justify-between">
      <div className="text-white text-center p-4 md:pl-14 flex flex-row content-center">
        <p>Social media:</p>
        <BsTwitter className="text-white ml-3 mr-3 mt-1" />
        <BsFacebook className="text-white mr-3 mt-1" />
        <BsYoutube className="text-white mr-3 mt-1" />
        <BsInstagram className="text-white mr-3 mt-1" />
      </div>
      <div className="text-white text-center p-4 md:pr-14">
        <p>Build ©2022 Kapangih</p>
      </div>
    </div>
  );
};

export default Footer;
