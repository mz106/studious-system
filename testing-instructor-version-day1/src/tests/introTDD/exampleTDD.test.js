import { describe, it, expect } from "vitest";

import { exampleTDD } from "../../src/introTDD/exampleTDD";

// this is pre-written for learners

describe("exampleTDD", () => {
  it("should return string invalid if arg is NaN", () => {
    const result = exampleTDD("1");

    expect(result).toMatch(/invalid/i);
  });

  it("should return the number given arg", () => {
    const result = exampleTDD(1);

    expect(result).toBe(1);
  });
});
