import React from "react";

const SectionLayout = ({ className="", children }) => {
  return <section className={`${className} mb-[40px]`}>{children}</section>;
};

export default SectionLayout;
