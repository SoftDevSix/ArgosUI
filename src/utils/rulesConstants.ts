import { CodeRating, Rules, RulesTypes } from "../types/types";

export const ruleDefaults: Record<RulesTypes, Rules> = {
  rules: {
    projectCoverageEnabled: true,
    projectCoverageThreshold: 0,
    codeRatingEnabled: true,
    codeRating: "D",
  },
  coverage: {
    coverageReviewRequired: false,
    minCoveragePercentage: false,
    rejectIfLower: false,
    coverageThreshold: 80,
  },
  "best practices": {
    noHardcodedValues: false,
  },
  "code smells": {
    excessiveParameters: false,
    magicNumbers: false,
    methodTooLong: 100,
    noDuplicatedCode: false,
    maxMethodLength: 50,
    maxParameters: 5,
  },
  "code complexity": {
    cyclomaticComplexityLimit: false,
    maxMethodCountInClass: false,
    nestingDepthLimit: false,
    maxCyclomaticComplexity: 10,
    maxMethodsInClass: 10,
    maxNestingDepth: 3,
  },
  "coding standards": {
    camelCaseNaming: true,
    pascalCaseForClasses: true,
    bracesOnSameLine: false,
  },
  "code quality": {
    maxLineLength: false,
    noUnusedImports: false,
    maxLineLengthLimit: 120,
  },
};

export const rulesTypes: RulesTypes[] = [
  "coverage",
  "best practices",
  "code smells",
  "code complexity",
  "code quality",
  "coding standards",
];

export const codeRatings: CodeRating[] = ["A", "B", "C", "D"];
