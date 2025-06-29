"use client";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { CarouselSize } from "./CarouselSize";
import { Carousel } from "../ui/carousel"; // 🛠️ মূল Carousel কম্পোনেন্ট
import { Button } from "@/components/ui/button";

const Skills = () => {
  const [carouselApi, setCarouselApi] = useState(null); // 🎯 এখানে API স্টোর হবে

  const handlePrev = () => {
    if (carouselApi) carouselApi.scrollPrev();
  };

  const handleNext = () => {
    if (carouselApi) carouselApi.scrollNext();
  };

  return (
    <div className="min-h-[845px]  m-3 -mt-8 text-white bg-[#000000] rounded-xl max-7xl z-20">
      <div className="w-full px-4 py-3 mx-auto lg:py-24 max-w-7xl">
        <div className="flex items-center text-white">
          <ArrowDown className="w-8 h-8 p-2 text-xl border border-white rounded-full" />
          <p className="px-4 py-1 border rounded-full">Why Choose me</p>
        </div>

        <div className="flex justify-between py-12">
          <div className="text-[58px] leading-tight font-bold shadow-sm">
            <h1>
              My Extensive <br /> List of Skills
            </h1>
          </div>
          <div className="space-y-6 text-lg text-end">
            <p>
              Building the world’s best marketing. Your <br />
              trusted partner for strategy, design, and dev.
            </p>
            <hr />
            <div className="flex items-center justify-end gap-2">
            <button
              variant="outline"
              className="w-10 h-10 rounded-full"
              onClick={handlePrev}
            >
              <ArrowLeft className="w-10 h-10 p-2 text-xl border border-white rounded-full" />
            </button>
            <button
              variant="outline"
              className="w-10 h-10 rounded-full"
              onClick={handleNext}
            >
              <ArrowRight className="w-10 h-10 p-2 text-xl border border-white rounded-full" />
            </button>
          </div>
          </div>

        
          
        </div>

        
        <Carousel setApi={setCarouselApi}>
          <CarouselSize />
        </Carousel>
      </div>
    </div>
  );
};

export default Skills;
