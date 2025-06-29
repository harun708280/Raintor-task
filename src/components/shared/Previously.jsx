import Image from "next/image";
import React from "react";
import FallingText from "../ui/FallingText";

const brands = [
  {
    name: "awwwards",
    src: "/Vector (6).png",
    rotate: "rotate-[24deg]",
    bg: "bg-black text-white mr-20",
    width: 120,
    height: 30,
  }, // Rotated to match image
  {
    name: "CSS Winner",
    src: "/Vector (7).png",
    rotate: "",
    bg: "bg-white ",
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
  }, // Adjusted width for "ThoughtWorks"
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
    rotate: "-rotate-[20deg]",
    bg: "bg-white mt-6",
    width: 180,
    height: 30,
  }, // Adjusted width for "CSS Design Awards"
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
    <div className="w-full py-20 overflow-hidden -mt-28 md:px-12">
      {" "}
      {/* Added overflow-hidden to contain potential animations */}
      <div className="flex flex-col !justify-between mx-auto  gap- max-w-7xl md:flex-row md:items-center">
        <div className="px-4 text-3xl font-bold tracking-tight md:w-1/3 md:px-0">
          {" "}
          {/* Added px-4 for mobile padding */}
          PREVIOUSLY <br /> WORKED ON
        </div>

        <div className="relative flex flex-wrap justify-center gap-4 md:justify-end md:w-2/3">
          {" "}
          {/* Added relative for absolute positioning of bubbles if needed for complex layouts */}
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`flex items-center justify-center px-10 py-3 rounded-full shadow-md border border-black transition-all duration-300 hover:scale-105 hover:shadow-lg ${brand.bg} ${brand.rotate}`} // Added hover effects
              // For more complex, image-like placement, you might need absolute positioning:
              // style={{ position: 'absolute', top: `${index * 50}px`, left: `${index * 80}px` }}
            >
              {brand.name === "awwwards" ? (
                <span className="text-lg font-bold">{brand.name}</span>
              ) : brand.name === "CSS Winner" ? (
                <span className="text-lg font-bold">CSS WINNER</span>
              ) : brand.name === "ThoughtWorks" ? (
                <span className="text-lg font-bold">/thoughtworks</span>
              ) : brand.name === "Facebook" ? (
                <span className="text-lg font-bold">
                  {brand.name.toLowerCase()}
                </span>
              ) : brand.name === "CSS Design Awards" ? (
                <div className="flex items-center space-x-1">
                  {/* Assuming you have a small logo for CSS Design Awards */}
                  {/* <Image src="/path/to/css-design-awards-logo.svg" alt="CSS Design Awards Logo" width={20} height={20} /> */}
                  <span className="text-lg">
                    CSS<span className="font-bold">DesignAwards</span>
                  </span>
                </div>
              ) : brand.name === "Autodesk" ? (
                <div className="flex items-center space-x-1">
                  {/* Assuming you have a small logo for Autodesk */}
                  {/* <Image src="/path/to/autodesk-logo.svg" alt="Autodesk Logo" width={20} height={20} /> */}
                  <span className="text-lg font-bold">AUTODESK</span>
                </div>
              ) : (
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
        <div>
            
        </div>
        
      </div>
    </div>
  );
};

export default Previously;
