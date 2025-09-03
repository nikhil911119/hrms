import React from "react";

const ProgressBar = ({ used, total }) => {
  const percentage = (used / total) * 100;

  return (
    <div className="w-full bg-gray-200 h-[25px]">
      <div
        className="bg-[#193288] h-[25px]  transition-all duration-300"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
