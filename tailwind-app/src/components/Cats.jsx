import React from "react";
import cats from "../data/cats";

export const Cats = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      {cats.map((cat) => (
        <div className="relative p-4" key={cat.id}>
          <h3 className="absolute z-10 top-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black text-2xl font-bold">
            {cat.name}
          </h3>
          <img
            className="w-64 h-64 object-cover relative border-4 border-white shadow-lg" // Adjust the width and height as needed
            src={cat.img}
            alt="/"
          />
        </div>
      ))}
    </div>
  );
};
