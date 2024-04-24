import React from "react";
import galleryArray from "../data/gallery";

export const Gallery = () => {
  return (
    <div>
      <h2 className="text-center text-gray-700 mt-[480px] font-bold text-4xl ">
        Gallery
      </h2>
      <div className="grid grid-cols-2  max-w-[90rem] gap-20">
        {galleryArray.map((array) => (
          <div className="w-fit h-[65vh] mt-20  mx-auto">
            <div className="grid grid-cols-4  ">
              {array.map((picture) => (
                <img
                  key={picture.id}
                  src={picture.img}
                  alt=""
                  className="max-w-60 max-h-60 "
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
