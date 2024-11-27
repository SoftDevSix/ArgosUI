import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CodeLine from "./CodeLine";

describe("CodeLine Component", () => {
  it("renders line and lineNumber", () => {
    render(
      <CodeLine
        line="console.log('Hello');"
        withoutCoverage={false}
        lineNumber={1}
      />
    );
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("console.log('Hello');")).toBeInTheDocument();
  });

  it("renders the line without crashing when withoutCoverage is true", () => {
    render(
      <CodeLine
        line="console.log('Hello');"
        withoutCoverage={true}
        lineNumber={2}
      />
    );
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("console.log('Hello');")).toBeInTheDocument();
  });
});
