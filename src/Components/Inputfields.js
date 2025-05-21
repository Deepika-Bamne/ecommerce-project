import React from 'react';

const inputfields = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      style={{ marginBottom: '10px', padding: '8px', width: '100%' }}
    />
  );
};

export default inputfields;
