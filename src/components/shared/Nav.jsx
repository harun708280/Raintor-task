"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import IconButton from "../ui/IconButton";
import { ModeToggle } from "../ui/ModeToggle";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 
        ${scrolled ? "bg-white/80 dark:bg-black/90 backdrop-blur-md shadow-md" : "bg-transparent"}
      `}
    >
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl md:px-6 lg:py-5">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-black uppercase sm:text-3xl dark:text-white"
        >
          Develop.me
        </Link>

        {/* Desktop Menu */}
        <div className="items-center hidden gap-10 md:flex">
          <ul className="flex items-center gap-6 text-[16px] text-black dark:text-white">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="transition-colors duration-200 hover:text-blue-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <ModeToggle />

          <IconButton icon={ArrowRight} text="Start Project" />
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-black dark:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="px-4 pt-2 pb-6 space-y-4 text-black bg-white md:hidden dark:bg-black dark:text-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-lg hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <IconButton icon={ArrowRight} text="Start Project" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
