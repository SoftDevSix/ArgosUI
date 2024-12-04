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
      `${COVERAGE_API_BASE_URL}/project/${projectId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectName: projectData.projectName,
          projectDescription: projectData.projectDescription,
          projectCoverage: rules.projectCoverageEnabled,
          minimumCoverage: rules.projectCoverageThreshold,
          codeRating: rules.codeRatingEnabled,
          minimumRating: rules.codeRating,
        }),
      }
    );

    return response.ok;
  } catch {
    return false;
  }
};

export default uploadProjectDataRules;
