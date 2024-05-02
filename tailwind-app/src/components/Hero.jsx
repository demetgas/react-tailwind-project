import React from "react";
import bgHero from "../assets/bghero.jpg";

export const Hero = () => {
  return (
    <div className="relative w-full h-[78.5vh]">
      <img src={bgHero} alt="/" className="w-full h-[78.5vh] object-cover" />
      <div className="grid md:grid-cols-2 grid-cols-1 absolute inset-0">
        <div className="flex items-center justify-center p-4 text-white mt-28 md:mt-0 ">
          <div>
            <h1 className="lg:text-[70px] md:text-[50px] sm:text-[45px] text-[27px]">
              Welcome to the Cat Paradise
            </h1>
            <h2 className="lg:text-[45px] md:text-[30px] sm:text-[30px] text-[22px] py-4 italic">
              Meet Our Furry Friends...
            </h2>
            <p className="text-justify max-w-[750px] lg:text-[20px] md:text-[20px] sm:text-[23px] text-[17px]">
              Here at our home, we are proud to introduce you to our beloved
              feline companions. Each one has their own unique personality and
              charm, and they bring endless joy to our lives. Join us on this
              journey as we share tales of mischief, cuddles, and everything in
              between!
            </p>
          </div>
        </div>
        <div className=" flex items-center justify-center overflow-hidden">
          <img
            src="https://parspng.com/wp-content/uploads/2023/01/catpng.parspng.com-6.png"
            alt="/"
            className="md:max-w-full md:max-h-max max-w-[80vw] hidden xs:block sm:block md:block opacity-75 transform scale-x-[-1] self-end"
          />
        </div>
      </div>
    </div>
  );
};
