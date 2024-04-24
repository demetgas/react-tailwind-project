import React from "react";

export const Info = () => {
  return (
    <div className=" w-full mt-[270px] h-[45svh] bg-babyblue">
      <div className="flex gap-32 max-w-[1140px] m-auto">
        <div className="text-justify">
          <h2 className="text-center text-gray-700 p-4 font-bold text-4xl italic">
            Cats are fascinating creatures
          </h2>
          <p className="mb-7 mt-10 text-lg ">
            {" "}
            Cats' unique behaviors, from their playful antics to their grooming
            rituals, highlight their captivating nature. Despite their
            independent streak, cats form strong bonds with their human
            companions, offering companionship and warmth in a way that's truly
            special.{" "}
          </p>
          <p className="mb-10 text-lg">
            One of the most captivating aspects of cats is their remarkable
            agility and athleticism. Whether gracefully leaping to impossible
            heights or contorting their bodies with impressive flexibility, cats
            never cease to amaze with their acrobatic prowess. Their keen senses
            and lightning-fast reflexes further contribute to their status as
            skilled hunters and agile explorers of their environments.
          </p>
          <p className="text-lg">
            {" "}
            Understanding and appreciating the intricacies of cat behavior not
            only deepens our connection with these remarkable animals but also
            enriches our own lives in immeasurable ways.
          </p>
        </div>
        <img
          src="https://images.vexels.com/media/users/3/272056/isolated/preview/54b293603423b19ebd21fee4c7f475e8-cute-black-cartoon-cat.png"
          alt=""
        />
      </div>
    </div>
  );
};