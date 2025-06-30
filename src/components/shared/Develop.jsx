import { ArrowDown } from "lucide-react";
import React from "react";
import FadeContent from "../ui/FadeContent";

const Develop = () => {
  return (
    <div
      className="z-0 flex items-center justify-start min-h-[600px] lg:min-h-[873px] bg-top bg-no-repeat bg-cover mt-0 lg:-mt-12"
      style={{ backgroundImage: "url('/devebg.png')" }}
    >
      <div className="w-full px-4 text-black">
        <div className="max-w-[1053px] mx-auto space-y-6">
          {/* Top Right Arrow + About */}

          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="flex items-center justify-end ">
              <ArrowDown className="w-8 h-8 p-2 text-xl border border-black rounded-full dark:text-white dark:border-white" />
              <p className="px-4 py-1 text-sm border border-black rounded-full md:text-base dark:text-white dark:border-white">
                About
              </p>
            </div>
          </FadeContent>

          {/* Heading */}
          <FadeContent
            blur={true}
            duration={1050}
            easing="ease-out"
            initialOpacity={0}
          >
            <h1 className="text-3xl md:text-5xl lg:text-[68px] font-bold leading-[50px] md:leading-[90px] lg:leading-[140px] text-end dark:text-white">
              I’ve been{" "}
              <span className="px-2 text-white bg-black dark:text-black dark:bg-white rounded-xl">
                Developing
              </span>{" "}
              Websites since{" "}
              <span className="px-2 text-white bg-black rounded-xl dark:text-black dark:bg-white">2013</span>
            </h1>
          </FadeContent>

          {/* Paragraph */}
          <FadeContent
            blur={true}
            duration={1100}
            easing="ease-out"
            initialOpacity={0}
          >
            <p className="max-w-[850px] mx-auto text-center text-base md:text-lg text-gray-800 dark:text-white">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other and recommend the best course
              of action.
            </p>
          </FadeContent>
        </div>
      </div>
    </div>
  );
};

export default Develop;
