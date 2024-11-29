import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Splash from "./Splash";
import { rgbToHex } from "@mui/material";
import { COLORS } from "../../utils/styleConstants";

describe("Splash Component", () => {
  it('renders a "Loading..." message by default', () => {
    render(<Splash />);

    const loadingMessage = screen.getByText("Loading...");
    expect(loadingMessage).toBeInTheDocument();
  });

  it("renders a custom splash message when provided", () => {
    const customMessage = "Custom Splash Message";
    render(<Splash splashMessage={customMessage} />);

    const customMessageElement = screen.getByText(customMessage);
    expect(customMessageElement).toBeInTheDocument();
  });

  it("renders a CircularProgress with success color", () => {
    render(<Splash />);

    const circularProgress = screen.getByRole("progressbar");
    expect(circularProgress).toBeInTheDocument();

    const computedStyle = getComputedStyle(circularProgress);
    expect(rgbToHex(computedStyle.color)).toBe(COLORS.SUCCESS_VARIANT);
  });
});
