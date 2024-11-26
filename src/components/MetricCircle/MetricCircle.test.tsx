import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MetricCircle from "./MetricCircle";
import { COLORS } from "../../utils/styleConstants";

describe("MetricCircle component", () => {
  const renderComponent = (props = {}) => {
    return render(
      <MetricCircle
        value={75}
        color="GREEN"
        label="Test Label"
        circleSize={120}
        {...props}
      />
    );
  };

  it("should render the circular progress bars", () => {
    renderComponent();
    const progressBars = screen.getAllByRole("progressbar");
    expect(progressBars.length).toBe(2);
  });

  it("should display the correct percentage value", () => {
    renderComponent({ value: 75 });
    const percentageText = screen.getByText("75%");
    expect(percentageText).toBeInTheDocument();
    expect(percentageText).toHaveStyle("font-weight: 700");
  });

  it("should apply the correct size to the circular progress bars", () => {
    renderComponent({ circleSize: 120 });
    const progressBars = screen.getAllByRole("progressbar");

    progressBars.forEach((progressBar) => {
      expect(progressBar).toHaveStyle("width: 120px");
      expect(progressBar).toHaveStyle("height: 120px");
    });
  });

  it("should render the correct label", () => {
    renderComponent({ label: "Custom Label" });
    const labelText = screen.getByText("Custom Label");
    expect(labelText).toBeInTheDocument();
    expect(labelText).toHaveStyle(`color: ${COLORS.SECONDARY_TEXT}`);
  });

  it("should apply the correct color to the value progress bar", () => {
    renderComponent({ color: COLORS.GREEN });
    const valueCircle = screen.getAllByRole("progressbar")[1];
    expect(valueCircle).toHaveStyle(`color: ${COLORS.GREEN}`);
  });
});
