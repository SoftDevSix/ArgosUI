import { render, screen } from "@testing-library/react";
import CoveragePercentage from "./CoveragePercentage";
import { describe, expect, it } from "vitest";
import { COLORS } from "../../../utils/styleConstants";
import { rgbToHex } from "@mui/material";

describe("CoveragePercentage", () => {
  it("renders CircularProgress and Typography with correct values", () => {
    render(
      <CoveragePercentage currentPercentage={85.567} requiredPercentage={90} />
    );

    const progress = screen.getByRole("progressbar");
    const currentText = screen.getByText("85.57% - Coverage");
    const requiredText = screen.getByText("90.00% Required");

    expect(progress).toBeInTheDocument();
    expect(currentText).toBeInTheDocument();
    expect(requiredText).toBeInTheDocument();
  });

  it("uses success color when currentPercentage >= requiredPercentage", () => {
    render(
      <CoveragePercentage currentPercentage={95} requiredPercentage={90} />
    );

    const progress = screen.getByRole("progressbar");

    const computedStyle = window.getComputedStyle(progress);
    expect(rgbToHex(computedStyle.color)).toBe(
      COLORS.SUCCESS_VARIANT.toLowerCase()
    );
  });

  it("uses error color when currentPercentage < requiredPercentage", () => {
    render(
      <CoveragePercentage currentPercentage={85} requiredPercentage={90} />
    );

    const progress = screen.getByRole("progressbar");

    const computedStyle = window.getComputedStyle(progress);
    expect(rgbToHex(computedStyle.color)).toBe(
      COLORS.ERROR_VARIANT.toLowerCase()
    );
  });

  it("rounds percentages to two decimal places", () => {
    render(
      <CoveragePercentage
        currentPercentage={85.567}
        requiredPercentage={90.123}
      />
    );

    const currentText = screen.getByText("85.57% - Coverage");
    const requiredText = screen.getByText("90.12% Required");

    expect(currentText).toBeInTheDocument();
    expect(requiredText).toBeInTheDocument();
  });
});
