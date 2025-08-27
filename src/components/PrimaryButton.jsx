import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ path, label, classname }) => {
  return (
    <>
      <Link
        to={path}
        className={`primary-button font-bold text-[16px] bg-[#FFC20E] px-[50px] py-[12px] rounded-[8px] ${classname} inline-block text-black`}
      >
        {label || "BTN"}
      </Link>
    </>
  );
};

export default PrimaryButton;
