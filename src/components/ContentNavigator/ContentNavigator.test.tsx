import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ContentNavigator from "./ContentNavigator";

describe("ContentNavigator component", () => {
  const mockSections = [
    { id: "section1", title: "Introduction", content: <div>Content 1</div> },
    { id: "section2", title: "Features", content: <div>Content 2</div> },
    { id: "section3", title: "Conclusion", content: <div>Content 3</div> },
  ];

  const renderComponent = (props = {}) => {
    return render(<ContentNavigator sections={mockSections} {...props} />);
  };

  it("should render the Contentbar component", () => {
    renderComponent();
    const contentBar = screen.getByText("Contents");
    expect(contentBar).toBeInTheDocument();
  });

  it("should render the MainContent component", () => {
    renderComponent();
    mockSections.forEach((section) => {
      const sectionContent = screen.getByText(section.content.props.children);
      expect(sectionContent).toBeInTheDocument();
    });
  });

  it("should handle empty sections gracefully", () => {
    render(<ContentNavigator sections={[]} />);
    const listItems = screen.queryAllByRole("listitem");
    expect(listItems.length).toBe(0);
  });
});
