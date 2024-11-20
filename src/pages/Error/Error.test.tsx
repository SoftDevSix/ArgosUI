import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Error from "./Error";

describe("Error component", () => {
  it("should render the Error text", () => {
    render(<Error />);
    const headline = screen.getByText(/Error 404 - Page Not Found/i);

    expect(headline).toBeInTheDocument();
  });
});
