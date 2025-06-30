"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import IconButton from "../ui/IconButton";
import { ModeToggle } from "../ui/ModeToggle";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md "
          : "bg-transparent "
      }`}
      role="navigation"
      aria-label="Primary Navigation"
    >
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl lg:py-5">
        {/* Logo */}
        <Link
          href="#home"
          className="text-[30px] font-bold text-black dark:text-white uppercase"
          onClick={handleNavLinkClick}
        >
          Develop.me
        </Link>

        {/* Desktop Menu */}
        <div className="items-center hidden gap-10 md:flex">
          <ul className="flex gap-8 text-[16px] text-black dark:text-white">
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                {/* Anchor tag for scroll on same page */}
                <a
                  href={href}
                  className="transition-colors duration-200 hover:text-[#C5FF41]"
                  onClick={handleNavLinkClick}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          <ModeToggle />
          <IconButton
            icon={ArrowRight}
            text="Start Project"
            onClick={handleNavLinkClick}
          />
        </div>

        {/* Mobile Toggle & ModeToggle */}
        <div className="flex items-center gap-3 md:hidden">
          <ModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            type="button"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-black dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-black dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 z-40 px-4 py-6 space-y-4 bg-white shadow-md top-full dark:bg-black md:hidden"
        >
          {navLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="block text-lg text-black dark:text-white hover:text-[#C5FF41] py-2 px-3 rounded-md transition-colors duration-200"
              onClick={handleNavLinkClick}
            >
              {name}
            </a>
          ))}
          <div className="pt-4">
            <IconButton
              icon={ArrowRight}
              text="Start Project"
              onClick={handleNavLinkClick}
              className="w-full text-lg"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
