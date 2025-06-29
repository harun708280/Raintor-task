'use client'
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
        setHoveredIndex(1); // 2nd card auto hover
      }
    }, 800); // delay for auto hover
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
    <div className="min-h-[845px] m-3 -mt-8 text-white bg-[#141414] rounded-3xl max-7xl z-20">
      <div className="w-full px-4 py-3 mx-auto lg:py-24 max-w-7xl">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-12 space-x-4">
          <div className="flex items-center text-white">
            <ArrowDown className="w-8 h-8 p-2 text-xl border border-white rounded-full" />
            <p className="px-4 py-1 border rounded-full"> Work Process</p>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[58px] text-center">
            My Work Process
          </h2>
          <div className=""></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 text-black md:grid-cols-2">
          {cards.map((card, index) => {
            const isHovered = hoveredIndex === index;
            const isAutoHovered = autoHover && index === 1 && hoveredIndex === 1;

            return (
              <div
                key={index}
                className={`group p-8 rounded-3xl flex flex-col justify-between transition-all duration-500 transform
                  ${isHovered || isAutoHovered ? "bg-[#ccff00] rotate-3 translate-x-1 translate-y-1 text-black" : "bg-black"}
                `}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className={`text-xl font-semibold sm:text-xl px-6 py-1 rounded-full transition-all duration-500 
                        ${isHovered || isAutoHovered ? "bg-black text-white" : "bg-[#C5FFEE]"}
                      `}
                    >
                      {card.title}
                    </h3>
                    <a
                      href="#"
                      className={`flex items-center transition-colors duration-200 underline
                        ${isHovered || isAutoHovered ? "text-black" : "text-gray-400"}
                      `}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                  <p
                    className={`text-base leading-relaxed transition-all duration-500 sm:text-lg 
                      ${isHovered || isAutoHovered ? "text-black" : "text-gray-400"}
                    `}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
