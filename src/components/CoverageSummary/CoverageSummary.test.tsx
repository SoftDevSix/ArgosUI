import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CoverageSummary from "./CoverageSummary";
import { COLORS } from "../../utils/styleConstants";

describe("CoverageSummary component", () => {
  const renderComponent = (props = {}) => {
    return render(
      <CoverageSummary
        fileCoverage={80}
        methodCoverage={70}
        linesOfCode={500}
        {...props}
      />
    );
  };

  it("should render MetricCircle for file coverage", () => {
    renderComponent();
    const fileCoverageCircle = screen.getByText("File coverage");
    expect(fileCoverageCircle).toBeInTheDocument();
    const fileCoverageValue = screen.getByText("80%");
    expect(fileCoverageValue).toBeInTheDocument();
  });

  it("should render MetricCircle for method coverage", () => {
    renderComponent();
    const methodCoverageCircle = screen.getByText("Method coverage");
    expect(methodCoverageCircle).toBeInTheDocument();
    const methodCoverageValue = screen.getByText("70%");
    expect(methodCoverageValue).toBeInTheDocument();
  });

  it("should display the lines of code with correct style", () => {
    renderComponent();
    const linesOfCode = screen.getByText("500");
    expect(linesOfCode).toBeInTheDocument();
    expect(linesOfCode).toHaveStyle("font-weight: 700; font-size: 1.5rem;");
  });

  it("should display the label 'Lines of code'", () => {
    renderComponent();
    const linesOfCodeLabel = screen.getByText("Lines of code");
    expect(linesOfCodeLabel).toBeInTheDocument();
    expect(linesOfCodeLabel).toHaveStyle(`color: ${COLORS.SECONDARY_TEXT}`);
  });
});
