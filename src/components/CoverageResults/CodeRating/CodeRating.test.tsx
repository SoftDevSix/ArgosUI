import { render, screen } from "@testing-library/react";
import CodeRating from "./CodeRating";
import { COLORS } from "../../../utils/styleConstants";
import { CodeRatingType } from "../../../types/types";
import { describe, expect, it } from "vitest";
import { rgbToHex } from "@mui/material";

describe("CodeRating", () => {
  const mockCodeRating: CodeRatingType = "B";
  const mockRequiredRating: CodeRatingType = "A";

  it("renders the code rating and required rating", () => {
    render(
      <CodeRating
        codeRating={mockCodeRating}
        requiredRating={mockRequiredRating}
      />
    );

    expect(screen.getByText(mockCodeRating.toString())).toBeInTheDocument();
    expect(
      screen.getByText(`Rating Required: ${mockRequiredRating}`)
    ).toBeInTheDocument();
    expect(screen.getByText("Code Rating")).toBeInTheDocument();
  });

  it("uses the correct background color when codeRating <= requiredRating", () => {
    render(<CodeRating codeRating={"B"} requiredRating={"A"} />);

    const avatar = screen.getByLabelText("code-rating-avatar");
    screen.debug(avatar);

    const computedStyle = window.getComputedStyle(avatar);
    expect(rgbToHex(computedStyle.backgroundColor)).toBe(COLORS.ERROR.toLowerCase());
  });

  it("uses the correct background color when codeRating > requiredRating", () => {
    render(<CodeRating codeRating={"A"} requiredRating={"B"} />);

    const avatar = screen.getByLabelText("code-rating-avatar");
    screen.debug(avatar);

    const computedStyle = window.getComputedStyle(avatar);
    expect(rgbToHex(computedStyle.backgroundColor)).toBe(COLORS.SUCCESS.toLowerCase());
  });

  it("renders the typography elements correctly", () => {
    render(<CodeRating codeRating={"B"} requiredRating={"A"} />);

    expect(screen.getByText("Code Rating")).toBeInTheDocument();
    expect(screen.getByText("Rating Required: A")).toBeInTheDocument();
  });
});
