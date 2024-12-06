import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import ContentNavigator from "../../components/ContentNavigator/ContentNavigator";
import InstallationPage from "./Installation";

vi.mock("../../components/ContentNavigator/ContentNavigator", () => ({
  __esModule: true,
  default: vi.fn(() => <div data-testid="content-navigator"></div>),
}));

vi.mock("../../components/DocumentationSideBar", () => ({
  __esModule: true,
  default: vi.fn(() => <div data-testid="documentation-sidebar"></div>),
}));

describe("InstallationPage component", () => {
  it("should render the DocumentationSideBar component", () => {
    render(<InstallationPage />);

    const documentationSidebar = screen.getByTestId("documentation-sidebar");
    expect(documentationSidebar).toBeInTheDocument();
  });

  it("should render the ContentNavigator component", () => {
    render(<InstallationPage />);

    const contentNavigator = screen.getByTestId("content-navigator");
    expect(contentNavigator).toBeInTheDocument();
  });

  it("should pass the correct sections prop to ContentNavigator", () => {
    const expectedSections = [
      {
        id: "download",
        title: "Download",
        content: expect.any(Object),
      },
      {
        id: "move",
        title: "Move the File",
        content: expect.any(Object),
      },
      {
        id: "extructure",
        title: "Structure Example",
        content: expect.any(Object),
      },
    ];

    render(<InstallationPage />);

    expect(ContentNavigator).toHaveBeenCalledWith(
      { sections: expectedSections },
      {}
    );
  });
});
