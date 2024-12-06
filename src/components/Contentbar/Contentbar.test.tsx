import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Contentbar from "./Contentbar";

describe("Contentbar component", () => {
  const mockSections = [
    { id: "section1", title: "Introduction" },
    { id: "section2", title: "Features" },
    { id: "section3", title: "Conclusion" },
  ];

  const mockOnScrollToSection = vi.fn();

  const renderComponent = (props = {}) => {
    return render(
      <Contentbar
        sections={mockSections}
        onScrollToSection={mockOnScrollToSection}
        {...props}
      />
    );
  };

  it("should render the title 'Contents'", () => {
    renderComponent();
    const title = screen.getByText("Contents");
    expect(title).toBeInTheDocument();
  });

  it("should render all sections passed as props", () => {
    renderComponent();
    mockSections.forEach((section) => {
      const listItem = screen.getByText(section.title);
      expect(listItem).toBeInTheDocument();
    });
  });

  it("should call onScrollToSection when a section is clicked", () => {
    renderComponent();
    const firstSectionButton = screen.getByText(mockSections[0].title);
    fireEvent.click(firstSectionButton);
    expect(mockOnScrollToSection).toHaveBeenCalledWith(mockSections[0].id);
  });

  it("should render the list with the correct number of items", () => {
    renderComponent();
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(mockSections.length);
  });

  it("should not fail if sections prop is empty", () => {
    render(<Contentbar sections={[]} onScrollToSection={mockOnScrollToSection} />);
    const listItems = screen.queryAllByRole("listitem");
    expect(listItems.length).toBe(0);
  });
});
