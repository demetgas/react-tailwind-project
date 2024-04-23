import React from "react";

export const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images2.alphacoders.com/133/1335809.png"
        alt="/"
        className="w-full h-full object-cover transform scale-x-[-1]"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%]   flex flex-col text-white p-4">
          <h1 className="text-4xl">Welcome to the Cat Paradise</h1>
          <h2 className="text-4xl py-4 italic">Meet Our Furry Friends</h2>
          <p className="text-justify max-w-md">
            Here at our home, we are proud to introduce you to our beloved
            feline companions. Each one has their own unique personality and
            charm, and they bring endless joy to our lives. Join us on this
            journey as we share tales of mischief, cuddles, and everything in
            between!
          </p>
        </div>
      </div>
    </div>
  );
};
