import React, { useState } from "react";
import { faCat, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white">
      <div className="pl-16 text-2xl text-gray-400 hover:text-white hover:scale-110 transition-all delay-75 cursor-pointer">
        LITTLE PAWS
        <FontAwesomeIcon className="icon" icon={faCat} />
      </div>
      <div className="md:hidden">
        <button onClick={handleClick} className="text-xl text-gray-400  mr-4">
          {open ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
      <ul
        className={`md:flex  ${
          open ? "block" : "hidden"
        } md:mt-0 mt-4 absolute md:relative  top-full right-0 md:top-0 md:right-auto md:flex flex-col md:flex-row text-gray-400 text-xl bg-hero2 md:bg-transparent w-full md:w-auto justify-center items-center`}
      >
        <li className="p-4 hover:text-white" onClick={handleClick}>
          <a href="/">Home</a>
        </li>
        <li className="p-4 hover:text-white" onClick={handleClick}>
          <a href="#purpose">Purpose</a>
        </li>
        <li className="p-4 hover:text-white" onClick={handleClick}>
          <a href="#info">Info</a>
        </li>
        <li className="p-4 hover:text-white" onClick={handleClick}>
          <a href="#gallery">Gallery</a>
        </li>
        <li className="p-4 hover:text-white" onClick={handleClick}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};
