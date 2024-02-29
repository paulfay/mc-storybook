export const INVALID_PASS_LENGTH = 0;
export const INVALID_PASS_UPPERCASE = 1;
export const INVALID_PASS_NUMBER = 2;
export const INVALID_PASS_SPECIAL = 3;
export const VALID_PASS = 4;

export function isValidPassword(pass, validationOverrides = {}) {
  const config = {
    minLength: 8,
    minUppercase: 1,
    minNumbers: 1,
    minSpecial: 1,
    ...validationOverrides,
  };

  const UPPERCASE_REGEX = new RegExp(/[^A-Z]/g);
  const NUMBER_REGEX = new RegExp(/[^0-9]/g);
  const SPECIAL_CHARS_REGEX = new RegExp(/[^!@#$%^&*()_+\-=\[\]{}<>;:.,'"\\|\/?]/g,);

  if (config.minLength && pass.length < config.minLength) {
    return INVALID_PASS_LENGTH;
  }
  if (config.minUppercase) {
    if (pass.replace(UPPERCASE_REGEX, '').length < config.minUppercase) {
      return INVALID_PASS_UPPERCASE;
    }
  }
  if (config.minNumbers) {
    if (pass.replace(NUMBER_REGEX,'').length < config.minNumbers) {
      return INVALID_PASS_NUMBER;
    }
  }
  if (config.minSpecial) {
    if (pass.replace(SPECIAL_CHARS_REGEX, '').length < config.minSpecial) {
      return INVALID_PASS_SPECIAL;
    }
  }
  return VALID_PASS;
}
