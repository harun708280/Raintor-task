import React from "react";

const IconButton = ({
  icon: Icon,
  text,
  onClick,
  className = "",
  iconClassName = "",
  textClassName = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        group flex items-center gap-2 pr-4 py-2 
        border border-black dark:border-white 
        rounded-full 
        transition-colors duration-300
        hover:bg-black dark:hover:bg-white
        hover:text-white dark:hover:text-black
        ${className}
      `}
    >
      <Icon
        className={`
          w-8 h-8 p-2 border rounded-full
          border-black dark:border-white 
          bg-white dark:bg-black
          text-black dark:text-white 
          group-hover:bg-white dark:group-hover:bg-black
          group-hover:text-black dark:group-hover:text-white
          transition-all duration-300
          ${iconClassName}
        `}
      />
      <span
        className={`
          text-sm font-medium
          text-black dark:text-white
          group-hover:text-white dark:group-hover:text-black
          transition-colors duration-300
          ${textClassName}
        `}
      >
        {text}
      </span>
    </button>
  );
};

export default IconButton;
