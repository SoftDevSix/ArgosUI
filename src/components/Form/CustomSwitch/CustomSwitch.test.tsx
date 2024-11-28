import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import CustomSwitch from "./CustomSwitch";

describe("CustomSwitch", () => {
  const label = "Test Switch";
  const onChange = vi.fn();

  it("should render with the correct label", () => {
    render(<CustomSwitch label={label} checked={false} onChange={onChange} />);

    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it("should display the switch as unchecked when checked is false", () => {
    render(<CustomSwitch label={label} checked={false} onChange={onChange} />);

    const switchElement = screen.getByRole("checkbox");
    screen.debug(switchElement);
    expect(switchElement).not.toBeChecked();
  });

  it("should display the switch as checked when checked is true", () => {
    render(<CustomSwitch label={label} checked={true} onChange={onChange} />);

    const switchElement = screen.getByRole("checkbox");
    expect(switchElement).toBeChecked();
  });

  it("should call onChange when the switch is toggled", () => {
    render(<CustomSwitch label={label} checked={false} onChange={onChange} />);

    const switchElement = screen.getByRole("checkbox");
    fireEvent.click(switchElement);

    expect(onChange).toHaveBeenCalledWith(true);
  });
});
