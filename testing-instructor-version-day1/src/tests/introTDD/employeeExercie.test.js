import { describe, it, expect, beforeEach } from "vitest";
import { checkHolErrors } from "../../src/introTDD/employeeExercise";
import { employeesObj } from "../../data";

describe("checkHolErrors", () => {
  let inputObj;
  beforeEach(() => {
    inputObj = employeesObj;
  });

  it("should return string invalid if not correct input", () => {
    const result1 = checkHolErrors([], "1");
    const result2 = checkHolErrors({}, 1);

    expect(result1).toMatch(/invalid/i);
    expect(result2).toMatch(/invalid/i);
  });

  it("should return an object with employeesArr and editsArr keys", () => {
    const result = checkHolErrors(inputObj, 20);

    expect(result).not.toBeNull();
    expect(typeof result).toBe("object");

    expect(result).toHaveProperty("employeesArr");
    expect(result).toHaveProperty("editsArr");

    expect(Array.isArray(result["employeesArr"])).toBe(true);
    expect(Array.isArray(result["editsArr"])).toBe(true);
  });

  it("should return an obj with arr result.employeesArr of the same length as the input array", () => {
    const result = checkHolErrors(inputObj, 20);
    expect(result.employeesArr.length === inputObj.employeesArr.length).toBe(
      true
    );
  });

  it("should increase or decrease hols_remaining to match entitlement", () => {
    const result = checkHolErrors(inputObj, 20);

    const difference1 =
      result.employeesArr[1].hols_remaining -
      inputObj.employeesArr[1].hols_remaining;
    const difference2 =
      result.employeesArr[2].hols_remaining -
      inputObj.employeesArr[2].hols_remaining;

    expect(difference1).toEqual(5);
    expect(difference2).toEqual(-5);

    expect(result.employeesArr[0].hols_remaining).toEqual(20);
    expect(result.employeesArr[1].hols_remaining).toEqual(20);
    expect(result.employeesArr[2].hols_remaining).toEqual(20);
  });

  it("should set isEdit key in arr objects to true ", () => {
    const result = checkHolErrors(inputObj, 20);

    expect(result.employeesArr[0].isEdit).toBeUndefined();
    expect(result.employeesArr[1].isEdit).toBe(true);
    expect(result.employeesArr[2].isEdit).toBe(true);
  });

  it("returns an empty array for editsArr if no hols_remaining changed", () => {
    const result = checkHolErrors(
      {
        employeesArr: [
          {
            id: 1,
            name: "michael",
            role: "instructor",
            hols_remaining: 20,
          },
        ],
      },
      20
    );

    expect(result.editsArr.length).toBe(0);
  });
});
