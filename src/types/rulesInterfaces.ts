import { CodeRatingType } from "./types";

export interface RulesConfig {
  projectCoverageEnabled: boolean;
  projectCoverageThreshold: number;
  codeRatingEnabled: boolean;
  codeRating: CodeRatingType;
}
