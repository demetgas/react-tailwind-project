import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const ReadMore = () => {
  return (
    <div
      id="purpose"
      className="max-w-[1400px] m-auto py-16 grid lg:grid-cols-3 md:grid-cols-2 lg:gap-32"
    >
      <div>
        <img
          src="https://m.media-amazon.com/images/M/MV5BOWI3NzQ0MTAtMGQzNi00NjY5LTk5YTYtZjE0M2EzODlkNGRhXkEyXkFqcGdeQXVyMjAwNzczNTU@._V1_.jpg"
          alt="Enigmatic Cat"
          className="lg:min-w-1/4 md:w-[380px] md:min-h-[490px]  sm:w-[60svw] xs:w-[60svw] mx-auto   md:mt-20 lg:mt-14 sm:mt-0 shadow-2xl shadow-hero hover:scale-110 transition-all delay-75"
        />
      </div>
      <div className="flex text-justify flex-col lg:mt-0 md:mt-20 lg:p-0 md:p-0 sm:p-5">
        <p className="underline lg:text-[20px] md:text-[17px] xs:text-[17px] xs:mt-10 lg:mt-0 md:mt-0 sm:mt-10 font-bold cursor-pointer">
          Check this out
        </p>
        <h1 className="lg:text-3xl md:text-[25px] mt-2">
          <b>Captivating Creatures:</b> The Enigmatic Charm of Cats
        </h1>
        <p className="flex mt-5 md:text-[15px] lg:text-[17px]">
          Cats, with their enigmatic gaze and graceful movements, possess an
          undeniable allure that has captivated humans for centuries. These
          enigmatic felines, revered in ancient cultures and cherished as
          beloved companions in modern times, embody a unique blend of
          independence and affection.
        </p>
        <div className="flex my-5 md:text-[15px] lg:text-[17px]">
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
        <div className="flex my-5 md:text-[15px] lg:text-[17px]">
          <FontAwesomeIcon
            className="mx-3 my-1 hover:text-babyblue2 delay-75 cursor-pointer"
            icon={faArrowRight}
          />
          <p>
            From playful antics to serene moments of contemplation, cats weave a
            tapestry of charm into the fabric of our lives.
          </p>
        </div>
        <button className="bg-hero2 hover:bg-hero rounded w-32 h-12 text-white font-bold md:mt-5 lg:mt-10 sm:mt-5">
          Read More
        </button>
      </div>
      <div className="  md:mt-12 lg:mt-0 sm:mt-0 xs:mt-14 mx-auto text-center ">
        <h1 className="lg:text-2xl md:text-[25px] sm:text-xl xs:text-xl  font-bold">
          Also here is what our users said...
        </h1>
        <div className="grid lg:grid-cols-1 md:grid-cols-3 lg:w-[20svw] md:w-[100svw] sm:w-[60svw] xs:w-[60svw] gap-6 mt-6 mx-auto ">
          <div className="border-8  h-auto border-babyblue rounded hover:scale-110  transition-all delay-75 cursor-pointer">
            <p className="text-lg md:text-xl font-bold">Jin said:</p>
            <p className="text-lg md:text-xl p-3 text-justify  ">
              In his thoughtful commentary, Jin emphasized the graceful
              movements and timeless appeal of these fascinating creatures,
              highlighting their unique ability to captivate humans throughout
              history.
            </p>
          </div>
          <div className="border-8  h-auto border-babyblue rounded  hover:scale-110  transition-all delay-75 cursor-pointer">
            <p className="text-lg md:text-xl font-bold">Chris said:</p>
            <p className="text-lg md:text-xl p-3 text-justify">
              Chris, a cat lover, eloquently described the captivating nature of
              cats in his feedback. He marveled at their graceful movements and
              noted how they possess a timeless appeal to humans.
            </p>
          </div>
          <div className="border-8  h-auto border-babyblue rounded  hover:scale-110  transition-all delay-75 cursor-pointer">
            <p className="text-lg md:text-xl font-bold">Anna said:</p>
            <p className="text-lg md:text-xl p-3 text-justify">
              Her words underscore the profound impact these creatures have on
              human emotions, from ancient cultures to modern times, embodying a
              unique blend of independence and affection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
