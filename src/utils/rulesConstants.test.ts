import { describe, it, expect } from "vitest";
import { ruleDefaults, rulesTypes, codeRatings } from "./rulesConstants";

describe("rulesConstants", () => {
  it("should define default rules with correct structure", () => {
    expect(ruleDefaults).toEqual({
      rules: {
        projectCoverageEnabled: true,
        projectCoverageThreshold: 0,
        codeRatingEnabled: true,
        codeRating: "D",
      },
    });

    const defaultRules = ruleDefaults.rules;
    expect(defaultRules.projectCoverageEnabled).toBe(true);
    expect(defaultRules.projectCoverageThreshold).toBe(0);
    expect(defaultRules.codeRatingEnabled).toBe(true);
    expect(defaultRules.codeRating).toBe("D");
  });

  it("should define correct rulesTypes", () => {
    expect(rulesTypes).toEqual(["rules"]);
    expect(rulesTypes).toHaveLength(1);
  });

  it("should define correct codeRatings", () => {
    expect(codeRatings).toEqual(["A", "B", "C", "D"]);
    expect(codeRatings).toHaveLength(4);
    expect(codeRatings).toContain("A");
    expect(codeRatings).toContain("D");
  });
});
