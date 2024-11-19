import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CoverageFilesList from "./CoverageFilesList";
import { COLORS } from "../../../utils/styleConstants";

describe("CoverageFilesList component", () => {
  const mockTitle = "Test Files";

  it("renders the title correctly", () => {
    const files = ["file1.js", "file2.js"];
    render(<CoverageFilesList title={mockTitle} files={files} />);

    const titleElement = screen.getByText(`${mockTitle}:`);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveStyle(`color: ${COLORS.LINK}`);
  });

  it("renders the list of files when files are provided", () => {
    const files = ["file1.js", "file2.js", "file3.js"];
    render(<CoverageFilesList title={mockTitle} files={files} />);

    files.forEach((file) => {
      const fileElement = screen.getByText(file);
      expect(fileElement).toBeInTheDocument();
      expect(fileElement).toHaveStyle(`color: ${COLORS.NEUTRAL_WHITE}`);
    });
  });

  it('renders "None" when no files are provided', () => {
    const files: string[] = [];
    render(<CoverageFilesList title={mockTitle} files={files} />);

    const noneElement = screen.getByText("None");
    expect(noneElement).toBeInTheDocument();
    expect(noneElement).toHaveStyle(`color: ${COLORS.NEUTRAL_WHITE}`);
  });

  it("renders the correct number of list items", () => {
    const files = ["file1.js", "file2.js", "file3.js"];
    render(<CoverageFilesList title={mockTitle} files={files} />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(files.length);
  });

  it("applies correct styles to list items", () => {
    const files = ["file1.js", "file2.js"];
    render(<CoverageFilesList title={mockTitle} files={files} />);

    const listItems = screen.getAllByRole("listitem");
    listItems.forEach((item) => {
      expect(item).toHaveStyle("padding-top: 0px; padding-bottom: 0px;");
    });
  });

  it('renders a single list item with "None" when files array is empty', () => {
    const files: string[] = [];
    render(<CoverageFilesList title={mockTitle} files={files} />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(1);
    expect(listItems[0]).toHaveTextContent("None");
  });
});
