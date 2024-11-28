import { CodeRatingType, RulesTypes, Rules } from "../types/types";

export const ruleDefaults: Record<RulesTypes, Rules> = {
  rules: {
    projectCoverageEnabled: true,
    projectCoverageThreshold: 0,
    codeRatingEnabled: true,
    codeRating: "D",
  },
};

export const rulesTypes: RulesTypes[] = ["rules"];

export const codeRatings: CodeRatingType[] = ["A", "B", "C", "D"];
