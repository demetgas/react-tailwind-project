import React from "react";
import galleryArray from "../data/gallery";

export const Gallery = () => {
  return (
    <div className="w-full md:h-[250svh] lg:h-[80svh] mx-auto md:mt-[280px] ">
      <h2 className="text-center text-gray-700 font-bold text-4xl ">
        The pictures sent by our users...
      </h2>
      <div className="flex sm:flex-col md:flex-col lg:flex-row justify-center md:mt-[40px] ">
        <div className="border-x-8 border-y-8 border-babyblue my-auto md:max-h-[45svh] md:max-w-[75svw] md:mx-auto  md:content-center lg:max-h-[45svh] ">
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
        <div className="grid md:grid-cols-1 lg:mr-28 lg:grid-cols-2 lg:max-w-[90rem]   ">
          {galleryArray.map((array) => (
            <div className="  mt-20  ">
              <div className="grid lg:grid-cols-4 md:grid-cols-2">
                {array.map((picture) => (
                  <img
                    key={picture.id}
                    src={picture.img}
                    alt=""
                    className="lg:max-w-60 lg:max-h-60 md:max-w-32 md:max-h-fit border-2  md:ml-[30%] my-2"
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
