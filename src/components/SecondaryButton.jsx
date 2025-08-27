import React from "react";
import { Link } from "react-router-dom";

const SecondaryButton = ({ path, label, classname }) => {
  return (
    <>
      <Link
        to={path}
        className={`secondary-button font-bold text-[16px] bg-transparent px-[48px] py-[10px] rounded-[8px] ${classname} inline-block text-white border-white border-2`}
      >
        {label || "BTN"}
      </Link>
    </>
  );
};

export default SecondaryButton;
