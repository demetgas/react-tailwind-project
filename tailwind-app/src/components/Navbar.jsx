import React, { useState } from "react";
import { faCat, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white ">
      <div className="pl-16 text-2xl text-gray-400 hover:text-white hover:scale-110 transition-all delay-75 cursor-pointer">
        LITTLE PAWS
        <FontAwesomeIcon className="icon" icon={faCat} />
      </div>
      <div className="flex space-x-6 pr-16 text-gray-400 text-xl cursor-pointer md:hidden">
        {!open ? (
          <FontAwesomeIcon className="" icon={faBars} onClick={handleClick} />
        ) : (
          <FontAwesomeIcon
            className="icon"
            icon={faTimes}
            onClick={handleClick}
          />
        )}
      </div>
      <div
        className={`absolute top-full right-0 ${
          open
            ? "flex flex-col border border-white text-2xl p-6 mr-16 absolute md:relative md:border-none"
            : "hidden"
        } md:pr-16 text-gray-400 md:text-xl cursor-pointer`}
      >
        <a href="/" className="hover:text-white">
          Home
        </a>
        <a href="#purpose" className="hover:text-white">
          Purpose
        </a>
        <a href="#info" className="hover:text-white">
          Info
        </a>
        <a href="#gallery" className="hover:text-white">
          Gallery
        </a>
        <a href="#contact" className="hover:text-white">
          Contact
        </a>
      </div>
    </div>
  );
};
