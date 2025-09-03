import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg mb-3 text-[#545559] bg-[#E3EDF9] shadow-sm">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center px-[20px] py-[15px] text-left text-[18px] font-[500]"
      >
        {title}
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {/* Content with animated height */}
      <div
        className={`px-4 overflow-hidden text-gray-700 text-[18px] transition-all duration-300 ease-in-out`}
        style={{
          maxHeight: isOpen ? "300px" : "0px", // pick a value larger than any content
          opacity: isOpen ? 1 : 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
