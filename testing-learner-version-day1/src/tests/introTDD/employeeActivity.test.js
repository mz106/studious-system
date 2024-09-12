// Activity 2.1

// Behaviours to test;

// 1. Input Validation: The function should correctly identify and handle invalid inputs.
// If the inputs do not match the expected types or structure, the function should return
// a string indicating an error (e.g., "invalid"). This ensures that the function can
// handle unexpected or malformed inputs gracefully.

// 2. Output Format: The function should return an object with specific keys, employeesArr
// and editsArr. These keys should be associated with arrays. This test checks that the
// function's output is structured correctly, ensuring that the expected data containers
// are present.

// 3. Array Length Consistency: The employeesArr in the returned object should have the
// same number of elements as the input employeesArr. This test ensures that the function
// does not add or remove employees during processing.

// 4. Holiday Entitlement Adjustment: The function should correctly adjust each employee's
// hols_remaining to match their holiday entitlement. This test verifies that the function
// can both increase and decrease the holiday balance as needed.

// 5. Edit Tracking: The function should correctly set the isEdit key in the objects within
// employeesArr. If an employee's hols_remaining was modified, the isEdit key should be set to
// true. This test ensures that the function accurately tracks which employees were edited.

// 6. No Changes Detected: If no changes were made to hols_remaining, the editsArr should be empty.
// This test checks that the function correctly identifies when no modifications are necessary
// and returns an empty array in such cases.

import { describe, it, beforeEach } from "vitest";

import { checkHolErrors } from "../../introTDD/employeeActivity";

describe("checkHolErrors", () => {
  let inputObj;
  beforeEach(() => {
    inputObj = employeesObj;
  });

  it("should return string invalid if not correct input", () => {});

  it("should return an object with employeesArr and editsArr keys", () => {});

  it("should return an obj with arr result.employeesArr of the same length as the input array", () => {});

  it("should increase or decrease hols_remaining to match entitlement", () => {});

  it("should set isEdit key in arr objects to true ", () => {});

  it("returns an empty array for editsArr if no hols_remaining changed", () => {});
});
