"use client";

import { Phone, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";
import IconButton from "../ui/IconButton";
import { motion } from "framer-motion";

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <div
      className="flex items-center justify-start min-h-screen overflow-hidden bg-no-repeat bg-cover "
      style={{ backgroundImage: "url('/herobg.png')" }}
    >
      <div className="flex flex-col justify-center w-full h-full px-4 py-3 mx-auto my-20 max-w-7xl lg:py-7 md:my-28 md:mt-44">
        <motion.h1
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-5xl lg:text-[68px] leading-[50px] md:leading-[90px] lg:leading-[140px] font-bold text-black dark:text-white"
        >
          Trusted{" "}
          <span className="px-2 text-white bg-black dark:bg-white dark:text-black rounded-xl">
            Partner
          </span>{" "}
          for <br className="hidden md:block" /> Your Website{" "}
          <span className="px-2 text-white bg-black dark:bg-white dark:text-black rounded-xl">
            Develop.
          </span>
        </motion.h1>

        <div className="flex flex-col gap-8 mt-12 lg:flex-row">
          {/* Social & username */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="visible"
            className="flex items-center lg:w-[25%] gap-6"
          >
            <p className="text-sm font-medium text-black rotate-0 lg:-rotate-90 whitespace-nowrap dark:text-white">
              @williamrey
            </p>
            <div className="flex items-center gap-4 text-black lg:flex-col dark:text-white">
              <Twitter size={24} />
              <Instagram size={24} />
              <Facebook size={24} />
              <div className="h-10 w-0.5 lg:w-0.5 lg:h-10 bg-black dark:bg-white" />
            </div>
          </motion.div>

          {/* Description and CTA */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="visible"
            className="flex-1 space-y-6"
          >
            <p className="text-base font-medium text-gray-800 dark:text-gray-300 md:text-lg">
              Building the world’s best marketing websites for over a decade.
              <br />
              Your trusted partner for strategy, design, and dev.
            </p>
            <IconButton icon={Phone} text="Schedule a Call" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
