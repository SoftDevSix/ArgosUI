import { render, screen, fireEvent } from "@testing-library/react";
import RulesTabs from "./RulesTabs";
import { rulesTypes } from "../../../../utils/rulesConstants";
import { describe, expect, it, vi } from "vitest";

describe("RulesTabs", () => {
  const setRuleTab = vi.fn();

  it("should render the correct number of tabs", () => {
    render(<RulesTabs setRuleTab={setRuleTab} />);

    const tabElements = screen.getAllByRole("button");
    expect(tabElements.length).toBe(rulesTypes.length);
  });

  it("should render each tab with the correct name", () => {
    render(<RulesTabs setRuleTab={setRuleTab} />);

    rulesTypes.forEach((rule) => {
      expect(screen.getByText(rule)).toBeInTheDocument();
    });
  });

  it("should call setRuleTab when a tab is clicked", () => {
    render(<RulesTabs setRuleTab={setRuleTab} />);

    const firstTab = screen.getByText(rulesTypes[0]);
    fireEvent.click(firstTab);

    expect(setRuleTab).toHaveBeenCalledWith(rulesTypes[0]);
  });

  it("should call setRuleTab with the correct rule when any tab is clicked", () => {
    render(<RulesTabs setRuleTab={setRuleTab} />);

    const specificTab = screen.getByText(rulesTypes[0]);
    fireEvent.click(specificTab);

    expect(setRuleTab).toHaveBeenCalledWith(rulesTypes[0]);
  });
});
