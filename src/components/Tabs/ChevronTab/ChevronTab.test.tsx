import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ChevronTab from "./ChevronTab";
import { rgbToHex } from "@mui/material";
import { COLORS } from "../../../utils/styleConstants";

describe("ChevronTab", () => {
  const tabName = "Test Tab";
  const onClick = vi.fn();

  it("should render the correct tab name", () => {
    render(<ChevronTab tabName={tabName} onClick={onClick} />);

    expect(screen.getByText(tabName)).toBeInTheDocument();
  });

  it("should call onClick when the tab is clicked", () => {
    render(<ChevronTab tabName={tabName} onClick={onClick} />);

    const tabElement = screen.getByText(tabName);
    fireEvent.click(tabElement);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should have the correct icon button with the right style", () => {
    render(<ChevronTab tabName={tabName} onClick={onClick} />);

    const iconButton = screen.getByRole("button");
    const computedStyle = window.getComputedStyle(iconButton);
    const hexColor = rgbToHex(computedStyle.backgroundColor).toUpperCase();

    expect(hexColor).toBe(COLORS.PRIMARY_HOVER);
    expect(screen.getByLabelText("delete")).toBeInTheDocument();
  });

  it("should apply the correct CSS classes for styling", () => {
    render(<ChevronTab tabName={tabName} onClick={onClick} />);

    const tabLabel = screen.getByText(tabName);
    screen.debug(tabLabel);
    expect(tabLabel).toHaveClass("_tabLabel_9afb91");
  });

  it("should call onClick when button is clicked", () => {
    render(<ChevronTab tabName={tabName} onClick={onClick} />);

    const iconButton = screen.getByRole("button");
    fireEvent.click(iconButton);

    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
