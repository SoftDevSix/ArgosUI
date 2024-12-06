import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import DocumentationSideBar from "./DocumentationSidebar";

describe("DocumentationSideBar component", () => {
  const renderComponent = () => {
    return render(
      <BrowserRouter>
        <DocumentationSideBar />
      </BrowserRouter>
    );
  };

  it("should render all sections with correct titles and links", () => {
    renderComponent();

    const sections = [
      { title: "Overview", link: "/overview" },
      { title: "Installation of Agent", link: "/installation" },
      { title: "Setup Agent in Gradlew", link: "/gradle" },
      { title: "Setup Agent in Maven", link: "/maven" },
    ];

    sections.forEach((section) => {
      const linkElement = screen.getByText(section.title);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.closest("a")).toHaveAttribute("href", section.link);
    });
  });

  it("should render the sidebar container and list", () => {
    renderComponent();

    const sidebarContainer = screen.getByRole("list");
    expect(sidebarContainer).toBeInTheDocument();
  });

  it("should render the correct number of list items", () => {
    renderComponent();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(4);
  });
});
