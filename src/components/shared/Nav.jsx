"use client";
import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import IconButton from "../ui/IconButton";
import { Phone } from "lucide-react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/projects" },
    { name: "Portfolio", href: "/about" },
  ];

  return (
    <nav className="w-full  fixed top-0  z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 lg:py-7 flex justify-between items-center">
        <Link
          href="/"
          className="text-[34px] font-bold text-black dark:text-white uppercase"
        >
          Develop.me
        </Link>

        {/* Desktop Links */}
        

        <div className="flex items-center gap-12">
          <ul className="hidden text-[16px] md:flex space-x-8 text-black dark:text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-blue-500 duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:flex hidden">
            <IconButton
            icon={ArrowRight}
            text="Schedule a Call"
            
          />

        </div>
        
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-6 h-6 text-black dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-black dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black px-4 pt-2 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-black dark:text-white hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
