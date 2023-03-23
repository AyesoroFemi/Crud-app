import React from "react";

function InputForm({ name, type, value, handleChange, labelText }) {
  return (
    <div className="my-2">
      <label htmlFor={name}>{labelText || name}</label>
      <input
        className="block w-full py-1 outline-none px-3 rounded-sm"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputForm;
