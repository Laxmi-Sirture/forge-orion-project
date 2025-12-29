import React from "react";

const Input = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  optional
}) => (
  <div className="mb-4">
    {label && (
      <label className="block text-sm font-medium text-gray-700">
        {label} {optional && <span className="text-gray-400">(Optional)</span>}
      </label>
    )}
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
  </div>
);

export default Input;
