import React from "react";
import {
  faCat,
  faPaw,
  faBowlFood,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WhatWeDo = () => {
  return (
    <div className="max-w-[100%] lg:h-[30svh] md:h-[80svh] mt-20">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">
        <div className="mx-auto border-2 m-10 lg:w-[20svw] md:w-[20svh] sm:w-[40svw] h-auto p-5 flex flex-col items-center hover:scale-110 transition-all delay-75 cursor-pointer">
          <FontAwesomeIcon className="text-babyblue2" icon={faCat} size="4x" />
          <h2 className="text-center font-bold m-2">A Lovely Friend</h2>
          <p className="text-center text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad iusto
            sit corrupti? Distinctio cumque, itaque dicta nemo ipsa obcaecati
            accusantium repellendus voluptatum reprehenderit deleniti cupiditate
            ad fugit illo blanditiis nisi?
          </p>
        </div>
        <div className="mx-auto border-2 m-10 lg:w-[20svw] md:w-[280px] sm:w-[40svw] h-auto p-5 flex flex-col items-center hover:scale-110 transition-all delay-75 cursor-pointer">
          <FontAwesomeIcon className="text-babyblue2" icon={faPaw} size="4x" />
          <h2 className="text-center font-bold m-2">A Lovely Place</h2>
          <p className="text-center text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad iusto
            sit corrupti? Distinctio cumque, itaque dicta nemo ipsa obcaecati
            accusantium repellendus voluptatum reprehenderit deleniti cupiditate
            ad fugit illo blanditiis nisi?
          </p>
        </div>
        <div className="mx-auto border-2 m-10 lg:w-[20svw] md:w-[280px] sm:w-[40svw] h-auto p-5 flex flex-col items-center hover:scale-110 transition-all delay-75 cursor-pointer">
          <FontAwesomeIcon
            className="text-babyblue2"
            icon={faBowlFood}
            size="4x"
          />
          <h2 className="text-center font-bold m-2">A Lovely Meal</h2>
          <p className="text-center text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad iusto
            sit corrupti? Distinctio cumque, itaque dicta nemo ipsa obcaecati
            accusantium repellendus voluptatum reprehenderit deleniti cupiditate
            ad fugit illo blanditiis nisi?
          </p>
        </div>
        <div className="mx-auto border-2 m-10 lg:w-[20svw] md:w-[280px] sm:w-[40svw] h-auto p-5 flex flex-col items-center hover:scale-110 transition-all delay-75 cursor-pointer">
          <FontAwesomeIcon
            className="text-babyblue2 "
            icon={faHeart}
            size="4x"
          />
          <h2 className="text-center font-bold m-2">A Lovely Day</h2>
          <p className="text-center text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad iusto
            sit corrupti? Distinctio cumque, itaque dicta nemo ipsa obcaecati
            accusantium repellendus voluptatum reprehenderit deleniti cupiditate
            ad fugit illo blanditiis nisi?
          </p>
        </div>
      </div>
    </div>
  );
};
