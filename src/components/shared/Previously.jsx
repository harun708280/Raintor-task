import Image from "next/image";
import React from "react";

const brands = [
  {
    name: "awwwards",
    src: "/Vector (6).png",
    rotate: "rotate-[24deg]",
    bg: "bg-black text-white mr-20",
    width: 120,
    height: 30,
  },
  {
    name: "CSS Winner",
    src: "/Vector (7).png",
    rotate: "",
    bg: "bg-white",
    width: 120,
    height: 30,
  },
  {
    name: "ThoughtWorks",
    src: "/Vector (8).png",
    rotate: "rotate-[28deg]",
    bg: "bg-white",
    width: 150,
    height: 30,
  },
  {
    name: "Facebook",
    src: "/Vector (9).png",
    rotate: "",
    bg: "bg-white mt-6",
    width: 120,
    height: 30,
  },
  {
    name: "CSS Design Awards",
    src: "/Vector (7).png",
    rotate: "-rotate-[16deg]",
    bg: "bg-white mt-6",
    width: 180,
    height: 30,
  },
  {
    name: "Autodesk",
    src: "/Vector (7).png",
    rotate: "",
    bg: "bg-white mt-4",
    width: 120,
    height: 30,
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
                <span className="text-lg font-bold">{brand.name.toLowerCase()}</span>
              )}

              {brand.name === "CSS Design Awards" && (
                <span className="text-lg">
                  CSS<span className="font-bold">DesignAwards</span>
                </span>
              )}

              {brand.name === "Autodesk" && (
                <span className="text-lg font-bold">AUTODESK</span>
              )}

              {!["awwwards", "CSS Winner", "ThoughtWorks", "Facebook", "CSS Design Awards", "Autodesk"].includes(
                brand.name
              ) && (
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                  className="object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Previously;
