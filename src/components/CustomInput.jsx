import React from "react";

const CustomInput = ({
  name,
  value,
  label,
  error,
  type = "text",
  onChange,
}) => {
  return (
    <div className="input-field">
      <label
        htmlFor={name}
        className="text-primary block mb-1 text-[16px] font-semibold"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`border rounded-[8px] p-[5px] w-full ${
          error ? "border-red-500" : "border-[#CBB4B4]"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CustomInput;
