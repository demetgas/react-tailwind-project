import React from "react";

export const Footer = () => {
  return (
    <div className="w-full h-max-[45svh] bg-hero mt-40 flex text-xl justify-center gap-8">
      <div className="text-white flex flex-col ">
        <h2 className="mt-[90px]  text-2xl">About Us</h2>
        <a className="my-[10px]" href="/">
          How it works
        </a>
        <a className="my-[10px]" href="/">
          Testimonials
        </a>
        <a className="my-[10px]" href="/">
          Careers
        </a>
        <a className="my-[10px]" href="/">
          Investments
        </a>
        <a className="my-[10px]" href="/">
          Terms of Service
        </a>
      </div>
      <div className="text-white flex flex-col ml-[80px]">
        <h2 className="mt-[90px]  text-2xl">Contact Us</h2>
        <a className="my-[10px]" href="/">
          Contact
        </a>
        <a className="my-[10px]" href="/">
          Support
        </a>
        <a className="my-[10px]" href="/">
          Destinations
        </a>
        <a className="my-[10px]" href="/">
          Sponsorships
        </a>
      </div>{" "}
      <div className="text-white flex flex-col ml-[80px]">
        <h2 className="mt-[90px]  text-2xl">Videos</h2>
        <a className="my-[10px]" href="/">
          Submit Video
        </a>
        <a className="my-[10px]" href="/">
          Ambassadors
        </a>
        <a className="my-[10px]" href="/">
          Agency
        </a>
        <a className="my-[10px]" href="/">
          Influencer
        </a>
      </div>{" "}
      <div className="text-white flex flex-col ml-[80px]">
        <h2 className="mt-[90px]  text-2xl">Social Media</h2>
        <a className="my-[10px]" href="/">
          Instagram
        </a>
        <a className="my-[10px]" href="/">
          Facebook
        </a>
        <a className="my-[10px]" href="/">
          Youtube
        </a>
        <a className="my-[10px]" href="/">
          Twitter
        </a>
      </div>{" "}
      <div className="text-white flex flex-col ml-[80px]">
        <h2 className="mt-[90px] text-2xl">Little Paws</h2>
        <a className="my-[10px]" href="/">
          Lili
        </a>
        <a className="my-[10px]" href="/">
          Nina
        </a>
        <a className="my-[10px]" href="/">
          Malkoç
        </a>
        <a className="my-[10px]" href="/">
          Freyja
        </a>
      </div>
    </div>
  );
};
