import React from "react";
import PropTypes from "prop-types";

import PasswordInput from "../PasswordInput";

export const PasswordInputBase = ({ label, placeholder, ...props }) => {
  return (
    <PasswordInput
      label={label}
      placeholder={placeholder}
      {...props}
    ></PasswordInput>
  );
};

PasswordInputBase.propTypes = {
  /**
   * Input Label text
   */
  label: PropTypes.string,
  /**
   * Placeholder text
   */
  placeholder: PropTypes.string,
  /**
   * Change callback function
   */
  onChange: PropTypes.func,
};

PasswordInputBase.defaultProps = {
  label: "",
  placeholder: "",
  onChange: () => {},
};
