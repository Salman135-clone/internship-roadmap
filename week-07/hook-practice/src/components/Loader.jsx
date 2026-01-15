import React from "react";

const Loader = ({ size = "h-10 w-10", color = "text-blue-500" }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`${size} ${color} animate-spin rounded-full border-4 border-solid border-current border-r-transparent`}
        role="status"
      ></div>
    </div>
  );
};

export default Loader;
