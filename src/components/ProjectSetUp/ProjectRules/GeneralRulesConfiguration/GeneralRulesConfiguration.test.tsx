import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import GeneralRulesConfiguration from "./GeneralRulesConfiguration";
import { ruleDefaults, rulesTypes } from "../../../../utils/rulesConstants";
import { Rules, RulesTypes } from "../../../../types/types";

const mockRulesConfig: Record<RulesTypes, Rules> = rulesTypes.reduce(
  (acc, type) => {
    acc[type] = { ...ruleDefaults[type] };
    return acc;
  },
  {} as Record<RulesTypes, Rules>
);

describe("GeneralRulesConfiguration Component", () => {
  it("renders the back button and triggers handleGoBack when clicked", () => {
    const handleGoBack = vi.fn();
    render(
      <GeneralRulesConfiguration
        rulesConfig={mockRulesConfig}
        setRulesConfig={vi.fn()}
        handleGoBack={handleGoBack}
      />
    );

    const backButton = screen.getByLabelText("general-rules-back");
    fireEvent.click(backButton);

    expect(handleGoBack).toHaveBeenCalled();
  });

  it("renders ProjectCoverageRules and CodeRatingRules components", () => {
    render(
      <GeneralRulesConfiguration
        rulesConfig={mockRulesConfig}
        setRulesConfig={vi.fn()}
        handleGoBack={vi.fn()}
      />
    );

    expect(screen.getByText(/Project Coverage/i)).toBeInTheDocument();
    expect(screen.getByText(/Code Rating/i)).toBeInTheDocument();
  });
});
