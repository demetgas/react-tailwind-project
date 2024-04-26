import React from "react";

export const Hero = () => {
  return (
    <div className="relative w-full h-[78.5vh]">
      <img
        src="https://mrwallpaper.com/images/hd/minimalist-black-cat-backgrounds-3gy1fpvdc0tbdimn.jpg"
        alt="/"
        className="w-full h-full object-cover transform scale-x-[-1]"
      />
      <div className="grid grid-cols-2 absolute inset-0">
        <div className="flex items-center justify-center p-4 text-white">
          <div>
            <h1 className="lg:text-[70px] md:text-[50px] sm:text-[40px]">
              Welcome to the Cat Paradise
            </h1>
            <h2 className="lg:text-[45px] md:text-[30px] sm:text-[20px] py-4 italic">
              Meet Our Furry Friends...
            </h2>
            <p className="text-justify max-w-[750px] text-[20px]">
              Here at our home, we are proud to introduce you to our beloved
              feline companions. Each one has their own unique personality and
              charm, and they bring endless joy to our lives. Join us on this
              journey as we share tales of mischief, cuddles, and everything in
              between!
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center overflow-hidden">
          <img
            src="https://parspng.com/wp-content/uploads/2023/01/catpng.parspng.com-6.png"
            alt="/"
            className="max-w-full max-h-max opacity-75 transform scale-x-[-1] self-end"
          />
        </div>
      </div>
    </div>
  );
};
