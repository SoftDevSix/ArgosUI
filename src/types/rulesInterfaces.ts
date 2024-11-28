import { CodeRating } from "./types";

export interface RulesConfig {
  projectCoverageEnabled: boolean;
  projectCoverageThreshold: number;
  codeRatingEnabled: boolean;
  codeRating: CodeRating;
}
