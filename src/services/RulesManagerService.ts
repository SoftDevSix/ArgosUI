import { ProjectInfoData } from "../types/interfaces";
import { RulesConfig } from "../types/rulesInterfaces";
import { COVERAGE_API_BASE_URL } from "../utils/constants";

const uploadProjectDataRules = async (
  projectData: ProjectInfoData,
  rules: RulesConfig,
  projectId: string
): Promise<boolean> => {
  try {
    const response = await fetch(
      `${COVERAGE_API_BASE_URL}/rules/${projectId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectName: projectData.projectName,
          description: projectData.projectDescription,
          projectCoverage: rules.projectCoverageEnabled,
          requiredCoveragePercentage: rules.projectCoverageThreshold,
          projectRating: rules.codeRatingEnabled,
          requiredCodeRating: rules.codeRating,
        }),
      }
    );

    return response.ok;
  } catch {
    return false;
  }
};

export default uploadProjectDataRules;
