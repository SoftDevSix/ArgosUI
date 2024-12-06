import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ContentNavigator from "../../components/ContentNavigator/ContentNavigator";
import OverviewDocumentationPage from "./OverviewDocumentation";

vi.mock("../../components/ContentNavigator/ContentNavigator", () => ({
  __esModule: true,
  default: vi.fn(() => <div data-testid="content-navigator"></div>),
}));

describe("OverviewDocumentationPage component", () => {
  it("should render the ContentNavigator component", () => {
    render(
      <MemoryRouter>
        <OverviewDocumentationPage />
      </MemoryRouter>
    );

    const contentNavigator = screen.getByTestId("content-navigator");
    expect(contentNavigator).toBeInTheDocument();
  });

  it("should pass the correct sections prop to ContentNavigator", () => {
    const expectedSections = [
      {
        id: "overview",
        title: "Agent Description",
        content: expect.any(Object),
      },
      {
        id: "requirements",
        title: "Requirements",
        content: expect.any(Object),
      },
      {
        id: "limitations",
        title: "Limitations",
        content: expect.any(Object),
      },
    ];

    render(
      <MemoryRouter>
        <OverviewDocumentationPage />
      </MemoryRouter>
    );

    expect(ContentNavigator).toHaveBeenCalledWith(
      { sections: expectedSections },
      {}
    );
  });
});
