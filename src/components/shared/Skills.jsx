"use client";

import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { CarouselSize } from "./CarouselSize";
import { Carousel } from "../ui/carousel";
import { motion } from "framer-motion";

const Skills = () => {
  const [carouselApi, setCarouselApi] = useState(null);

  const handlePrev = () => {
    if (carouselApi) carouselApi.scrollPrev();
  };

  const handleNext = () => {
    if (carouselApi) carouselApi.scrollNext();
  };

  return (
    <section className=" min-h-[845px] lg:m-4 lg:-mt-8  text-white bg-black rounded-[30px] z-20 flex flex-col justify-center ">
      <div className="flex flex-col justify-center w-full px-4 py-10 mx-auto max-w-7xl lg:py-24">

        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", }}
          className="flex items-center text-white"
        >
          <ArrowDown className="w-8 h-8 p-2 text-xl border border-white rounded-full" />
          <p className="px-4 py-1 border border-black rounded-full dark:border-white">
            Why Choose Me
          </p>
        </motion.div>

        {/* Heading + Description + Buttons */}
        <div className="flex flex-col justify-between gap-6 py-12 md:flex-row md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", }}
            className="text-3xl font-bold lg:leading-[86px] md:text-5xl lg:text-[58px] md:leading-[70px]"
          >
            <h1>
              My Extensive <br /> List of Skills
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", }}
            className="space-y-4 text-base text-left md:text-lg md:text-end"
          >
            <p>
              Building the world’s best marketing. Your <br className="hidden md:block" />
              trusted partner for strategy, design, and dev.
            </p>
            <hr className="border-white" />
            <div className="flex items-center justify-start gap-3 md:justify-end">
              <button
                onClick={handlePrev}
                className="w-10 h-10 transition-all duration-300 border border-white rounded-full hover:bg-white hover:text-black"
              >
                <ArrowLeft className="w-5 h-5 mx-auto" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 transition-all duration-300 border border-white rounded-full hover:bg-white hover:text-black"
              >
                <ArrowRight className="w-5 h-5 mx-auto" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Carousel setApi={setCarouselApi}>
            <div className="relative">
              <CarouselSize />
              <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black/60 to-transparent pointer-events-none rounded-[30px]" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
