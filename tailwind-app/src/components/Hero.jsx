import React from "react";

export const Hero = () => {
  return (
    <div className="relative w-full h-[90vh]">
      <img
        src="https://images2.alphacoders.com/133/1335809.png"
        alt="/"
        className="w-full h-full object-cover transform scale-x-[-1]"
      />
      <div className="absolute bottom-40  w-[50%] h-full flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Hello There!</h1>
      </div>
    </div>
  );
};
