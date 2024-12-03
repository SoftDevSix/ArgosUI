import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import FileMenuSideBar from "./FileMenuSideBar";

vi.mock("./FileMenuOption/FileMenuOption", () => ({
  default: vi.fn(({ fileName, isSelected, setSelected }) => (
    <div
      data-testid={`file-option-${fileName}`}
      className={isSelected ? "active" : "inactive"}
      onClick={() => setSelected(fileName)}
    >
      {fileName}
    </div>
  )),
}));

describe("FileMenuSideBar component", () => {
  const mockFiles = ["file1.js", "file2.js", "file3.js"];

  it("renders the project files title", () => {
    render(
      <FileMenuSideBar proyectFiles={mockFiles} optionOnClick={() => {}} />
    );
    expect(screen.getByText("Project Files")).toBeInTheDocument();
  });

  it("renders all the file options", () => {
    render(
      <FileMenuSideBar proyectFiles={mockFiles} optionOnClick={() => {}} />
    );
    mockFiles.forEach((file) => {
      expect(screen.getByTestId(`file-option-${file}`)).toBeInTheDocument();
    });
  });

  it("sets the first file as selected by default", () => {
    render(
      <FileMenuSideBar proyectFiles={mockFiles} optionOnClick={() => {}} />
    );
    expect(screen.getByTestId(`file-option-${mockFiles[0]}`)).toHaveClass(
      "active"
    );
  });
});
