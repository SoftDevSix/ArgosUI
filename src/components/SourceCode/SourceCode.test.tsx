import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SourceCode from "./SourceCode";

describe("SourceCode Component", () => {
  it("renders all lines with correct line numbers", () => {
    const lines = ["const a = 1;", "const b = 2;", "console.log(a + b);"];
    render(<SourceCode fileName="" lines={lines} />);
    lines.forEach((line, index) => {
      expect(screen.getByText(line)).toBeInTheDocument();
      expect(screen.getByText((index + 1).toString())).toBeInTheDocument();
    });
  });

  it("handles an empty lines array without crashing", () => {
    render(<SourceCode fileName="" lines={[]} />);
    expect(screen.queryByText(/.+/)).not.toBeInTheDocument();
  });
});
