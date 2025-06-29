import { Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import IconButton from "../ui/IconButton";

const Hero = () => {
  return (
    <div
      className="flex items-center justify-start min-h-screen overflow-hidden bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/herobg.png')" }}
    >
      <div className="flex flex-col justify-center w-full h-full px-4 py-3 mx-auto my-20 max-w-7xl lg:py-7 md:my-28 md:mt-44">
        <h1 className="text-xl md:text-5xl lg:text-[68px] leading-[50px] md:leading-[90px] lg:leading-[140px] font-bold ">
          Trusted{" "}
          <span className="px-2 text-white bg-black rounded-xl">Partner</span>{" "}
          for <br className="hidden md:block" /> Your Website{" "}
          <span className="px-2 text-white bg-black rounded-xl">Develop.</span>
        </h1>

        <div className="flex flex-col gap-8 mt-12 lg:flex-row">
          {/* Social & username */}
          <div className="flex items-center lg:w-[25%] gap-6">
            <p className="text-sm font-medium rotate-0 lg:-rotate-90 whitespace-nowrap">@williamrey</p>
            <div className="flex items-center gap-4 lg:flex-col">
              <Image src="/twi.png" alt="Twitter" width={24} height={24} />
              <Image src="/ins.png" alt="Instagram" width={24} height={24} />
              <Image src="/fb.png" alt="Facebook" width={24} height={24} />
              <div className="h-10 w-0.5 lg:w-0.5 lg:h-10 bg-black" />
            </div>
          </div>

          {/* Description and CTA */}
          <div className="flex-1 space-y-6">
            <p className="text-base font-medium text-gray-800 md:text-lg">
              Building the world’s best marketing websites for over a decade.
              <br />
              Your trusted partner for strategy, design, and dev.
            </p>

            <IconButton
              icon={Phone}
              text="Schedule a Call"
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
