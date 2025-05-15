import React from 'react';

const InputField = ({ type, name, placeholder, value, onChange, required = true }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="input-field"
    />
  );
};

export default InputField;
