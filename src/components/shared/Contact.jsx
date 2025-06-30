"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowDown,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Send,
  MessageCircle,
} from "lucide-react";
import IconButton from "../ui/IconButton";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="z-0 flex items-center justify-center min-h-screen px-4 transition-colors duration-500 bg-bottom bg-no-repeat bg-cover dark:bg-black overflow-hidden
      "
      style={{ backgroundImage: "url('/contactbg.png')" }}
    >
      <div className="flex flex-col justify-between w-full gap-12 py-12 md:my-28 max-w-7xl lg:flex-row">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center lg:w-3/5"
        >
          {/* Header Pill */}
          <div className="flex items-center mb-6 text-black dark:text-white">
            <ArrowDown className="w-8 h-8 p-2 text-xl border border-black rounded-full dark:border-white" />
            <p className="px-4 py-1 border border-black rounded-full dark:border-white">
              Contact
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-[26px] sm:text-[42px] md:text-[64px] lg:text-[68px] font-bold lg:leading-[106px] text-black dark:text-white">
            Interested in <br />
            <span className="px-2 text-white bg-black dark:bg-white dark:text-black rounded-xl">
              work
            </span>{" "}
            together?
          </h1>

          {/* Description */}
          <p className="my-6 text-base leading-relaxed text-black sm:text-lg dark:text-gray-300">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other.
          </p>

          <div className="">
            <IconButton icon={Phone} text="Schedule a Call" />
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full lg:w-[40%] p-8 sm:p-12 overflow-hidden bg-black dark:bg-white rounded-3xl shadow-xl transition-colors duration-500"
        >
          <div className="relative z-10 flex flex-col space-y-8">
            {/* Input Fields */}
            {["Enter your name", "Your email address"].map((placeholder, i) => (
              <motion.input
                key={i}
                type={placeholder.includes("email") ? "email" : "text"}
                placeholder={placeholder}
                className="w-full pb-3 text-white dark:text-black placeholder-white dark:placeholder-black bg-transparent border-b border-gray-500 focus:outline-none focus:border-[#C5FF41] transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              />
            ))}

            <motion.textarea
              rows="3"
              placeholder="Describe your project"
              className="w-full pb-3 text-white dark:text-black placeholder-white dark:placeholder-black bg-transparent border-b border-gray-500 resize-none focus:outline-none focus:border-[#C5FF41] transition-all duration-300"
              whileFocus={{ scale: 1.02 }}
            />

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col pt-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
            >
              <IconButton
                icon={Send}
                text="Send"
                className="text-white border-white dark:text-black dark:border-black"
                iconClassName="text-white dark:text-black"
              />
              <IconButton
                icon={MessageCircle}
                text="Contact me"
                className="text-white border-white dark:text-black dark:border-black"
                iconClassName="text-white dark:text-black"
                textClassName="text-white dark:text-black"
              />
            </motion.div>

            {/* Socials */}
            <motion.div
              className="flex items-center justify-start pt-6 space-x-6 text-white dark:text-black"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span>@williamrey</span>
              <div className="w-10 border-b-2 border-current"></div>

              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="transition-colors duration-200 hover:text-[#C5FF41]"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
