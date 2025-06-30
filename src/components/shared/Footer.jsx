"use client";

import React from "react";
import Link from "next/link";
import FadeContent from "../ui/FadeContent";

const Footer = () => {
  return (
    <footer className="px-4 py-16 lg:-mt-24 lg:m-4 text-white bg-black rounded-[52px] sm:px-6">
        <FadeContent
            blur={true}
            duration={1050}
            easing="ease-out"
            initialOpacity={0}
          ><div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          {/* Left Section */}
          <div className="lg:w-[40%]">
            <div className="text-3xl font-bold text-[#C5FF41] sm:text-4xl mt-5">
              DEVLOP.ME
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-[60%]">
            <div className="text-[42px] sm:text-[52px] lg:text-[64px] pb-10 font-bold leading-tight">
              As you can
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              {/* Say Hello */}
              <div>
                <h4 className="mb-4 text-lg font-semibold text-gray-400">Say hello</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="mailto:HELLO@DEVLOP.ME.COM" className="text-gray-200 transition hover:text-white">
                      HELLO@DEVLOP.ME.COM
                    </a>
                  </li>
                  <li>
                    <a href="mailto:MAHBUBUL@ME.COM" className="text-gray-200 transition hover:text-white">
                      MAHBUBUL@ME.COM
                    </a>
                  </li>
                </ul>

                <h4 className="mt-8 mb-4 text-lg font-semibold text-gray-400">Call</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="tel:+784549498100" className="text-gray-200 transition hover:text-white">
                      +784549 4981 00
                    </a>
                  </li>
                  <li>
                    <a href="tel:+88450100211" className="text-gray-200 transition hover:text-white">
                      +8845 0100 211
                    </a>
                  </li>
                </ul>
              </div>

              {/* Menu */}
              <div>
                <h4 className="mb-4 text-lg font-semibold text-gray-400">Menu</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/">
                      <span className="text-gray-200 transition hover:text-white">HOME</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <span className="text-gray-200 transition hover:text-white">ABOUT</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio">
                      <span className="text-gray-200 transition hover:text-white">PORTFOLIO</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <span className="text-gray-200 transition hover:text-white">BLOG</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h4 className="mb-4 text-lg font-semibold text-gray-400">Social</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="https://twitter.com" target="_blank">
                      <span className="text-gray-200 transition hover:text-white">TWITTER</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://instagram.com" target="_blank">
                      <span className="text-gray-200 transition hover:text-white">INSTAGRAM</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://facebook.com" target="_blank">
                      <span className="text-gray-200 transition hover:text-white">FACEBOOK</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://behance.net" target="_blank">
                      <span className="text-gray-200 transition hover:text-white">BEHANCE</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://dribbble.com" target="_blank">
                      <span className="text-gray-200 transition hover:text-white">DRIBBBLE</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between pt-10 mt-10 text-sm text-gray-400 border-t border-gray-800 sm:flex-row">
          <div className="mb-4 text-2xl font-bold text-white sm:mb-0">BESNIK</div>
          <div className="mb-4 sm:mb-0">© devlop.me 2022</div>
          <div className="flex gap-2">
            <Link href="/privacy">
              <span className="transition hover:text-white">PRIVACY</span>
            </Link>
            <span>-</span>
            <Link href="/terms">
              <span className="transition hover:text-white">TERMS</span>
            </Link>
          </div>
        </div>
      </div></FadeContent>
      
    </footer>
  );
};

export default Footer;
