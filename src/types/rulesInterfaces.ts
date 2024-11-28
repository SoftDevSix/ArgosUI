import { CodeRatingType } from "./types";

export interface RulesConfig {
  projectCoverageEnabled: boolean;
  projectCoverageThreshold: number;
  codeRatingEnabled: boolean;
  codeRating: CodeRatingType;
}

export interface CoverageRules {
  coverageReviewRequired: boolean;
  minCoveragePercentage: boolean;
  rejectIfLower: boolean;
  coverageThreshold: number;
}

export interface BestPracticeRules {
  noHardcodedValues: boolean;
}

export interface CodeSmellsRules {
  excessiveParameters: boolean;
  magicNumbers: boolean;
  methodTooLong: number;
  noDuplicatedCode: boolean;
  maxMethodLength: number;
  maxParameters: number;
}

export interface CodeComplexityRules {
  cyclomaticComplexityLimit: boolean;
  maxMethodCountInClass: boolean;
  nestingDepthLimit: boolean;
  maxCyclomaticComplexity: number;
  maxMethodsInClass: number;
  maxNestingDepth: number;
}

export interface CodingStandardsRules {
  camelCaseNaming: boolean;
  pascalCaseForClasses: boolean;
  bracesOnSameLine: boolean;
}

export interface CodeQualityRules {
  maxLineLength: boolean;
  noUnusedImports: boolean;
  maxLineLengthLimit: number;
}
