import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ReadMore = () => {
  return (
    <div className="flex justify-center items-center mt-[85px] ">
      <div className="w-full h-[15svh] grid grid-cols-3 items-center">
        <img
          src="https://m.media-amazon.com/images/M/MV5BOWI3NzQ0MTAtMGQzNi00NjY5LTk5YTYtZjE0M2EzODlkNGRhXkEyXkFqcGdeQXVyMjAwNzczNTU@._V1_.jpg"
          alt=""
          className="w-[16svw] h-[45svh] ml-60 shadow-2xl shadow-hero hover:scale-110 transition-all delay-75"
        />
        <div className="flex flex-col">
          <p className="underline text-[20px] font-bold cursor-pointer">
            About Us
          </p>
          <h1 className="text-3xl mt-2">
            <b>Captivating Creatures:</b> The Enigmatic Charm of Cats
          </h1>
          <p className="text-[20px] text-justify max-w-[650px] mt-3">
            Cats, with their enigmatic gaze and graceful movements, possess an
            undeniable allure that has captivated humans for centuries. These
            enigmatic felines, revered in ancient cultures and cherished as
            beloved companions in modern times, embody a unique blend of
            independence and affection.
          </p>

          <div className="flex mt-5 text-[17px]">
            <FontAwesomeIcon className="mx-3 my-1" icon={faArrowRight} />
            <p>
              Cats possess an innate grace, moving with elegance and precision
              in every step.
            </p>
          </div>
          <div className="flex my-5 text-[17px]">
            <FontAwesomeIcon className="mx-3 my-1" icon={faArrowRight} />
            <p>
              Their expressive eyes reveal a depth of emotion and intelligence
              that intrigues and delights.{" "}
            </p>
          </div>

          <div className="flex text-[17px]">
            <FontAwesomeIcon className="mx-3 my-1" icon={faArrowRight} />
            <p>
              From playful antics to serene moments of contemplation, cats weave
              a tapestry of charm into the fabric of our lives.
            </p>
          </div>
          <button className="bg-hero2 hover:bg-hero rounded w-32 h-12 text-white font-bold mt-10">
            Read More
          </button>
        </div>
        <div className="md:w-[50%] mt-12 md:mt-0 mx-auto">
          <h1 className="text-center mx-auto text-gray-700 font-bold text-4xl md:text-3xl">
            Also here is what our users said...
          </h1>
          <div className="grid grid-cols-1 gap-6 mt-6 justify-items-center">
            <div className="border w-[31svw] h-[14svh] border-gray-300 rounded p-4">
              <p className="text-lg md:text-xl font-bold">Jin said:</p>
              <p className="text-lg md:text-xl mt-2 w-[30svw] h-[30px]">
                Cats, with their enigmatic gaze and graceful movements, possess
                an undeniable allure that has captivated humans for centuries.
                These enigmatic felines, revered in ancient cultures and
                cherished as beloved companions in modern times, embody a unique
                blend of independence and affection.
              </p>
            </div>
            <div className="border w-[31svw] h-[14svh] border-gray-300 rounded p-4">
              <p className="text-lg md:text-xl font-bold">Chris said:</p>
              <p className="text-lg md:text-xl mt-2 w-[30svw] h-[30px]">
                Cats, with their enigmatic gaze and graceful movements, possess
                an undeniable allure that has captivated humans for centuries.
                These enigmatic felines, revered in ancient cultures and
                cherished as beloved companions in modern times, embody a unique
                blend of independence and affection.
              </p>
            </div>
            <div className="border w-[31svw] h-[14svh] border-gray-300 rounded p-4">
              <p className="text-lg md:text-xl font-bold">Chris said:</p>
              <p className="text-lg md:text-xl mt-2 w-[30svw] h-[30px]">
                Cats, with their enigmatic gaze and graceful movements, possess
                an undeniable allure that has captivated humans for centuries.
                These enigmatic felines, revered in ancient cultures and
                cherished as beloved companions in modern times, embody a unique
                blend of independence and affection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
