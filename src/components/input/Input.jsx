import React from "react";

export default function Input({
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  className = "",
  ...rest
}) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      {...rest}
    />
  );
}
