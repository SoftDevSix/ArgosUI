import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import FileMenuOption from "./FileMenuOption";

describe("FileMenuOption component", () => {
  const mockSetSelected = vi.fn();
  const fileName = "file1.js";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the file name and icon", () => {
    render(
      <FileMenuOption
        fileName={fileName}
        isSelected={false}
        setSelected={mockSetSelected}
      />
    );
    expect(screen.getByText(fileName)).toBeInTheDocument();
    expect(screen.getByTestId("CodeIcon")).toBeInTheDocument();
  });

  it("triggers the setSelected function when clicked", () => {
    render(
      <FileMenuOption
        fileName={fileName}
        isSelected={false}
        setSelected={mockSetSelected}
      />
    );
    fireEvent.click(screen.getByText(fileName));
    expect(mockSetSelected).toHaveBeenCalledWith(fileName);
  });

  it("does not trigger the setSelected function when already selected", () => {
    render(
      <FileMenuOption
        fileName={fileName}
        isSelected={true}
        setSelected={mockSetSelected}
      />
    );
    fireEvent.click(screen.getByText(fileName));
    expect(mockSetSelected).not.toHaveBeenCalled();
  });
});
