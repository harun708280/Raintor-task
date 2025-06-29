import { Facebook, FacebookIcon, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import IconButton from "../ui/IconButton";

const Hero = () => {
  return (
    <div
      className="flex items-center justify-start min-h-screen bg-no-repeat bg-cover "
      style={{ backgroundImage: "url('/herobg.png')" }}
    >
      <div className="w-full px-4 py-3 mx-auto max-w-7xl lg:py-7 ">
        <h1 className="text-[78px] mt-24 leading-[126px] font-bold">
          Trusted{" "}
          <span className="px-2 pb-2 text-white bg-black rounded-xl">
            Partner
          </span>{" "}
          for <br /> Your Website{" "}
          <span className="px-2 pb-2 text-white bg-black rounded-xl">
            Develop.
          </span>{" "}
        </h1>
        <div className="flex mt-12 ">
           <div className="flex items-center w-[25%]">
            <p className="text-lg font-medium -rotate-90 ">@williamrey</p>
            <div className="flex flex-col items-center gap-4 mt-6">
              <Image src="/twi.png" alt="Twitter" width={27} height={27} />
              <Image src="/ins.png" alt="Instagram" width={27} height={27} />
              <Image src="/fb.png" alt="Facebook" width={27} height={27} />
              <div className="h-10 mt-4 border-l-4 border-black" />
            </div>
          </div>
          <div className="max-w-2xl space-y-8 ">
            <p className="font-medium text-gray-800 ">
              Building the world’s best marketing websites for over a decade. <br />
              Your trusted partner for strategy, design, and dev.
            </p>

            <IconButton icon={Phone} text="Schedule a Call" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
