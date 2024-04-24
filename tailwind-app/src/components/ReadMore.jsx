import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ReadMore = () => {
  return (
    <div className="w-full mt-[270px] h-[15svh]">
      <div>
        <p>About Us</p>
        <h1>
          {" "}
          <b>Captivating Creatures:</b> The Enigmatic Charm of Cats{" "}
        </h1>
        <p className="text-justify max-w-md">
          Cats, with their enigmatic gaze and graceful movements, possess an
          undeniable allure that has captivated humans for centuries. These
          enigmatic felines, revered in ancient cultures and cherished as
          beloved companions in modern times, embody a unique blend of
          independence and affection.
        </p>
        <div className="flex">
          <FontAwesomeIcon className="icon" icon={faArrowRight} />
          <p>
            Cats possess an innate grace, moving with elegance and precision in
            every step.
          </p>
        </div>
        <div className="flex">
          <FontAwesomeIcon className="icon" icon={faArrowRight} />
          <p>
            Their expressive eyes reveal a depth of emotion and intelligence
            that intrigues and delights.{" "}
          </p>
        </div>

        <div className="flex">
          <FontAwesomeIcon className="icon" icon={faArrowRight} />
          <p>
            From playful antics to serene moments of contemplation, cats weave a
            tapestry of charm into the fabric of our lives.
          </p>
        </div>
      </div>
    </div>
  );
};
