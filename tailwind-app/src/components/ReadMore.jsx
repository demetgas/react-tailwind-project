import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import comments from "../data/comments";
export const ReadMore = () => {
  return (
    <div
      id="purpose"
      className="lg:max-w-[1800px] m-auto py-16 grid lg:grid-cols-3 md:grid-cols-2 md:gap-5"
    >
      <img
        src="https://m.media-amazon.com/images/M/MV5BOWI3NzQ0MTAtMGQzNi00NjY5LTk5YTYtZjE0M2EzODlkNGRhXkEyXkFqcGdeQXVyMjAwNzczNTU@._V1_.jpg"
        alt="Enigmatic Cat"
        className="lg:min-w-[380px] lg:h-[550px]  md:w-[380px] md:h-[520px]  sm:w-[60svw] w-[60svw]  mx-auto  md:mt-36  sm:mt-0 shadow-2xl shadow-hero hover:scale-110 transition-all delay-75"
      />
      <div className="flex flex-col text-justify lg:ml-8 mt-20 md:p-0 p-5">
        <p className="underline md:text-[20px] text-[17px] font-bold cursor-pointer ">
          Check this out
        </p>
        <h1 className="lg:text-3xl md:text-[25px] text-lg sm:text-2xl mt-2 text-start  ">
          <b>Captivating Creatures:</b> The Enigmatic Charm of Cats
        </h1>
        <p className=" mt-5 md:text-lg md:p-3 p-0 ">
          Cats, with their enigmatic gaze and graceful movements, possess an
          undeniable allure that has captivated humans for centuries. These
          enigmatic felines, revered in ancient cultures and cherished as
          beloved companions in modern times, embody a unique blend of
          independence and affection.
        </p>
        <div className="flex my-5 md:text-[17px] md:pr-3 p-0">
          <FontAwesomeIcon
            className="mx-3 my-1 hover:text-babyblue2 delay-75 cursor-pointer"
            icon={faArrowRight}
          />
          <p>
            Cats possess an innate grace, moving with elegance and precision in
            every step.
          </p>
        </div>
        <div className="flex md:text-[17px] md:pr-3 p-0">
          <FontAwesomeIcon
            className="mx-3 my-1 hover:text-babyblue2 delay-75 cursor-pointer"
            icon={faArrowRight}
          />
          <p>
            Their expressive eyes reveal a depth of emotion and intelligence
            that intrigues and delights.
          </p>
        </div>
        <div className="flex my-5 md:text-[17px] md:pr-3 p-0">
          <FontAwesomeIcon
            className="mx-3 my-1 hover:text-babyblue2 delay-75 cursor-pointer"
            icon={faArrowRight}
          />
          <p>
            From playful antics to serene moments of contemplation, cats weave a
            tapestry of charm into the fabric of our lives.
          </p>
        </div>
        <div className="flex md:text-[17px] md:pr-3 p-0">
          <FontAwesomeIcon
            className="mx-3 my-1 hover:text-babyblue2 delay-75 cursor-pointer"
            icon={faArrowRight}
          />
          <p>
            Additionally, cats are known for their keen senses, particularly
            their exceptional night vision and sensitive whiskers.
          </p>
        </div>
        <button className="bg-hero2 hover:bg-hero transition duration-3000 ease-out delay-100 rounded w-32 h-12 text-white font-bold md:mt-8 lg:mt-10 sm:mt-5 mt-5 mx-auto  md:mx-0 lg:mx-0">
          Read More
        </button>
      </div>
      <div className=" mt-12 mx-auto text-center ">
        <h1 className="lg:text-2xl md:text-[25px]  text-xl  font-bold">
          Also here is what our users said...
        </h1>
        <div className="grid lg:grid-cols-1 md:grid-cols-3 lg:w-[20svw] md:w-[100svw] w-[60svw] gap-6 mt-6 mx-auto ">
          {comments.map((comment) => (
            <div className="border-8  h-auto border-babyblue rounded hover:scale-110 hover:border-babyblue2   transition-all delay-75 cursor-pointer">
              <p className="text-lg md:text-xl font-bold mt-4">
                {comment.title}
              </p>
              <p className="text-lg md:text-xl p-3 text-justify  ">
                {comment.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
