import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ResultLabel from "./ResultLabel";
import { COLORS } from "../../../utils/styleConstants";
import { rgbToHex } from "@mui/material";

describe("ResultLabel Component", () => {
  it('renders "PASSED" label with success color when passed is true', () => {
    render(<ResultLabel passed={true} />);

    const mainLabel = screen.getByText("PASSED");
    const secondaryText = screen.getByText("with");

    expect(mainLabel).toBeInTheDocument();
    expect(mainLabel.textContent).toBe("PASSED");
    expect(secondaryText).toBeInTheDocument();

    const style = getComputedStyle(mainLabel);
    expect(rgbToHex(style.color)).toBe(COLORS.SUCCESS.toLowerCase());
  });

  it('renders "FAILED" label with error color when passed is false', () => {
    render(<ResultLabel passed={false} />);

    const mainLabel = screen.getByText("FAILED");
    const secondaryText = screen.getByText("with");

    expect(mainLabel).toBeInTheDocument();
    expect(mainLabel.textContent).toBe("FAILED");
    expect(secondaryText).toBeInTheDocument();

    const style = getComputedStyle(mainLabel);
    expect(rgbToHex(style.color)).toBe(COLORS.ERROR.toLowerCase());
  });

  it('defaults to "FAILED" label with error color when passed is undefined', () => {
    render(<ResultLabel />);

    const mainLabel = screen.getByText("FAILED");
    const secondaryText = screen.getByText("with");

    expect(mainLabel).toBeInTheDocument();
    expect(mainLabel.textContent).toBe("FAILED");
    expect(secondaryText).toBeInTheDocument();

    const style = getComputedStyle(mainLabel);
    expect(rgbToHex(style.color)).toBe(COLORS.ERROR.toLowerCase());
  });
});
