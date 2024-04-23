import React from "react";

export const Hero = () => {
  return (
    <div className="relative w-full h-[78.5vh] flex justify-end">
      <img
        src="https://mrwallpaper.com/images/hd/minimalist-black-cat-backgrounds-3gy1fpvdc0tbdimn.jpg"
        alt="/"
        className="w-full h-full object-cover transform scale-x-[-1]"
      />
      <div className="max-w-[1140px] m-auto absolute top-[35%] left-80">
        <div className="text-white p-4">
          <h1 className="text-4xl">Welcome to the Cat Paradise</h1>
          <h2 className="text-3xl py-4 italic">Meet Our Furry Friends...</h2>
          <p className="text-justify max-w-md">
            Here at our home, we are proud to introduce you to our beloved
            feline companions. Each one has their own unique personality and
            charm, and they bring endless joy to our lives. Join us on this
            journey as we share tales of mischief, cuddles, and everything in
            between!
          </p>
        </div>
      </div>
      <div className="max-w-[1140px] m-auto absolute transform scale-x-[-1] right-80 opacity-75">
        <div>
          <img
            src="https://parspng.com/wp-content/uploads/2023/01/catpng.parspng.com-6.png"
            className=""
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
