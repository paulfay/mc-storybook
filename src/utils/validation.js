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

  const UPPERCASE_REGEX = new RegExp(/.*[A-Z]/);
  const NUMBER_REGEX = new RegExp(/.*\d/);
  const SPECIAL_CHARS_REGEX = new RegExp(
    /.*[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/,
  );
  console.log('checking', pass);
  if (config.minLength && pass.length < config.minLength) {
    return INVALID_PASS_LENGTH;
  }
  if (config.minUppercase && !pass.match(UPPERCASE_REGEX)) {
    return INVALID_PASS_UPPERCASE;
  }
  if (config.minNumbers && !pass.match(NUMBER_REGEX)) {
    return INVALID_PASS_NUMBER;
  }
  if (config.minSpecial && !pass.match(SPECIAL_CHARS_REGEX)) {
    return INVALID_PASS_SPECIAL;
  }
  return VALID_PASS;
}
