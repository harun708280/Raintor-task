import Image from "next/image";
import React from "react";

const brands = [
  { name: "awwwards", src: "/Vector (7).png", rotate: "-rotate-[15deg]", bg: "bg-black text-white" },
  { name: "CSS Winner", src: "/Vector (7).png", rotate: "", bg: "bg-white" },
  { name: "ThoughtWorks", src: "/Vector (8).png", rotate: "-rotate-[8deg]", bg: "bg-white" },
  { name: "Facebook", src: "/Vector (9).png", rotate: "", bg: "bg-white" },
  { name: "CSS Design Awards", src: "/Vector (10).pngg", rotate: "rotate-[12deg]", bg: "bg-white" },
  { name: "Autodesk", src: "/Vector (6).png", rotate: "", bg: "bg-white" },
];

const Previously = () => {
  return (
    <div className="w-full py-20 md:px-12">
      <div className="flex flex-col gap-8 mx-auto max-w-7xl md:flex-row md:items-center">
        <div className="text-3xl font-semibold tracking-tight md:w-1/3">
          PREVIOUSLY <br /> WORKED ON
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:justify-start md:w-2/3">
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`flex items-center justify-center px-6 py-3 rounded-full shadow-md border ${brand.bg} ${brand.rotate}`}
            >
              <Image src={brand.src} alt={brand.name} width={120} height={30} className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Previously;
