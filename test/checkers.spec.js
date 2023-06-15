// ! **************************************** CHECKERS TESTS ****************************************

import { checkRange, checkRegex, checkRole } from "../src/checkers";

global.alert = jest.fn();

/**
 * ? CHECK RANGE
 */
describe("checkRange()", () => {
  const msg = "Value out of range";

  test("should return true if value is within the specified range", () => {

    expect(checkRange(2, msg)).toBe(true);
    expect(checkRange(50, msg)).toBe(true);
    expect(checkRange("aA", msg)).toBe(true);
    expect(checkRange("abcdefghijklmnopqrstuvwxyz", msg)).toBe(true);
  });

  test("should return false if value is not within the specified range", () => {

    expect(checkRange(1, msg)).toBe(false);
    expect(checkRange(51, msg)).toBe(false);
    expect(checkRange("", msg)).toBe(false);
    expect(checkRange("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", msg)).toBe(false);
  });

  test("should display the correct message if value is not within the specified range", () => {
    const min = 2;
    const max = 50;

    checkRange(1, msg, min, max);
    expect(alert).toHaveBeenCalledWith(`${msg} ${min} & ${max}`);

    checkRange(51, msg, min, max);
    expect(alert).toHaveBeenCalledWith(`${msg} ${min} & ${max}`);

    checkRange("", msg, min, max);
    expect(alert).toHaveBeenCalledWith(`${msg} ${min} & ${max}`);

    checkRange("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", msg, min, max);
    expect(alert).toHaveBeenCalledWith(`${msg} ${min} & ${max}`);
  });
});

/**
 * ? CHECK REGEX
 */
describe("checkRegex()", () => {

  test("value matches regex", () => {
    const value = "1234";
    const regex = /^\d+$/;
    const msg = "Value must contain only digits";
    const result = checkRegex(value, msg, regex);

    expect(result).toBe(true);
  });

  test("value does not match regex", () => {
    const value = "12a4";
    const regex = /^\d+$/;
    const msg = "Value must contain only digits";
    const result = checkRegex(value, msg, regex);

    expect(alert).toHaveBeenCalledWith(msg);
    expect(result).toBe(false);
  });
});

/**
 * ? CHECK ROLE
 */
describe("checkRole()", () => {

  test("returns true if userRole is admin & role is admin", () => {
    expect(checkRole("admin", "admin")).toBe(true);
  });

  test("returns false if userRole is editor & role is admin", () => {
    expect(checkRole("editor", "admin")).toBe(false);
  });

  test("returns true if userRole is editor & role is editor", () => {
    expect(checkRole("editor", "editor")).toBe(true);
  });

  test("returns false if userRole is user & role is editor", () => {
    expect(checkRole("user", "editor")).toBe(false);
  });

  test("returns true if userRole is user & role is user", () => {
    expect(checkRole("user", "user")).toBe(true);
  });

  test("returns false if userRole is test & role is user", () => {
    expect(checkRole("test", "user")).toBe(false);
  });
});
