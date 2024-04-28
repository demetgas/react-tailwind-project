import React from "react";
import gallery from "../data/gallery";

export const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1200px] lg:mt-0 md:mt-[20rem] mx-auto">
      <h2 className="text-center text-gray-700 font-bold text-4xl mt-20 mb-10">
        The pictures sent by our users...
      </h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 p-10  ">
        <div className="border-8 h-auto md:mx-auto border-babyblue bg-babyblue p-10 my-auto">
          <h1 className="text-center text-gray-700 text-3xl mb-5">Thank you</h1>
          <p className="text-lg text-justify">
            We are immensely delighted whenever we receive pictures from our
            users; each image represents a unique story, perspective, or moment
            captured by our community. Your contributions not only enrich our
            platform but also inspire others with your creativity and
            experiences. We would be thrilled to receive even more images from
            you.
          </p>
          <p className="mt-5 text-lg text-justify">
            Whether it's a breathtaking landscape, a cherished memory, or a
            piece of art, we welcome them all. Please feel free to send us your
            pictures through the channels provided below. Additionally, don't
            hesitate to reach out to us for any inquiries, feedback, or further
            communication. Your engagement is what makes our platform vibrant
            and meaningful. Thank you for being a part of our community!
          </p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 md:mx-auto md:gap-x-10 sm:mx-auto sm:gap-x-20 lg:gap-0 lg:grid-cols-3 gap-1">
          {gallery.map((picture) => (
            <img
              alt="/"
              key={picture.id}
              src={picture.img}
              className="w-[180px] h-[180px] border-2 my-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
