import React from "react";

export const Intro = () => {
  return (
    <div className="max-w-[2800px] mx-auto h-[40svh] bg-hero mt-64  text-white flex justify-center items-center">
      <div className="text-center">
        <h1 className="lg:text-4xl md:text-3xl sm:text-[27px]  font-bold ">
        Welcome to our cat community, where our furry friends are here to support you!
        </h1>
        <p className="text-2xl mt-8">Join us to share in the joy and wonder that these charming creatures bring to our lives.
        </p>
        <button className="bg-babyblue hover:bg-babyblue2 rounded w-32 h-12 text-black font-bold mt-10">
          Contact Us
        </button>
      </div>
    </div>
  );
};
