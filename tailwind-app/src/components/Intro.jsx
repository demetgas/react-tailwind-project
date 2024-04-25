import React from "react";

export const Intro = () => {
  return (
    <div className="w-full h-[40svh] bg-hero mt-64  text-white flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold ">
          Don't worry, our cats are here for you, friend. Come join us!
        </h1>
        <p className="text-xl mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="bg-babyblue hover:bg-babyblue2 rounded w-32 h-12 text-black font-bold mt-10">
          Contact Us
        </button>
      </div>
    </div>
  );
};
