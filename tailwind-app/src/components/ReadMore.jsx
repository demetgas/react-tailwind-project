import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ReadMore = () => {
  return (
    <div className="w-full mt-[280px] gap-12 md:h-[20svh] place-content-center flex justify-center">
      <img
        src="https://m.media-amazon.com/images/M/MV5BOWI3NzQ0MTAtMGQzNi00NjY5LTk5YTYtZjE0M2EzODlkNGRhXkEyXkFqcGdeQXVyMjAwNzczNTU@._V1_.jpg"
        alt=""
        className="w-[15svw] h-[45svh] "
      />
      <div>
        <p className="underline text-[25px] font-bold">About Us</p>
        <h1 className="text-4xl mt-2">
          {" "}
          <b>Captivating Creatures:</b> The Enigmatic Charm of Cats{" "}
        </h1>
        <p className="text-[20px] text-justify max-w-[680px] mt-3 ">
          Cats, with their enigmatic gaze and graceful movements, possess an
          undeniable allure that has captivated humans for centuries. These
          enigmatic felines, revered in ancient cultures and cherished as
          beloved companions in modern times, embody a unique blend of
          independence and affection.
        </p>

        <div className="flex my-5 text-[20px]">
          <FontAwesomeIcon className="mx-3 my-1" icon={faArrowRight} />
          <p>
            Cats possess an innate grace, moving with elegance and precision in
            every step.
          </p>
        </div>
        <div className="flex my-5 text-[20px]">
          <FontAwesomeIcon className="mx-3 my-1" icon={faArrowRight} />
          <p>
            Their expressive eyes reveal a depth of emotion and intelligence
            that intrigues and delights.{" "}
          </p>
        </div>

        <div className="flex my-5 text-[20px]">
          <FontAwesomeIcon className="mx-3 my-1" icon={faArrowRight} />
          <p>
            From playful antics to serene moments of contemplation, cats weave a
            tapestry of charm into the fabric of our lives.
          </p>
        </div>
        <button className="bg-hero2 rounded w-32 h-12 text-white font-bold mt-10">
          Read More
        </button>
      </div>
      <div>
        <p className="text-[20px] text-justify max-w-md mt-[120px]">
          Cats, with their enigmatic gaze and graceful movements, possess an
          undeniable allure that has captivated humans for centuries. These
          enigmatic felines, revered in ancient cultures and cherished as
          beloved companions in modern times, embody a unique blend of
          independence and affection.
        </p>
      </div>
    </div>
  );
};
/*<img
        src="https://t4.ftcdn.net/jpg/03/10/47/95/360_F_310479588_Zpy6PVYM18UkwqDUMGUX5dh53AAK9GHZ.jpg"
        alt=""
        className=""
      />*/
