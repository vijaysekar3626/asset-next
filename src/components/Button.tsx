import React from "react";
type ButtonProp = {
    title ? : any,
    onClick ?:any,
    disabled ?:any 
}

function Button({ title, onClick, disabled }:ButtonProp) {
  return (
    <button disabled={disabled} type="submit"
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white focus:outline-none"
      onClick={onClick}
    >
      <span className="px-2 py-1 text-xs sm:text-sm relative sm:px-5 sm:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {title}
      </span>
    </button>
  );
}

export default Button;
