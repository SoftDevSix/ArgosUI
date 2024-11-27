import { render, screen, fireEvent } from "@testing-library/react";
import { vi, expect, it, describe } from "vitest";
import CustomButton from "./CustomButton";

describe("CustomButton Component", () => {
  it("renders the button with default props", () => {
    render(<CustomButton>Click Me</CustomButton>);
    const button = screen.getByRole("button", { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("MuiButton-contained");
    expect(button).toHaveClass("MuiButton-colorPrimary");
    expect(button).not.toBeDisabled();
  });

  it("renders the button with a custom variant and color", () => {
    render(
      <CustomButton variant="outlined" color="secondary">
        Custom Button
      </CustomButton>
    );
    const button = screen.getByRole("button", { name: /custom button/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("MuiButton-outlined");
    expect(button).toHaveClass("MuiButton-colorSecondary");
  });

  it("renders a loading indicator when loading is true", () => {
    render(
      <CustomButton loading name="loadingButton">
        Loading Button
      </CustomButton>
    );
    const loadingIndicator = screen.getByRole("progressbar");
    const button = screen.getByRole("button", { name: /loadingButton/i });

    expect(loadingIndicator).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("calls the onClick handler when clicked", () => {
    const onClickMock = vi.fn();
    render(<CustomButton onClick={onClickMock}>Click Me</CustomButton>);

    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("disables the button when disabled prop is true", () => {
    render(
      <CustomButton disabled name="disabledButton">
        Disabled Button
      </CustomButton>
    );
    const button = screen.getByRole("button", { name: /disabledButton/i });

    expect(button).toBeDisabled();
  });

  it("renders a custom component when component prop is passed", () => {
    render(
      <CustomButton component="a" name="linkButton">
        Link Button
      </CustomButton>
    );
    const button = screen.getByRole("button", { name: /linkButton/i });

    expect(button.tagName).toBe("A");
  });

  it("renders children correctly", () => {
    render(<CustomButton name="testButton">Test Button</CustomButton>);
    const button = screen.getByRole("button", { name: /testButton/i });

    expect(button).toHaveTextContent("Test Button");
  });
});
