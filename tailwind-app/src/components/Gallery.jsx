import React from "react";
import gallery from "../data/gallery";

export const Gallery = () => {
  return (
    <div className="">
      <div className="w-fit h-[65vh] mt-60 overflow-x-auto mx-auto">
        <h2 className="text-center text-gray-700 p-4 font-bold text-4xl ">
          Gallery
        </h2>

        <div className="grid grid-cols-4 gap-0 justify-items-center">
          {gallery.map((picture) => (
            <img
              key={picture.id}
              src={picture.img}
              alt=""
              className="w-60 h-60"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
