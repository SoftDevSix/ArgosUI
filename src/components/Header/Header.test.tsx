import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "./Header";

describe("Header component", () => {
  it("should render the Header text", () => {
    render(<Header />);
    const headline = screen.getByText(/Header/i);

    expect(headline).toBeInTheDocument();
  });
});
