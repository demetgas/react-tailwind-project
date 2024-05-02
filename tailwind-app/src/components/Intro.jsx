import React from "react";

export const Intro = () => {
  return (
    <div className="max-w-[100svw] mx-auto lg:h-[35svh] md:h-[45vw] sm:h-[50vw] h-[80vw] bg-hero lg:mt-[7vw] mt-[13vw]  text-white flex justify-center items-center">
      <div className="text-center">
        <h1 className="lg:text-4xl md:text-[25px]  text-[22px] font-bold ">
          Welcome to our cat community, where our furry friends are here to
          support you!
        </h1>
        <p className="lg:text-2xl md:text-[20px]  mt-8 text-[19px]">
          Join us to share in the joy and wonder that these charming creatures
          bring to our lives.
        </p>
        <button className="bg-babyblue hover:bg-babyblue2 transition duration-3000 ease-out delay-100 rounded w-32 h-12 text-black font-bold mt-10">
          Contact Us
        </button>
      </div>
    </div>
  );
};
