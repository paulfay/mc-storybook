import {
    VALID_PASS,
    INVALID_PASS_LENGTH,
    INVALID_PASS_UPPERCASE,
    INVALID_PASS_NUMBER,
    INVALID_PASS_SPECIAL,
    isValidPassword,
  } from "./validation";

test('Accepts valid password', () => {
    const check = isValidPassword('afsJJgf245%!');
    expect(check).toBe(VALID_PASS);
});

test('Rejects invalid password (special)', () => {
    const check = isValidPassword('afsJJgf245');
    expect(check).toBe(INVALID_PASS_SPECIAL);
});

test('Rejects invalid password (number)', () => {
    const check = isValidPassword('afsJJgfgr');
    expect(check).toBe(INVALID_PASS_NUMBER);
});

test('Rejects invalid password (upper)', () => {
    const check = isValidPassword('afsjjgfgr');
    expect(check).toBe(INVALID_PASS_UPPERCASE);
});

test('Rejects invalid password (length)', () => {
    const check = isValidPassword('afsj');
    expect(check).toBe(INVALID_PASS_LENGTH);
});
