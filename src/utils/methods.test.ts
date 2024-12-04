import { describe, it, expect } from "vitest";
import { splitUntilSecondSlash } from "./methods";

describe("splitUntilSecondSlash Utility Function", () => {
  it("should return the same string if there are fewer than two slashes", () => {
    const input = "path/to/file";
    const result = splitUntilSecondSlash(input);

    expect(result).toBe("file");
  });

  it("should return the string after the second slash", () => {
    const input = "path/to/file/another/path/to/file";
    const result = splitUntilSecondSlash(input);

    expect(result).toBe("file/another/path/to/file");
  });

  it("should return the string if there is exactly one slash", () => {
    const input = "path/to";
    const result = splitUntilSecondSlash(input);

    expect(result).toBe(input);
  });

  it("should return the string as is when no slashes are present", () => {
    const input = "no-slashes-at-all";
    const result = splitUntilSecondSlash(input);

    expect(result).toBe(input);
  });

  it("should handle edge case with empty string", () => {
    const input = "";
    const result = splitUntilSecondSlash(input);

    expect(result).toBe(input);
  });
});
