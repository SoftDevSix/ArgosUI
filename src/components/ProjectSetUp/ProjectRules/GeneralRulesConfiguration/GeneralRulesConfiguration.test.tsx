import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import GeneralRulesConfiguration from "./GeneralRulesConfiguration";
import { ruleDefaults, rulesTypes } from "../../../../utils/rulesConstants";
import { Rules, RulesTypes } from "../../../../types/types";
import React from "react";

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

  describe("handleSwitchChange Function", () => {
    it("should update the specific rule field when handleSwitchChange is called", () => {
      const initialMockRulesConfig: Record<RulesTypes, Rules> =
        rulesTypes.reduce(
          (acc, type) => {
            acc[type] = { ...ruleDefaults[type] };
            return acc;
          },
          {} as Record<RulesTypes, Rules>
        );

      const TestWrapper = () => {
        const [rulesConfig, setRulesConfig] = React.useState(
          initialMockRulesConfig
        );

        return (
          <GeneralRulesConfiguration
            rulesConfig={rulesConfig}
            setRulesConfig={setRulesConfig}
            handleGoBack={() => {}}
          />
        );
      };

      render(<TestWrapper />);
    });

    it("should update different rule fields independently", () => {
      const initialMockRulesConfig: Record<RulesTypes, Rules> =
        rulesTypes.reduce(
          (acc, type) => {
            acc[type] = { ...ruleDefaults[type] };
            return acc;
          },
          {} as Record<RulesTypes, Rules>
        );

      const TestWrapper = () => {
        const [rulesConfig, setRulesConfig] = React.useState(
          initialMockRulesConfig
        );

        return (
          <GeneralRulesConfiguration
            rulesConfig={rulesConfig}
            setRulesConfig={setRulesConfig}
            handleGoBack={() => {}}
          />
        );
      };

      render(<TestWrapper />);
    });
  });
});
