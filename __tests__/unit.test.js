// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Test Set 1: Phone Numbers Validation
test('Phone Number 1 is Correct', () => {
    expect(functions.isPhoneNumber('111-222-3333')).toBe(true);
});

test('Phone Number 2 is Correct', () => {
    expect(functions.isPhoneNumber('444-555-6666')).toBe(true);
});

test('Phone Number 3 is Incorrect', () => {
    expect(functions.isPhoneNumber('000')).toBe(false);
});

test('Phone Number 4 is Incorrect', () => {
    expect(functions.isPhoneNumber('0010-000-000')).toBe(false);
});

// Test Set 2: Email Validation
test('Email 1 is Correct', () => {
expect(functions.isEmail('psanand@ucsd.edu')).toBe(true);
});
test('Email 2 is Correct', () => {
    expect(functions.isEmail('prisha@gmail.com')).toBe(true);
});
test('Email 3 is Incorrect', () => {
    expect(functions.isEmail('prisha@com')).toBe(false);
});
test('Email 4 is Incorrect', () => {
    expect(functions.isEmail('RandomFakeEmail')).toBe(false);
});

// Test Set 3: Password Validation
test('Strong Password is Correct', () => {
expect(functions.isStrongPassword('abc123')).toBe(true);
});
test('Strong Password 2 is Correct', () => {
    expect(functions.isStrongPassword('a111')).toBe(true);
});
test('Strong Password 3 is Incorrect', () => {
    expect(functions.isStrongPassword('1a')).toBe(false);
});
test('Strong Password 4 is Incorrect', () => {
    expect(functions.isStrongPassword('a12345678910111213141516551')).toBe(false);
});

// Test Set 4: Date Validation
test('Date 1 is Correct', () => {
    expect(functions.isDate('05/25/2023')).toBe(true);
});
test('Date 2 is Correct', () => {
    expect(functions.isDate('2/2/2222')).toBe(true);
});
test('Date 3 is Incorrect', () => {
    expect(functions.isDate('1/1/22')).toBe(false);
});
test('Date 4 is Incorrect', () => {
    expect(functions.isDate('01/01')).toBe(false);
});

// Test Set 5: HexColor Validation
test('HexColor 1 is Correct', () => {
    expect(functions.isHexColor('#bbb')).toBe(true);
});
test('HexColor 2 is Correct', () => {
    expect(functions.isHexColor('0CA')).toBe(true);
});
test('HexColor 1 is Incorrect', () => {
    expect(functions.isHexColor('2132')).toBe(false);
});
test('HexColor 1 is Incorrect', () => {
    expect(functions.isHexColor('#bbbb')).toBe(false);
});