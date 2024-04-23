import React from "react";
import cats from "../data/cats";

export const Cats = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      {cats.map((cat) => (
        <div className="relative p-4" key={cat.id}>
          <h3 className="absolute z-10 top-[80%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-black text-white bg-opacity-70 rounded-md p-1.5 border-black text-xl font-bold">
            {cat.name}
          </h3>
          <img
            className="w-64 h-64 object-cover relative border-4 border-white shadow-lg"
            src={cat.img}
            alt="/"
          />
        </div>
      ))}
    </div>
  );
};
