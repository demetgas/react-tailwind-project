import React from "react";
import galleryArray from "../data/gallery";

export const Gallery = () => {
  return (
    <div>
      <h2 className="text-center text-gray-700 mt-80 font-bold text-4xl ">
        Gallery
      </h2>
      <div className="grid grid-cols-2 mx-[530px] w-[1500px] gap-20">
        {galleryArray.map((array) => (
          <div className="w-fit h-[65vh] mt-20 overflow-x-auto mx-auto">
            <div className="grid grid-cols-4  ">
              {array.map((picture) => (
                <img
                  key={picture.id}
                  src={picture.img}
                  alt=""
                  className="w-60 h-60"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
