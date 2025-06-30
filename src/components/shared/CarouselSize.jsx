import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { motion } from "framer-motion";

const skills = [
  { title: "React", description: "A powerful JavaScript library for building UIs efficiently." },
  { title: "HTML & CSS", description: "Foundation of the web for structuring and styling content." },
  { title: "JavaScript", description: "The dynamic scripting language for web development." },
  { title: "Webflow", description: "A visual development tool for building responsive websites." },
  { title: "Tailwind CSS", description: "A utility-first CSS framework for rapid modern UI design." },
];

export function CarouselSize() {
  return (
    <CarouselContent>
      {skills.map((skill, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="p-2"
          >
            <Card className="bg-[#1c1c1c] border-none text-white transition-all h-full rounded-[30px] shadow-md">
              <CardContent className="flex flex-col justify-between gap-4 p-6 lg:h-64">
                <Image
                  src="/React.png"
                  alt={skill.title}
                  width={78}
                  height={68}
                  className="object-contain"
                />
                <h3 className="text-xl font-semibold">{skill.title}</h3>
                <p className="mt-2 text-base text-gray-300">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </CarouselItem>
      ))}
    </CarouselContent>
  );
}
