import React from "react";
import cats from "../data/cats";

export const Cats = () => {
  return (
    <div className="max-w-[1140px] mx-auto w-full grid grid-cols-1 md:grid-cols-4 mt-[-75px]">
      {cats.map((cat) => (
        <div
          className="relative p-4 hover:scale-110 delay-75 cursor-pointer text-center"
          key={cat.id}
        >
          <img
            className="w-64 h-64 object-cover mx-auto border-4 border-black p-2 shadow-lg"
            src={cat.img}
            alt="/"
          />
          <h3 className="text-black underline bg-opacity-70 rounded-md p-1.5 border-black text-xl font-bold">
            {cat.name}
          </h3>
        </div>
      ))}
    </div>
  );
};
