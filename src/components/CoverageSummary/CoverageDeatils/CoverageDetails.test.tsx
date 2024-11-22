import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CoverageDetails from "./CoverageDetails";

vi.mock("../../CustomPieChart", () => ({
  default: () => (
    <div data-testid="custom-pie-chart">Mocked CustomPieChart</div>
  ),
}));

describe("CoverageDetails component", () => {
  const mockColors = ["#4caf50", "#ffd700", "#ff9800", "#ff5722"];
  const mockSummaryData = [
    { value: 80, label: "Overall Coverage" },
    { value: 75, label: "Line Coverage" },
    { value: 70, label: "Method Coverage" },
    { value: 65, label: "Class Coverage" },
  ];
  const mockPieChartData = mockSummaryData.map((item, index) => ({
    ...item,
    color: mockColors[index],
  }));

  it("renders coverage details with correct data and colors", () => {
    render(
      <CoverageDetails
        colors={mockColors}
        summaryData={mockSummaryData}
        pieChartData={mockPieChartData}
      />
    );

    mockSummaryData.forEach((item, index) => {
      const textElement = screen.getByText(`${item.label}: ${item.value}%`);
      expect(textElement).toBeInTheDocument();
      expect(textElement).toHaveStyle(`color: ${mockColors[index]}`);
    });
  });

  it("renders CustomPieChart component", () => {
    render(
      <CoverageDetails
        colors={mockColors}
        summaryData={mockSummaryData}
        pieChartData={mockPieChartData}
      />
    );

    const pieChart = screen.getByTestId("custom-pie-chart");
    expect(pieChart).toBeInTheDocument();
  });

  it("renders correct number of Typography components", () => {
    render(
      <CoverageDetails
        colors={mockColors}
        summaryData={mockSummaryData}
        pieChartData={mockPieChartData}
      />
    );

    const typographyElements = screen.getAllByText(/Coverage:/);
    expect(typographyElements).toHaveLength(4);
  });

  it("handles missing data gracefully", () => {
    const incompleteSummaryData = [
      { value: 80, label: "Overall Coverage" },
      { value: 75, label: "Line Coverage" },
    ];

    render(
      <CoverageDetails
        colors={mockColors}
        summaryData={incompleteSummaryData}
        pieChartData={mockPieChartData}
      />
    );

    expect(screen.getByText("Overall Coverage: 80%")).toBeInTheDocument();
    expect(screen.getByText("Line Coverage: 75%")).toBeInTheDocument();
    expect(screen.queryByText("Method Coverage:")).not.toBeInTheDocument();
    expect(screen.queryByText("Class Coverage:")).not.toBeInTheDocument();
  });
});
