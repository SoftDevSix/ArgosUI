import {
  BestPracticeRules,
  CodeComplexityRules,
  CodeQualityRules,
  CodeSmellsRules,
  CodingStandardsRules,
  CoverageRules,
  RulesConfig,
} from "./rulesInterfaces";

export type RulesTypes =
  | "rules"
  | "coverage"
  | "best analysis"
  | "code smells"
  | "code complexity"
  | "coding standards"
  | "code quality";

export type Rules =
  | RulesConfig
  | CoverageRules
  | BestPracticeRules
  | CodeSmellsRules
  | CodeComplexityRules
  | CodingStandardsRules
  | CodeQualityRules;

export type CodeRating = "A" | "B" | "C" | "D";
