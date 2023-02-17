import React from "react";
import PropTypes from "prop-types";
import '../../../scss/InputStyle/InputStyle.scss'

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
        className="form-control inputStyle"
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
  
};

export default Input;

