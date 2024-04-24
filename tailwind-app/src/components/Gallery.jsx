import React from "react";
import gallery from "../data/gallery";

export const Gallery = () => {
  return (
    <div className="w-full h-[70vh] mt-60">
      <div className="flex w-70 h-60">
        {" "}
        {gallery.map((picture) => (
          <img src={picture.img} alt="" />
        ))}{" "}
      </div>
    </div>
  );
};
