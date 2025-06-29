import React from "react";
import Link from "next/link";
import {
  ChevronDown,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  ArrowDown,
  Send,
  MessageCircle,
} from "lucide-react";
import IconButton from "../ui/IconButton";

const Contact = () => {
  return (
    <div
      className="z-0 flex items-center justify-center min-h-screen px-4 bg-bottom bg-no-repeat bg-cover "
      style={{ backgroundImage: "url('/contactbg.png')" }}
    >
      <div className="flex flex-col justify-between w-full gap-12 py-12 md:my-28 max-w-7xl lg:flex-row">
        {/* Left Section */}
        <div className="flex flex-col justify-center lg:w-3/5">
          {/* Header Pill */}
          <div className="flex items-center mb-6 text-black">
            <ArrowDown className="w-8 h-8 p-2 text-xl border border-black rounded-full" />
            <p className="px-4 py-1 border border-black rounded-full">
              Contact
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-[18px] md:text-[64px] lg:text-[68px]  lg:leading-[126px] font-bold">
            Interested in <br />
            <span className="px-2 text-white bg-black rounded-xl">
              work
            </span>{" "}
            together?
          </h1>

          {/* Description */}
          <p className="my-6 text-base leading-relaxed sm:text-lg">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other.
          </p>

          {/* Call Button */}
         <div className="">
             <IconButton icon={Phone} text="Schedule a Call" />
         </div>
        </div>

        {/* Right Section (Form) */}
        <div className="relative w-full lg:w-[40%] p-8 sm:p-12 overflow-hidden bg-black rounded-3xl">
          <div className="relative z-10 flex flex-col space-y-8">
            {/* Input Fields */}
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full pb-3 text-white placeholder-white transition-all duration-300 bg-transparent border-b border-gray-500 focus:outline-none focus:border-[#C5FF41] focus:text-white"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full pb-3 text-white placeholder-white transition-all duration-300 bg-transparent border-b border-gray-500 focus:outline-none focus:border-[#C5FF41] focus:text-white"
            />
            <textarea
              placeholder="Describe your project"
              rows="3"
              className="w-full pb-3 text-white placeholder-white transition-all duration-300 bg-transparent border-b border-gray-500 resize-none focus:outline-none focus:border-[#C5FF41] focus:text-white"
            ></textarea>

            {/* Buttons */}
            <div className="flex flex-col pt-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <IconButton
                icon={Send}
                text="Send"
                className="text-white border-white"
                iconClassName="text-white"
              />

              <IconButton
                icon={MessageCircle}
                text="Contact me"
                className="text-white border-white"
                iconClassName="text-white"
                textClassName="text-white"
              />
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-start pt-6 space-x-6">
              <span className="text-white">@williamrey</span>
              <div className="w-10 border-b-2 border-white"></div>

              <Link
                href="#"
                className="text-white transition-colors duration-200 hover:text-[#C5FF41]"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-white transition-colors duration-200 hover:text-[#C5FF41]"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-white transition-colors duration-200 hover:text-[#C5FF41]"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
