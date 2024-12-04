import { CodeRatingType } from "./types";

export interface ProjectInfoData {
  projectName: string;
  projectDescription: string;
}

export interface MenuOption {
  name: string;
  icon: React.ReactNode;
  path: string;
}

export interface ProjectCoverageInterface {
  projectStatus: "PASSED" | "FAILED";
  coverageResult: {
    totalCoverage: number;
    requiredCoverage: number;
  };
  codeAnalysisResult: {
    actualRating: CodeRatingType;
    expectedRating: CodeRatingType;
  };
}

export interface FileCoverageInterface {
  fileName: string;
  pathFile: string;
  linesCode: number;
  methodCoverage: number;
  coveragePercentage: number;
  uncoveredLines: number[];
}
