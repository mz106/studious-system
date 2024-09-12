import { describe, it, expect } from "vitest";

import { removeSongId } from "../../src/introTDD/exampleSongs";

// behaviors to test:

// 1. if not an object or not a number/string number (assume)
// 2. if favSongs does not exist as a key
// 3. if favSongs array is empty
// 4. if song id is not in favSongs
// 5. successfully remove song id and retain the length of array - 1

describe("removeSongId", () => {
  it("should return string invalid if not correct input", () => {
    const result1 = removeSongId("hi", 1);
    const result2 = removeSongId({}, "1");

    expect(result1).toMatch(/invalid/i);
    expect(result2).toMatch(/invalid/i);
  });

  it("should return string favSongs does not exist if key favSongs not in userObj", () => {
    const userObj = { name: "michael" };
    const result = removeSongId(userObj, 1);

    expect(result).toMatch(/favSongs does not exist/i);
  });

  it("should return string favSongs array is empty if favSongs.length < 1", () => {
    const userObj = { name: "michael", favSongs: [] };
    const result = removeSongId(userObj, 1);

    expect(result).toMatch(/favSongs array is empty/i);
  });

  it("should return string song id not found if the songId is not found in favSongs", () => {
    const userObj = { name: "michael", favSongs: [1, 2, 3] };
    const result = removeSongId(userObj, 4);

    expect(result).toMatch(/song id not found/i);
  });

  it("should return obj with songId removed from favSongs", () => {
    const userObj = { name: "michael", favSongs: [1, 2, 3] };
    const result = removeSongId(userObj, 1);

    expect(result).toMatchObject({ name: "michael", favSongs: [2, 3] });
    // expect(result).toBe(userObj);
  });
});
