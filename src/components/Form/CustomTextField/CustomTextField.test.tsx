import { render, screen, fireEvent } from "@testing-library/react";
import { vi, expect, it, describe } from "vitest";
import CustomTextField from "./CustomTextField";

describe("CustomTextField Component", () => {
  it("renders the text field with a label", () => {
    render(
      <CustomTextField
        value=""
        setValue={() => {}}
        label="Custom Label"
        name="customField"
        placeholder="Enter text"
      />
    );

    const label = screen.getByText(/custom label/i);
    const textField = screen.getByPlaceholderText(/enter text/i);

    expect(label).toBeInTheDocument();
    expect(textField).toBeInTheDocument();
    expect(textField).toHaveAttribute("name", "customField");
  });

  it("calls setValue on text input change", () => {
    const setValueMock = vi.fn();
    render(
      <CustomTextField
        value=""
        setValue={setValueMock}
        label="Test Field"
        name="testField"
        placeholder="Type here"
      />
    );

    const textField = screen.getByPlaceholderText(/type here/i);
    fireEvent.change(textField, { target: { value: "New Value" } });

    expect(setValueMock).toHaveBeenCalledTimes(1);
    expect(setValueMock).toHaveBeenCalledWith("New Value");
  });

  it("disables the text field when disabled prop is true", () => {
    render(
      <CustomTextField
        value=""
        setValue={() => {}}
        label="Disabled Field"
        name="disabledField"
        placeholder="Disabled"
        disabled
      />
    );

    const textField = screen.getByPlaceholderText(/disabled/i);
    expect(textField).toBeDisabled();
  });

  it("renders a required text field by default", () => {
    render(
      <CustomTextField
        value=""
        setValue={() => {}}
        label="Required Field"
        name="requiredField"
        placeholder="Required"
      />
    );

    const textField = screen.getByPlaceholderText(/required/i);
    expect(textField).toBeRequired();
  });

  it("allows setting optional fields", () => {
    render(
      <CustomTextField
        value=""
        setValue={() => {}}
        label="Optional Field"
        name="optionalField"
        placeholder="Optional"
        required={false}
      />
    );

    const textField = screen.getByPlaceholderText(/optional/i);
    expect(textField).not.toBeRequired();
  });

  it("applies the correct margin-top", () => {
    const { container } = render(
      <CustomTextField
        value=""
        setValue={() => {}}
        label="Margin Top Field"
        name="mtField"
        placeholder="MT"
        mt={3}
      />
    );

    const box = container.querySelector("div");
    expect(box).toHaveStyle("margin-top: 24px");
  });
});
