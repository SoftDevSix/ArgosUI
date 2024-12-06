import { describe, it, expect, vi, beforeEach } from "vitest";
import uploadProjectDataRules from "./RulesManagerService";
import { RulesConfig } from "../types/rulesInterfaces";

vi.mock("../utils/constants", () => ({
  COVERAGE_API_BASE_URL: "https://coverage-api",
}));

describe("uploadProjectDataRules", () => {
  const mockProjectData = {
    projectName: "Test Project",
    projectDescription: "This is a test project",
  };
  const mockRules: RulesConfig = {
    projectCoverageEnabled: true,
    projectCoverageThreshold: 80,
    codeRatingEnabled: true,
    codeRating: "A",
  };
  const mockProjectId = "12345";

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should return true for a successful request", async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
    } as Response);

    const result = await uploadProjectDataRules(
      mockProjectData,
      mockRules,
      mockProjectId
    );

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://coverage-api/rules/12345",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectName: "Test Project",
          description: "This is a test project",
          projectCoverage: true,
          requiredCoveragePercentage: 80,
          projectRating: true,
          requiredCodeRating: "A",
        }),
      })
    );
    expect(result).toBe(true);
  });

  it("should return false for an unsuccessful request", async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: false,
    } as Response);

    const result = await uploadProjectDataRules(
      mockProjectData,
      mockRules,
      mockProjectId
    );

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toBe(false);
  });

  it("should return false when an error occurs", async () => {
    global.fetch = vi.fn().mockRejectedValueOnce(new Error("Network error"));

    const result = await uploadProjectDataRules(
      mockProjectData,
      mockRules,
      mockProjectId
    );

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toBe(false);
  });
});
