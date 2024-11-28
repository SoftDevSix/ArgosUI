import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProjectCoverageRules from "./ProjectCoverageRules";
import { Rules, RulesTypes } from "../../../../types/types";

const mockRulesConfig: Record<RulesTypes, Rules> = {
  rules: {
    codeRatingEnabled: true,
    codeRating: "A",
    projectCoverageEnabled: true,
    projectCoverageThreshold: 80,
  },
};

describe("ProjectCoverageRules Component", () => {
  it("renders correctly with provided rulesConfig", () => {
    render(
      <ProjectCoverageRules
        rulesConfig={mockRulesConfig}
        setRulesConfig={vi.fn()}
        handleSwitchChange={vi.fn()}
      />
    );

    const switchLabel = screen.getByText("Project Coverage");
    expect(switchLabel).toBeInTheDocument();

    const thresholdValue = screen.getByDisplayValue("80");
    expect(thresholdValue).toBeInTheDocument();
    const percentageLabel = screen.getByText("%");
    expect(percentageLabel).toBeInTheDocument();
  });

  it("disables the threshold input when projectCoverageEnabled is false", () => {
    render(
      <ProjectCoverageRules
        rulesConfig={{
          rules: {
            codeRatingEnabled: true,
            codeRating: "A",
            projectCoverageEnabled: false,
            projectCoverageThreshold: 80,
          },
        }}
        setRulesConfig={vi.fn()}
        handleSwitchChange={vi.fn()}
      />
    );

    const inputField = screen.getByDisplayValue("80");
    expect(inputField).toBeDisabled();
  });

  it("calls handleSwitchChange when the switch is toggled", () => {
    const handleSwitchChange = vi.fn();

    render(
      <ProjectCoverageRules
        rulesConfig={mockRulesConfig}
        setRulesConfig={vi.fn()}
        handleSwitchChange={handleSwitchChange}
      />
    );

    const switchElement = screen.getByRole("checkbox");
    fireEvent.click(switchElement);

    expect(handleSwitchChange).toHaveBeenCalledWith(
      "projectCoverageEnabled",
      false
    );
  });

  it("updates projectCoverageThreshold when the input value changes", () => {
    const setRulesConfig = vi.fn();

    render(
      <ProjectCoverageRules
        rulesConfig={mockRulesConfig}
        setRulesConfig={setRulesConfig}
        handleSwitchChange={vi.fn()}
      />
    );

    const inputField = screen.getByDisplayValue("80");
    fireEvent.change(inputField, { target: { value: "90" } });

    expect(setRulesConfig).toHaveBeenCalledOnce();
  });

  it("does not update projectCoverageThreshold if the value is out of range", () => {
    const setRulesConfig = vi.fn();

    render(
      <ProjectCoverageRules
        rulesConfig={mockRulesConfig}
        setRulesConfig={setRulesConfig}
        handleSwitchChange={vi.fn()}
      />
    );

    const inputField = screen.getByDisplayValue("80");
    fireEvent.change(inputField, { target: { value: "110" } });

    expect(setRulesConfig).not.toHaveBeenCalled();
  });
});
