import { render, screen } from "@testing-library/react";
import SourceCode from "./SourceCode";
import * as Mock from "../../hooks/Mock/useFetchMock";

jest.mock("../../hooks/Mock/useFetchMock");

describe("SourceCode Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the fetched code lines", () => {
    const mockLines = [
      ["import", "React", "from", "'react';"],
      ["const", "x", "=", "42;"],
      ["export", "default", "x;"],
    ];
    jest.spyOn(Mock, "useFetchMock").mockReturnValue(mockLines);

    render(<SourceCode fileName="testFile.ts" />);

    expect(screen.getByText("import")).toBeInTheDocument();
    expect(screen.getByText("const")).toBeInTheDocument();
    expect(screen.getByText("export")).toBeInTheDocument();
  });

  it("renders line numbers for each line", () => {
    const mockLines = [
      ["import", "React", "from", "'react';"],
      ["const", "x", "=", "42;"],
    ];
    jest.spyOn(Mock, "useFetchMock").mockReturnValue(mockLines);

    render(<SourceCode fileName="testFile.ts" />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("marks every 5th line as withoutCoverage", () => {
    const mockLines = Array.from({ length: 10 }, (_, i) => [`Line ${i + 1}`]);
    jest.spyOn(Mock, "useFetchMock").mockReturnValue(mockLines);

    render(<SourceCode fileName="testFile.ts" />);

    const fifthLine = screen.getByText("Line 5");
    const tenthLine = screen.getByText("Line 10");
    expect(fifthLine.closest("span")).toHaveClass("withoutCoverage");
    expect(tenthLine.closest("span")).toHaveClass("withoutCoverage");
  });
});
