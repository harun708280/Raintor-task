import React from "react";

const IconButton = ({ icon: Icon, text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 pr-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300 ${className}`}
    >
      <Icon className="w-8 h-8 p-2 text-xl border border-black rounded-full dark:border-white " />
      <span className="text-sm font-medium">{text}</span>
    </button>
  );
};

export default IconButton;
