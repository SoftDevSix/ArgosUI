import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProjectRules from "./ProjectRules";

describe("ProjectRules Component", () => {
  it("renders RulesTabs when ruleTab is null", () => {
    render(<ProjectRules />);

    const rulesTabs = screen.getByText(/Rules/i);
    expect(rulesTabs).toBeInTheDocument();
  });

  it("renders project coverage when rules is clicked", () => {
    render(<ProjectRules />);

    const rulesTabs = screen.getByText(/Rules/i);
    fireEvent.click(rulesTabs);

    const generalRulesConfig = screen.getByText(/Project Coverage/i);
    expect(generalRulesConfig).toBeInTheDocument();
  });

  it("renders code rating when rules is clicked", () => {
    render(<ProjectRules />);

    const rulesTabs = screen.getByText(/Rules/i);
    fireEvent.click(rulesTabs);

    const generalRulesConfig = screen.getByText(/Code rating/i);
    expect(generalRulesConfig).toBeInTheDocument();
  });
});
