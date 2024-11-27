import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CodeLine from "./CodeLine";

describe("CodeLine Component", () => {
  it("renders the line number correctly", () => {
    render(
      <CodeLine
        line={["const", "x", "=", "42;"]}
        withoutCoverage={false}
        lineNumber={1}
      />
    );
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("renders the code tokens correctly", () => {
    render(
      <CodeLine
        line={["const", "x", "=", "42;"]}
        withoutCoverage={false}
        lineNumber={1}
      />
    );
    expect(screen.getByText("const")).toBeInTheDocument();
    expect(screen.getByText("x")).toBeInTheDocument();
    expect(screen.getByText("=")).toBeInTheDocument();
    expect(screen.getByText("42;")).toBeInTheDocument();
  });

  it("applies the withoutCoverage style if withoutCoverage is true", () => {
    render(
      <CodeLine
        line={["const", "x", "=", "42;"]}
        withoutCoverage={true}
        lineNumber={1}
      />
    );
    const lineElement = screen.getByText("const").closest("span");
    expect(lineElement).toHaveClass("withoutCoverage");
  });

  it("does not apply the withoutCoverage style if withoutCoverage is false", () => {
    render(
      <CodeLine
        line={["const", "x", "=", "42;"]}
        withoutCoverage={false}
        lineNumber={1}
      />
    );
    const lineElement = screen.getByText("const").closest("span");
    expect(lineElement).not.toHaveClass("withoutCoverage");
  });
});
