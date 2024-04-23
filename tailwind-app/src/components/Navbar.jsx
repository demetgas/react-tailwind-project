import React from "react";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-700 h-16">
      <div className="pl-16 text-2xl text-gray-400 hover:text-3xl">CATS</div>
      <div className="flex space-x-6 pr-16 text-gray-400 text-xl">
        <div className="hover:text-white">LILI</div>
        <div className="hover:text-white">NINA</div>
        <div className="hover:text-white">MALKOC</div>
        <div className="hover:text-white">FREYJA</div>
      </div>
    </div>
  );
};
