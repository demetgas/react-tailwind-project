import React from "react";
import gallery from "../data/gallery";

export const Gallery = () => {
  return (
    <div className="w-full h-[70vh] mt-60 overflow-x-auto">
      <h2 className="text-center text-gray-700 p-4 font-bold text-4xl ">
        Gallery
      </h2>

      <div className="flex">
        {gallery.map((picture) => (
          <img
            key={picture.id}
            src={picture.img}
            alt=""
            className="flex-shrink-0 w-1/12 h-auto"
          />
        ))}
      </div>
    </div>
  );
};
