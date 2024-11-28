import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ErrorAdvice from "./ErrorAdvice";
import { MemoryRouter } from "react-router-dom";

describe("ErrorAdvice Component", () => {
  it("should render the error icon", () => {
    render(
      <MemoryRouter>
        <ErrorAdvice />
      </MemoryRouter>
    );

    const errorIcon = screen.getByLabelText("error-icon");
    expect(errorIcon).toBeInTheDocument();
  });

  it("should render the error message 'Something went wrong!'", () => {
    render(
      <MemoryRouter>
        <ErrorAdvice />
      </MemoryRouter>
    );

    const errorMessage = screen.getByText("Something went wrong!");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should render the description 'Please try again later reloading the page.'", () => {
    render(
      <MemoryRouter>
        <ErrorAdvice />
      </MemoryRouter>
    );

    const descriptionMessage = screen.getByText(
      "Please try again later reloading the page."
    );
    expect(descriptionMessage).toBeInTheDocument();
  });
});
