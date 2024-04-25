import React from "react";

export const Intro = () => {
  return (
    <div className="w-full h-[40svh] bg-black mt-64 text-white flex flex-col">
      <div>
        <h1>Don't worry, our horse is here for you, friend. Come join us!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="bg-hero2 rounded w-32 h-12 text-white font-bold mt-10">
          Read More
        </button>
      </div>
    </div>
  );
};
