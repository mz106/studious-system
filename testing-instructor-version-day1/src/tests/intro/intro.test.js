import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { sum } from "../../intro/intro";
// import functions from src/intro/intro.js

describe("test", () => {
  it("should just pass", () => {
    const result = 1;
    expect(result).toBe(1);
  });
});

// Exercise 1: test for function returnArg

// Demo of test for function sum

// This test will only work with v1 sum
// describe("sum function - Implementation Tests", () => {
//   let reduceSpy;

//   beforeEach(() => {
//     // Spy on the Array.prototype.reduce method
//     reduceSpy = vi.spyOn(Array.prototype, "reduce");
//   });

//   afterEach(() => {
//     // Restore the original reduce method after each test
//     reduceSpy.mockRestore();
//   });

//   it("should use the reduce method to calculate the sum", () => {
//     // Call the sum function
//     sum(2, 3);

//     // Verify that reduce was called
//     expect(reduceSpy).toHaveBeenCalled();

//     // Optionally, check the arguments with which reduce was called
//     const reduceArgs = reduceSpy.mock.calls[0];
//     expect(reduceArgs[0]).toBeInstanceOf(Function); // Ensure the first argument is a function (callback)
//     expect(reduceArgs[1]).toBe(0); // Ensure the second argument is the initial value (0)
//   });
// });

// This test will work with both v1 sum and v2 sum
describe("sum function - Behavior Tests", () => {
  it("should return the correct sum of two positive numbers", () => {
    const result = sum(4, 5);
    expect(result).toBe(9);
  });
});

// Activity 1: Write test for the below functions

// subtract

// multiply
