import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ContentNavigator from "../../components/ContentNavigator/ContentNavigator";
import SetupAgentGradleDocumentation from "./SetUpAgentGradleDocumentation";

vi.mock("../../components/ContentNavigator/ContentNavigator", () => ({
  __esModule: true,
  default: vi.fn(() => <div data-testid="content-navigator"></div>),
}));

describe("SetupAgentGradleDocumentation component", () => {
  it("should render the ContentNavigator component", () => {
    render(
      <MemoryRouter>
        <SetupAgentGradleDocumentation />
      </MemoryRouter>
    );

    const contentNavigator = screen.getByTestId("content-navigator");
    expect(contentNavigator).toBeInTheDocument();
  });

  it("should pass the correct sections prop to ContentNavigator", () => {
    const expectedSections = [
      {
        id: "introduction",
        title: "Introduction",
        content: expect.any(Object),
      },
      {
        id: "step-1",
        title: "Add the Argos Agent",
        content: expect.any(Object),
      },
      {
        id: "step-2",
        title: "Configuration",
        content: expect.any(Object),
      },
      {
        id: "console-results",
        title: "Console Results",
        content: expect.any(Object),
      },
      {
        id: "json-results",
        title: "Json Results",
        content: expect.any(Object),
      },
    ];

    render(
      <MemoryRouter>
        <SetupAgentGradleDocumentation />
      </MemoryRouter>
    );

    expect(ContentNavigator).toHaveBeenCalledWith(
      { sections: expectedSections },
      {}
    );
  });
});
