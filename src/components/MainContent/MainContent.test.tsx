import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MainContent from "./MainContent";

describe("MainContent component", () => {
  const mockSections = [
    { id: "section1", title: "Section 1", content: <p>Content 1</p> },
    { id: "section2", title: "Section 2", content: <p>Content 2</p> },
    { id: "section3", title: "Section 3", content: <p>Content 3</p> },
  ];

  const mockRefs = { current: {} } as React.MutableRefObject<{
    [key: string]: HTMLDivElement | null;
  }>;

  const renderComponent = () => {
    return render(<MainContent sections={mockSections} contentRefs={mockRefs} />);
  };

  it("should render all sections with their titles and content", () => {
    renderComponent();

    mockSections.forEach(({ title, content }) => {
      // Verifica que el título está en el documento
      const sectionTitle = screen.getByText(title);
      expect(sectionTitle).toBeInTheDocument();

      // Verifica que el contenido está en el documento
      const sectionContent = screen.getByText((content as any).props.children);
      expect(sectionContent).toBeInTheDocument();
    });
  });

  it("should set refs correctly for each section", () => {
    renderComponent();

    mockSections.forEach(({ id }) => {
      const sectionElement = document.getElementById(id);
      expect(mockRefs.current[id]).toBe(sectionElement); // Verifica que el ref se configura correctamente
    });
  });

  it("should handle an empty sections array gracefully", () => {
    render(<MainContent sections={[]} contentRefs={mockRefs} />);

    // Asegúrate de que no se renderiza nada
    const sections = screen.queryAllByRole("heading", { level: 2 });
    expect(sections).toHaveLength(0);
  });
});
