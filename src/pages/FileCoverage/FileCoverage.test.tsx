import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FileCoverage from "../FileCoverage";
import { vi } from "vitest";

vi.mock("../../hooks/UseUploadedKeys", () => ({
  useUploadedKeys: vi.fn().mockReturnValue({ uploadedKeys: ["12345"] }),
}));

vi.mock("../../hooks/useFetch", () => ({
  default: vi.fn().mockReturnValue({
    data: null,
    loading: false,
    error: null,
  }),
}));

describe("FileCoverage component", () => {
  it("should render and display static content correctly", () => {
    render(
      <BrowserRouter>
        <FileCoverage />
      </BrowserRouter>
    );

    expect(screen.getByText("Something went wrong!")).toBeInTheDocument();
    expect(
      screen.getByText("Please try again later reloading the page.")
    ).toBeInTheDocument();
  });

  it("should show error message if fetch fails", () => {
    vi.mock("../../hooks/useFetch", () => ({
      default: vi.fn().mockReturnValue({
        data: null,
        loading: false,
        error: true,
      }),
    }));

    render(
      <BrowserRouter>
        <FileCoverage />
      </BrowserRouter>
    );

    expect(
      screen.getByText("Please try again later reloading the page.")
    ).toBeInTheDocument();
  });
});
