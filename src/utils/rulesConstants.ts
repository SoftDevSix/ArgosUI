import { RulesConfig } from "../types/rulesInterfaces";
import { CodeRating, RulesTypes } from "../types/types";

export const ruleDefaults: Record<RulesTypes, RulesConfig> = {
  rules: {
    projectCoverageEnabled: true,
    projectCoverageThreshold: 0,
    codeRatingEnabled: true,
    codeRating: "D",
  },
};

export const rulesTypes: RulesTypes[] = ["rules"];

export const codeRatings: CodeRating[] = ["A", "B", "C", "D"];
