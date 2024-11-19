import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CoverageSummary from "./CoverageSummary";
import { COLORS } from "../../utils/styleConstants";

vi.mock("./CoverageDeatils/CoverageDetails", () => ({
  default: vi.fn(() => (
    <div data-testid="coverage-details">Mocked CoverageDetails</div>
  )),
}));

vi.mock("./CoverageFilesList/CoverageFilesList", () => ({
  default: vi.fn(({ title, files }: { title: string; files: string[] }) => (
    <div data-testid="coverage-files-list">
      <span>{title}</span>
      <ul>
        {files.map((file: string, index: number) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
    </div>
  )),
}));

vi.mock("../CustomPieChart", () => ({
  default: vi.fn(() => (
    <div data-testid="custom-pie-chart">Mocked CustomPieChart</div>
  )),
}));

describe("CoverageSummary component", () => {
  const mockSummaryData = [
    { value: 80, label: "Overall Coverage" },
    { value: 75, label: "Line Coverage" },
    { value: 70, label: "Method Coverage" },
    { value: 65, label: "Class Coverage" },
  ];

  const mockComparisonData = [
    { value: 78, label: "Overall Coverage" },
    { value: 73, label: "Line Coverage" },
    { value: 68, label: "Method Coverage" },
    { value: 62, label: "Class Coverage" },
  ];

  const improvedFiles = ["FileA.java", "FileB.java"];
  const decreasedFiles = ["FileC.java"];
  const baseBranchName = "develop";
  const coverageChange = 5;

  const renderComponent = () => {
    return render(
      <CoverageSummary
        baseBranchName={baseBranchName}
        summaryData={mockSummaryData}
        comparisonData={mockComparisonData}
        improvedFiles={improvedFiles}
        decreasedFiles={decreasedFiles}
        coverageChange={coverageChange}
      />
    );
  };

  it("should render CoverageDetails with correct props", () => {
    renderComponent();
    const coverageDetails = screen.getByTestId("coverage-details");
    expect(coverageDetails).toBeInTheDocument();
  });

  it("should render CoverageFilesList for improved files", () => {
    renderComponent();
    const improvedFilesList = screen.getByText("Files Improved");
    expect(improvedFilesList).toBeInTheDocument();
    improvedFiles.forEach((file) => {
      expect(screen.getByText(file)).toBeInTheDocument();
    });
  });

  it("should render CoverageFilesList for decreased files", () => {
    renderComponent();
    const decreasedFilesList = screen.getByText("Files Decreased Coverage");
    expect(decreasedFilesList).toBeInTheDocument();
    decreasedFiles.forEach((file) => {
      expect(screen.getByText(file)).toBeInTheDocument();
    });
  });

  it("should display the comparison with the base branch", () => {
    renderComponent();
    const comparisonText = screen.getByText(
      `Comparison with Base Branch (${baseBranchName})`
    );
    expect(comparisonText).toBeInTheDocument();
  });

  it("should display the coverage change correctly", () => {
    renderComponent();
    const coverageChangeText = screen.getByText(
      `Coverage Change: +${coverageChange}% (Improved)`
    );
    expect(coverageChangeText).toBeInTheDocument();
    expect(coverageChangeText).toHaveStyle(`color: ${COLORS.GREEN}`);
  });

  it("should render CustomPieChart with correct props", () => {
    renderComponent();
    const customPieChart = screen.getByTestId("custom-pie-chart");
    expect(customPieChart).toBeInTheDocument();
  });

  it("should handle negative coverage change", () => {
    render(
      <CoverageSummary
        baseBranchName={baseBranchName}
        summaryData={mockSummaryData}
        comparisonData={mockComparisonData}
        improvedFiles={improvedFiles}
        decreasedFiles={decreasedFiles}
        coverageChange={-5}
      />
    );
    const coverageChangeText = screen.getByText(
      `Coverage Change: -5% (Decreased)`
    );
    expect(coverageChangeText).toBeInTheDocument();
    expect(coverageChangeText).toHaveStyle(`color: ${COLORS.GREEN}`);
  });
});
