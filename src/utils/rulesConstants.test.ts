import { describe, it, expect } from "vitest";
import { ruleDefaults, rulesTypes, codeRatings } from "./rulesConstants";

describe("rulesConstants", () => {
  it("should use ruleDefaults in a functional way", () => {
    const { projectCoverageEnabled, codeRating } = ruleDefaults.rules;

    expect(projectCoverageEnabled).toBe(true);
    expect(codeRating).toBe("D");
  });

  it("should iterate over rulesTypes", () => {
    rulesTypes.forEach((ruleType) => {
      expect(ruleType).toBe("rules");
    });
  });

  it("should process codeRatings", () => {
    const ratingMessage = codeRatings.map(
      (rating) => `Code is rated ${rating}`
    );
    expect(ratingMessage).toContain("Code is rated A");
  });
});
