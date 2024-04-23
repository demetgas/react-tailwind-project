import React from "react";

export const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://wallpapercave.com/wp/wp5321419.jpg"
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With Weekaway</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            doloribus totam dicta ab ratione. Explicabo eveniet dolor, omnis in
            recusandae temporibus suscipit cum nihil officia deserunt possimus
            saepe praesentium accusamus!
          </p>
        </div>
      </div>
    </div>
  );
};
