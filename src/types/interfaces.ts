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
  coverage: {
    actualCoverage: number;
    requiredCoverage: number;
  };
  rating: {
    actualRating: CodeRatingType;
    requiredCodeRating: CodeRatingType;
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
