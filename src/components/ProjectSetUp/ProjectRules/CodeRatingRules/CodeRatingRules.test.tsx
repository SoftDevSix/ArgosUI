import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CodeRatingRules from "./CodeRatingRules";
import { CodeRating, Rules, RulesTypes } from "../../../../types/types";

const mockRulesConfig: Record<RulesTypes, Rules> = {
  rules: {
    codeRatingEnabled: true,
    codeRating: "A",
    projectCoverageEnabled: false,
    projectCoverageThreshold: 0,
  },
};

describe("CodeRatingRules Component", () => {
  it("renders correctly with provided rulesConfig", () => {
    render(
      <CodeRatingRules
        rulesConfig={mockRulesConfig}
        setRulesConfig={vi.fn()}
        handleSwitchChange={vi.fn()}
      />
    );

    const switchLabel = screen.getByText("Code Rating");
    expect(switchLabel).toBeInTheDocument();

    const toggleButtons = screen.getAllByRole("button");
    expect(toggleButtons.length).toBe(4);

    const selectedButton = screen.getByRole("button", { name: "A" });
    expect(selectedButton).toHaveClass("Mui-selected");
  });

  it("disables the toggle buttons when codeRatingEnabled is false", () => {
    render(
      <CodeRatingRules
        rulesConfig={{
          rules: {
            codeRatingEnabled: false,
            codeRating: "A" as CodeRating,
            projectCoverageEnabled: false,
            projectCoverageThreshold: 0,
          },
        }}
        setRulesConfig={vi.fn()}
        handleSwitchChange={vi.fn()}
      />
    );

    const toggleButtons = screen.getAllByRole("button");
    toggleButtons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });

  it("calls handleSwitchChange when the switch is toggled", () => {
    const handleSwitchChange = vi.fn();

    render(
      <CodeRatingRules
        rulesConfig={mockRulesConfig}
        setRulesConfig={vi.fn()}
        handleSwitchChange={handleSwitchChange}
      />
    );

    const switchElement = screen.getByRole("checkbox");
    fireEvent.click(switchElement);

    expect(handleSwitchChange).toHaveBeenCalledWith("codeRatingEnabled", false);
  });

  it("updates codeRating when a toggle button is clicked", () => {
    const setRulesConfig = vi.fn();

    render(
      <CodeRatingRules
        rulesConfig={mockRulesConfig}
        setRulesConfig={setRulesConfig}
        handleSwitchChange={vi.fn()}
      />
    );

    const toggleButtonB = screen.getByRole("button", { name: "B" });
    screen.debug(toggleButtonB);
    fireEvent.click(toggleButtonB);

    expect(setRulesConfig).toHaveBeenCalledTimes(1);
  });

  it("does not update codeRating when the toggle button is clicked while codeRatingEnabled is false", () => {
    const setRulesConfig = vi.fn();

    render(
      <CodeRatingRules
        rulesConfig={{
          rules: {
            codeRatingEnabled: false,
            codeRating: "A" as CodeRating,
            projectCoverageEnabled: false,
            projectCoverageThreshold: 0,
          },
        }}
        setRulesConfig={setRulesConfig}
        handleSwitchChange={vi.fn()}
      />
    );

    const toggleButtonB = screen.getByRole("button", { name: "B" });
    fireEvent.click(toggleButtonB);

    expect(setRulesConfig).not.toHaveBeenCalled();
  });
});
