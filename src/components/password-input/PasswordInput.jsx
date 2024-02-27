import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./PasswordInput.scss";

// utils
import {
  VALID_PASS,
  INVALID_PASS_LENGTH,
  INVALID_PASS_UPPERCASE,
  INVALID_PASS_NUMBER,
  INVALID_PASS_SPECIAL,
  isValidPassword,
} from "../../utils/validation";

// assets
import { ReactComponent as SuccessIcon } from "../../assets/check-circle.svg";
import { ReactComponent as ErrorIcon } from "../../assets/exclamation-triangle.svg";
import { ReactComponent as EyeIcon } from "../../assets/eye.svg";
import { ReactComponent as EyeSlashIcon } from "../../assets/eye-slash.svg";

function PasswordInput(props) {
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [validationState, setValidationState] = useState("");

  /**
   * Toggles the visibility of the password text on/off
   */
  function toggleVisibility() {
    setPasswordVisibility((prev) => !prev);
  }

  /**
   * Hanlder function called on password typed
   * Checks if password is valid & updates client and validation
   * @param {*} value
   */
  function onPasswordUpdate(value) {
    setPassword(value);
    const result = isValidPassword(value, props.validationConfig);
    props.onChange({
      valid: result === VALID_PASS,
      password: value,
    });
    setValidationState(result);
  }

  /**
   * Function to check if password is currently valid
   * @returns boolean
   */
  function hasValidPassword() {
    return validationState === VALID_PASS;
  }

  /**
   * Function to check if password is currently invalid
   * @returns boolean
   */
  function hasInvalidPassword() {
    return [
      INVALID_PASS_LENGTH,
      INVALID_PASS_UPPERCASE,
      INVALID_PASS_NUMBER,
      INVALID_PASS_SPECIAL,
    ].includes(validationState);
  }

  return (
    <div className="password-input-container">
      <label htmlFor="password-input" className="label">
        {props.label}
      </label>
      <div className="input-wrapper">
        <input
          id="password-input"
          autoComplete="off"
          data-lpignore="true"
          className={`
            ${"password-input"}
            ${hasValidPassword() ? "success" : ""}
            ${hasInvalidPassword() ? "error" : ""}
            `}
          type={passwordVisibility ? "text" : "password"}
          value={password}
          placeholder={props.placeholder}
          onChange={(e) => onPasswordUpdate(e.target.value)}
        />
        <button
          aria-label="Toggle Password Visibility"
          className="trailing-icons"
          onClick={toggleVisibility}
        >
          {passwordVisibility ? (
            <EyeIcon></EyeIcon>
          ) : (
            <EyeSlashIcon></EyeSlashIcon>
          )}
        </button>
      </div>
      <div className="validation-text-container">
        {hasValidPassword() ? <SuccessIcon></SuccessIcon> : ""}
        {hasInvalidPassword() ? <ErrorIcon></ErrorIcon> : ""}
        <span className="validation-text" aria-label="Validation status">
          {/* TODO: build invalid password msg based off validation config */}
          {hasInvalidPassword() ? "Invalid Password" : ""}
          {hasValidPassword() ? "Valid Password" : ""}
        </span>
      </div>
    </div>
  );
}

PasswordInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  validationConfig: PropTypes.object,
};

export default PasswordInput;
