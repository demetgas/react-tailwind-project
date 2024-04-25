import React from "react";
import galleryArray from "../data/gallery";

export const Gallery = () => {
  return (
    <div className="w-full h-[80svh] mx-auto">
      <h2 className="text-center text-gray-700 mt-[280px] font-bold text-4xl">
        The pictures sent by our users...
      </h2>
      <div className="flex justify-center gap-20">
        <div className="border-x-8 border-y-8 border-babyblue my-auto max-h-[45svh] ">
          <h1 className="text-center text-gray-700 text-[25px] mt-12  ">
            Thank you
          </h1>
          <p
            className="mb-7 mt-10 text-lg text-justify w-[500px] m-10
           "
          >
            We are immensely delighted whenever we receive pictures from our
            users; each image represents a unique story, perspective, or moment
            captured by our community. Your contributions not only enrich our
            platform but also inspire others with your creativity and
            experiences. We would be thrilled to receive even more images from
            you.
          </p>
          <p
            className="mb-7 mt-10 text-lg text-justify w-[500px] m-10
           "
          >
            Whether it's a breathtaking landscape, a cherished memory, or a
            piece of art, we welcome them all. Please feel free to send us your
            pictures through the channels provided below. Additionally, don't
            hesitate to reach out to us for any inquiries, feedback, or further
            communication. Your engagement is what makes our platform vibrant
            and meaningful. Thank you for being a part of our community!
          </p>
        </div>
        <div className="grid grid-cols-2 max-w-[90rem]  ">
          {galleryArray.map((array) => (
            <div className=" h-[65vh] mt-20  ">
              <div className="grid grid-cols-4">
                {array.map((picture) => (
                  <img
                    key={picture.id}
                    src={picture.img}
                    alt=""
                    className="max-w-60 max-h-60 border-2  my-2"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
