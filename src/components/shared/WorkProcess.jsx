"use client";
import React, { useEffect, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Discovery",
    description:
      "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
  },
  {
    title: "Strategy",
    description:
      "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews, we're here to set the stage for success.",
  },
  {
    title: "Design",
    description:
      "After we have a comprehensive understanding of your brand, we'll move onto design. Each page will be designed, reviewed, and approved by you.",
  },
  {
    title: "Build",
    description:
      "Whether we've just finished designing your new site or you're handing off finished designs, we're here to apply our trusted development process to your project.",
  },
];

const WorkProcess = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [autoHover, setAutoHover] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (hoveredIndex === null) {
        setHoveredIndex(1); // Auto hover 2nd card
      }
    }, 800);
    return () => clearTimeout(timer);
  }, [hoveredIndex]);

  const handleMouseEnter = (index) => {
    setAutoHover(false);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="bg-[#141414] text-white rounded-[30px] m-4 -mt-5 z-20">
      <div className="px-4 py-20 mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center justify-between gap-6 mb-12 md:flex-row">
          <div className="flex items-center gap-3">
            <ArrowDown className="w-8 h-8 p-2 border border-white rounded-full" />
            <p className="px-4 py-1 text-sm border rounded-full md:text-base">
              Work Process
            </p>
          </div>
          <h2 className="text-3xl text-center md:text-left md:text-5xl lg:text-[58px] font-bold tracking-tight leading-tight">
            My Work Process
          </h2>
          <div className="hidden w-8 md:block" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card, index) => {
            const isHovered =
              hoveredIndex === index ||
              (autoHover && hoveredIndex === 1 && index === 1);

            return (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className={`p-8 rounded-3xl transition-all duration-500 transform flex flex-col justify-between group 
                  ${
                    isHovered
                      ? "bg-[#ccff00] rotate-3 translate-x-1 translate-y-1 text-black"
                      : "bg-black text-white"
                  }
                `}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`px-6 py-1 text-sm sm:text-base md:text-lg font-semibold rounded-full transition-all duration-500 ${
                      isHovered
                        ? "bg-black text-white"
                        : "bg-[#C5FFEE] text-black"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <a
                    href="#"
                    className={`flex items-center gap-1 underline transition-colors duration-300 ${
                      isHovered ? "text-black" : "text-gray-400"
                    }`}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <p
                  className={`text-sm sm:text-base md:text-lg transition-colors duration-300 ${
                    isHovered ? "text-black" : "text-gray-400"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
