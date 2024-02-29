import {
    VALID_PASS,
    INVALID_PASS_LENGTH,
    INVALID_PASS_UPPERCASE,
    INVALID_PASS_NUMBER,
    INVALID_PASS_SPECIAL,
    isValidPassword,
  } from "./validation";

test('Rejects invalid password (length)', () => {
    const check = isValidPassword('afsj');
    expect(check).toBe(INVALID_PASS_LENGTH);
});

test('Rejects invalid password (special) - Doesnt meet count', () => {
    const check = isValidPassword('abcdefgh9*II', {minSpecial: 3});
    expect(check).toBe(INVALID_PASS_SPECIAL);
});

test('Rejects invalid password (number) - Doesnt meet count', () => {
    const check = isValidPassword('abcdefgh9*II', {minNumbers: 3});
    expect(check).toBe(INVALID_PASS_NUMBER);
});

test('Rejects invalid password (uppercase) - Doesnt meet count', () => {
    const check = isValidPassword('abcdefgh9*II', {minUppercase: 3});
    expect(check).toBe(INVALID_PASS_UPPERCASE);
});

test('Accepts Valid password - Meets (special) count ', () => {
    const check = isValidPassword('abcdefgh912*%$III', {minSpecial: 2});
    expect(check).toBe(VALID_PASS);
});

test('Accepts Valid password - Meets (number) count ', () => {
    const check = isValidPassword('abcdefgh912*III', {minNumbers: 2});
    expect(check).toBe(VALID_PASS);
});

test('Accepts Valid password - Meets (uppercase) count ', () => {
    const check = isValidPassword('abcdefgh9*III', {minUppercase: 3});
    expect(check).toBe(VALID_PASS);
});

test('Accepts valid password', () => {
    const check = isValidPassword('afsJJgf245%!');
    expect(check).toBe(VALID_PASS);
});