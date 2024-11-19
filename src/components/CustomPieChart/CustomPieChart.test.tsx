import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CustomPieChart from "./CustomPieChart";

import { PieChart } from "@mui/x-charts";

vi.mock("@mui/x-charts", () => ({
  PieChart: vi.fn(() => (
    <div data-testid="mocked-pie-chart">Mocked PieChart</div>
  )),
}));

describe("CustomPieChart component", () => {
  const mockData = [
    { value: 30, label: "A", color: "#ff0000" },
    { value: 40, label: "B", color: "#00ff00" },
    { value: 30, label: "C", color: "#0000ff" },
  ];

  it("renders the PieChart component", () => {
    render(<CustomPieChart data={mockData} />);
    const pieChart = screen.getByTestId("mocked-pie-chart");
    expect(pieChart).toBeInTheDocument();
  });

  it("applies correct default dimensions", () => {
    render(<CustomPieChart data={mockData} />);
    const container = screen.getByTestId("mocked-pie-chart").parentElement;
    expect(container).toHaveStyle("width: 210px");
    expect(container).toHaveStyle("height: 170px");
  });

  it("applies custom dimensions when provided", () => {
    render(<CustomPieChart data={mockData} height={200} width={200} />);
    const container = screen.getByTestId("mocked-pie-chart").parentElement;
    expect(container).toHaveStyle("width: 260px");
    expect(container).toHaveStyle("height: 220px");
  });

  it("passes correct props to PieChart component", () => {
    render(<CustomPieChart data={mockData} />);

    expect(PieChart).toHaveBeenCalledWith(
      expect.objectContaining({
        series: [
          expect.objectContaining({
            data: mockData,
            outerRadius: 50,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 5, additionalRadius: -5 },
          }),
        ],
        height: 150,
        width: 150,
        slotProps: {
          legend: { hidden: true },
        },
      }),
      expect.anything()
    );
  });

  it("applies correct styles to container Box", () => {
    render(<CustomPieChart data={mockData} />);
    const container = screen.getByTestId("mocked-pie-chart").parentElement;
    expect(container).toHaveStyle({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "visible",
      position: "relative",
    });
  });
});
