import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ReadMore = () => {
  return (
    <div className="max-w-[1900px] mx-auto h-[20svh] grid md:grid-cols-2 lg:grid-cols-3 gap-[50px] items-center">
      <img
        src="https://m.media-amazon.com/images/M/MV5BOWI3NzQ0MTAtMGQzNi00NjY5LTk5YTYtZjE0M2EzODlkNGRhXkEyXkFqcGdeQXVyMjAwNzczNTU@._V1_.jpg"
        alt=""
        className="lg:max-w-[18svw] lg:max-h-[45svh] md:w-[45svw] md:h-[40svh] shadow-2xl shadow-hero hover:scale-110 transition-all delay-75"
      />
      <div className="flex flex-col lg:mt-0 md:mt-20">
        <p className="underline lg:text-[20px] md:text-[17px] font-bold cursor-pointer">
          About Us
        </p>
        <h1 className="lg:text-3xl md:text-[25px] mt-2">
          <b>Captivating Creatures:</b> The Enigmatic Charm of Cats
        </h1>
        <p className="lg:text-[20px] md:text-[17px] text-justify lg:max-w-[650px] md:max-w-[350px] mt-3">
          Cats, with their enigmatic gaze and graceful movements, possess an
          undeniable allure that has captivated humans for centuries. These
          enigmatic felines, revered in ancient cultures and cherished as
          beloved companions in modern times, embody a unique blend of
          independence and affection.
        </p>
        <div className="flex mt-5 md:text-[15px] lg:text-[17px]">
          <FontAwesomeIcon
            className="mx-3 my-1 hover:text-babyblue2 delay-75 cursor-pointer"
            icon={faArrowRight}
          />
          <p>
            Cats possess an innate grace, moving with elegance and precision in
            every step.
          </p>
        </div>
        <div className="flex my-5 md:text-[15px] lg:text-[17px]">
          <FontAwesomeIcon
            className="mx-3 my-1 hover:text-babyblue2 delay-75 cursor-pointer"
            icon={faArrowRight}
          />
          <p>
            Their expressive eyes reveal a depth of emotion and intelligence
            that intrigues and delights.
          </p>
        </div>
        <div className="flex md:text-[15px] lg:text-[17px]">
          <FontAwesomeIcon
            className="mx-3 my-1 hover:text-babyblue2 delay-75 cursor-pointer"
            icon={faArrowRight}
          />
          <p>
            From playful antics to serene moments of contemplation, cats weave a
            tapestry of charm into the fabric of our lives.
          </p>
        </div>
        <button className="bg-hero2 hover:bg-hero rounded w-32 h-12 text-white font-bold md:mt-5 lg:mt-10">
          Read More
        </button>
      </div>
      <div className="lg:mt-12 md:mt-0 mx-auto">
        <h1 className="text-center mx-auto text-gray-700 font-bold mt-20 text-4xl md:text-3xl">
          Also here is what our users said...
        </h1>
        <div className="grid grid-cols-1 gap-6 mt-6">
          <div className="border max-w-full h-auto border-gray-300 rounded p-4">
            <p className="text-lg md:text-xl font-bold">Jin said:</p>
            <p className="text-lg md:text-xl">
              Cats, with their enigmatic gaze and graceful movements, possess an
              undeniable allure that has captivated humans for centuries. These
              enigmatic felines, revered in ancient cultures and cherished as
              beloved companions in modern times, embody a unique blend of
              independence and affection.
            </p>
          </div>
          <div className="border max-w-full h-auto border-gray-300 rounded p-4">
            <p className="text-lg md:text-xl font-bold">Chris said:</p>
            <p className="text-lg md:text-xl">
              Cats, with their enigmatic gaze and graceful movements, possess an
              undeniable allure that has captivated humans for centuries. These
              enigmatic felines, revered in ancient cultures and cherished as
              beloved companions in modern times, embody a unique blend of
              independence and affection.
            </p>
          </div>
          <div className="border max-w-full h-auto border-gray-300 rounded p-4">
            <p className="text-lg md:text-xl font-bold">Chris said:</p>
            <p className="text-lg md:text-xl">
              Cats, with their enigmatic gaze and graceful movements, possess an
              undeniable allure that has captivated humans for centuries. These
              enigmatic felines, revered in ancient cultures and cherished as
              beloved companions in modern times, embody a unique blend of
              independence and affection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
