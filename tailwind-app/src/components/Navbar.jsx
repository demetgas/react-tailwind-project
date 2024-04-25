import React from "react";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white ">
      <div className="pl-16 text-2xl text-gray-400 hover:text-white hover:scale-110 transition-all delay-75 cursor-pointer">
        LITTLE PAWS
        <FontAwesomeIcon className="icon" icon={faCat} />
      </div>
      <div className="flex space-x-6 pr-16 text-gray-400 text-xl cursor-pointer">
        <a href="/" className="hover:text-white">
          Home
        </a>
        <a href="/" className="hover:text-white">
          Info
        </a>
        <a href="/" className="hover:text-white">
          Contact
        </a>
        <a href="/" className="hover:text-white">
          Gallery
        </a>
      </div>
    </div>
  );
};
