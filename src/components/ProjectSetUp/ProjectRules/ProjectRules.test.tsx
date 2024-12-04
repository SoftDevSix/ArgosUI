import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProjectRules from "./ProjectRules";
import { Rules, RulesTypes } from "../../../types/types";

describe("ProjectRules Component", () => {
  const mockRules: Record<RulesTypes, Rules> = {
    rules: {
      projectCoverageEnabled: true,
      projectCoverageThreshold: 80,
      codeRatingEnabled: true,
      codeRating: "A",
    },
  };

  const setMockRules = vi.fn();

  it("renders RulesTabs when ruleTab is null", () => {
    render(
      <ProjectRules rulesConfig={mockRules} setRulesConfig={setMockRules} />
    );

    const rulesTabs = screen.getByText(/Rules/i);
    expect(rulesTabs).toBeInTheDocument();
  });

  it("renders project coverage when rules is clicked", () => {
    render(
      <ProjectRules rulesConfig={mockRules} setRulesConfig={setMockRules} />
    );

    const rulesTabs = screen.getByText(/Rules/i);
    fireEvent.click(rulesTabs);

    const generalRulesConfig = screen.getByText(/Project Coverage/i);
    expect(generalRulesConfig).toBeInTheDocument();
  });

  it("renders code rating when rules is clicked", () => {
    render(
      <ProjectRules rulesConfig={mockRules} setRulesConfig={setMockRules} />
    );

    const rulesTabs = screen.getByText(/Rules/i);
    fireEvent.click(rulesTabs);

    const generalRulesConfig = screen.getByText(/Code rating/i);
    expect(generalRulesConfig).toBeInTheDocument();
  });
});
