import { ArrowDown } from "lucide-react";
import React from "react";

const Develop = () => {
  return (
    <div
      className="z-0 flex  items-center justify-start min-h-[873px] bg-top bg-no-repeat bg-cover -mt-[57px] bg-no-repea "
      style={{ backgroundImage: "url('/devebg.png')" }}
    >
      <div className="w-full text-black ">
        <div className="max-w-[1053px] mx-auto ">
          <div className=""></div>
          <div className="flex justify-end w-full text-black ">
            <ArrowDown className="w-8 h-8 p-2 text-xl border border-black rounded-full" />
            <p className="px-4 py-1 border border-black rounded-full">About</p>
          </div>

          <h1 className="text-[88px] leading-[146px] font-bold text-end py-12 ">
            I’ve been{" "}
            <span className="relative top-[3%] px-2 pb-2 text-white bg-black rounded-xl">
              Developing
            </span>{" "}
            Websites since{" "}
            <span className="relative top-[3%] px-2 pb-1 text-white bg-black rounded-xl">
              2013
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-normal text-center">
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
