import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "./Home";

describe("Home component", () => {
  it("should render the Home text", () => {
    render(<Home />);
    const headline = screen.getByText(/Home Page/i);

    expect(headline).toBeInTheDocument();
  });
});
