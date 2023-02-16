import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, name, label, value, onChange, placeholder, required, autoComplete }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="form-control"
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  required: false,
};

export default Input;

