import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Error404Page from "./Error404Page";

describe("Error 404 component", () => {
  it("should render the Error 404 text", () => {
    render(<Error404Page />);
    const headline = screen.getByText(/Error 404 - Page Not Found/i);

    expect(headline).toBeInTheDocument();
  });
});
