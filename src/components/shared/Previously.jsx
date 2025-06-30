import Image from "next/image";
import React from "react";
import AnimatedContent from "../ui/AnimatedContent";

const brands = [
  {
    name: "awwwards",
    src: "/Vector (6).png",
    rotate: "rotate-[24deg]",
    bg: "bg-black dark:bg-white text-white mr-20 dark:text-black",
    width: 120,
    height: 30,
    d:0.3,
  },
  {
    name: "CSS Winner",
    src: "/Vector (7).png",
    rotate: "",
    bg: "bg-white dark:text-black",
    width: 120,
    height: 30,
    d:0.4,
    
  },
  {
    name: "ThoughtWorks",
    src: "/Vector (8).png",
    rotate: "rotate-[28deg]",
    bg: "bg-white dark:text-black",
    width: 150,
    height: 30,
    d:0.5
  },
  {
    name: "Facebook",
    src: "/Vector (9).png",
    rotate: "",
    bg: "bg-white mt-6 dark:text-black",
    width: 120,
    height: 30,
    d:0.6
  },
  {
    name: "CSS Design Awards",
    src: "/Vector (7).png",
    rotate: "-rotate-[16deg]",
    bg: "bg-white mt-6 dark:text-black",
    width: 180,
    height: 30,
    d:0.3
  },
  {
    name: "Autodesk",
    src: "/Vector (7).png",
    rotate: "",
    bg: "bg-white dark:text-black mt-4",
    width: 120,
    height: 30,
    d:0.5
  },
];

const Previously = () => {
  return (
    <div className="w-full py-16 -mt-24 overflow-hidden md:px-12">
      <div className="flex flex-col gap-10 mx-auto max-w-7xl md:flex-row md:items-center md:justify-between">
        <div className="px-4 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl md:w-1/3 md:px-0">
          PREVIOUSLY <br /> WORKED ON
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:justify-end md:w-2/3">
          {brands.map((brand, index) => (
            <AnimatedContent
              
              direction="vertical"
              reverse={false}
              duration={1.2}
              ease="bounce.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
            >
              <div
                key={index}
                className={`flex items-center justify-center px-8 py-3 rounded-full shadow-md border border-black transition-transform duration-300 hover:scale-105 hover:shadow-lg ${brand.bg} ${brand.rotate}`}
              >
                {brand.name === "awwwards" && (
                  <span className="text-lg font-bold">{brand.name}</span>
                )}

                {brand.name === "CSS Winner" && (
                  <span className="text-lg font-bold">CSS WINNER</span>
                )}

                {brand.name === "ThoughtWorks" && (
                  <span className="text-lg font-bold">/thoughtworks</span>
                )}

                {brand.name === "Facebook" && (
                  <span className="text-lg font-bold">
                    {brand.name.toLowerCase()}
                  </span>
                )}

                {brand.name === "CSS Design Awards" && (
                  <span className="text-lg">
                    CSS<span className="font-bold">DesignAwards</span>
                  </span>
                )}

                {brand.name === "Autodesk" && (
                  <span className="text-lg font-bold">AUTODESK</span>
                )}

                {![
                  "awwwards",
                  "CSS Winner",
                  "ThoughtWorks",
                  "Facebook",
                  "CSS Design Awards",
                  "Autodesk",
                ].includes(brand.name) && (
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={brand.width}
                    height={brand.height}
                    className="object-contain"
                  />
                )}
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Previously;
