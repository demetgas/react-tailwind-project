import React from "react";

export const Footer = () => {
  return (
    <div className="w-full bg-hero mt-[280px] flex flex-wrap justify-center gap-8 text-white text-xl">
      <div className="flex flex-col mb-8 my-10 cursor-pointer ">
        <h2 className="text-2xl mb-4 hover:text-3xl transition-all delay-75">
          About Us
        </h2>
        <a className="my-2" href="/">
          How it works
        </a>
        <a className="my-2" href="/">
          Testimonials
        </a>
        <a className="my-2" href="/">
          Careers
        </a>
        <a className="my-2" href="/">
          Terms of Service
        </a>
      </div>
      <div className="flex flex-col mb-8 cursor-pointer">
        <h2 className="text-2xl mb-4 my-10 hover:text-3xl transition-all delay-75">
          Contact Us
        </h2>
        <a className="my-2" href="/">
          Contact
        </a>
        <a className="my-2" href="/">
          Support
        </a>
        <a className="my-2" href="/">
          Destinations
        </a>
        <a className="my-2" href="/">
          Sponsorships
        </a>
      </div>
      <div className="flex flex-col mb-8 cursor-pointer">
        <h2 className="text-2xl mb-4 my-10 hover:text-3xl transition-all delay-75">
          Social Media
        </h2>
        <a className="my-2" href="/">
          Instagram
        </a>
        <a className="my-2" href="/">
          Facebook
        </a>
        <a className="my-2" href="/">
          Youtube
        </a>
        <a className="my-2" href="/">
          Twitter
        </a>
      </div>
      <div className="flex flex-col mb-8 cursor-pointer">
        <h2 className="text-2xl mb-4 my-10 hover:text-3xl transition-all delay-75">
          Little Paws
        </h2>
        <a className="my-2" href="/">
          Lili
        </a>
        <a className="my-2" href="/">
          Nina
        </a>
        <a className="my-2" href="/">
          Malkoç
        </a>
        <a className="my-2" href="/">
          Freyja
        </a>
      </div>
    </div>
  );
};
