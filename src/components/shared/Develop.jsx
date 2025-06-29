import { ArrowDown } from "lucide-react";
import React from "react";

const Develop = () => {
  return (
    <div
      className="z-0 flex items-center justify-start min-h-[600px] lg:min-h-[873px] bg-top bg-no-repeat bg-cover mt-0 lg:-mt-20"
      style={{ backgroundImage: "url('/devebg.png')" }}
    >
      <div className="w-full px-4 text-black">
        <div className="max-w-[1053px] mx-auto space-y-6">
          {/* Top Right Arrow + About */}
          <div className="flex items-center justify-end ">
            <ArrowDown className="w-8 h-8 p-2 text-xl border border-black rounded-full" />
            <p className="px-4 py-1 text-sm border border-black rounded-full md:text-base">About</p>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-[68px] font-bold leading-[50px] md:leading-[90px] lg:leading-[140px] text-end">
            I’ve been{" "}
            <span className="px-2 text-white bg-black rounded-xl">Developing</span>{" "}
            Websites since{" "}
            <span className="px-2 text-white bg-black rounded-xl">2013</span>
          </h1>

          {/* Paragraph */}
          <p className="max-w-[850px] mx-auto text-center text-base md:text-lg text-gray-800">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other and recommend the best course
            of action.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Develop;
