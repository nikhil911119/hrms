import React, { useEffect, useState } from "react";


const CardLayout = ({ title, children, className = "" }) => {
  useEffect(() => {
    fetch;
  });
  return (
    <div
      className={`card pl-[15px] pr-[25px] py-[25px] bg-white rounded-lg shadow-sm ${className}`}
    >
      {title && (
        <div className="heading font-bold mb-[30px]">
          <h3 className="text-[20px] text-[#545559]">{title}</h3>
        </div>
      )}
      {children}
    </div>
  );
};

export default CardLayout;
