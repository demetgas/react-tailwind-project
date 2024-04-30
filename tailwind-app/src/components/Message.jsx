import React from "react";
import cat from "../assets/f2.jpeg";
export const Message = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto mt-[5svh] ">
      <h2 className="text-center text-gray-700 p-4 font-bold text-4xl">
        Send us a message
      </h2>
      <p className="text-center text-gray-700 text-2xl">
        Can't wait to hear your thoughts!
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-16 ">
        <img
          src={cat}
          alt="/"
          className=" md:h-full sm:w-[400px] sm:h-[400px] xs:w-[400px] xs:h-[400px] mx-auto  p-2 max-h-[500px] h-[200px] w-[420px] hover:scale-110 transition-all delay-75"
        />
        <form>
          <div className="grid grid-cols-2  ">
            <input
              className="border m-2 p-2 rounded"
              type="text"
              placeholder="Name"
            />
            <input
              className="border m-2 p-2 rounded"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="border m-2 p-2 rounded"
              type="email"
              placeholder="Email"
            />
            <input
              className="border m-2 p-2 rounded"
              type="tel"
              placeholder="Phone"
            />
            <input
              className="border col-span-2 p-2 m-2 rounded"
              type="text"
              placeholder="Address"
            />
            <textarea
              className="border col-span-2 m-2 p-2 rounded"
              cols="30"
              rows="10"
            ></textarea>
            <button className="m-2 p-2 col-span-2 rounded text-white bg-hero2 hover:bg-hero transition duration-3000 ease-out delay-100">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
