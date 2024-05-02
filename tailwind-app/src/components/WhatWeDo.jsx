import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import whatWeDo from "../data/whatwedo";

export const WhatWeDo = () => {
  return (
    <div className="max-w-[100%] h-auto mt-20">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        {whatWeDo.map((item) => (
          <div className="mx-auto border-2 m-10 lg:w-[20svw] md:w-[20svh] sm:w-[40svw] w-[80svw] h-auto p-5 flex flex-col items-center hover:scale-110 hover:border-babyblue2  transition-all delay-75 cursor-pointer">
            <FontAwesomeIcon
              className="text-babyblue2"
              icon={item.icon}
              size="4x"
            />
            <h2 className="text-center font-bold m-2">{item.title}</h2>
            <p className=" text-justify">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
