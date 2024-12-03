import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CoverageResults from "../CoverageResults";
import { vi } from "vitest";

vi.mock("../../hooks/UseUploadedKeys", () => ({
  useUploadedKeys: vi.fn().mockReturnValue({ uploadedKeys: ["12345"] }),
}));

vi.mock("../../hooks/useFetch", () => ({
  __esModule: true,
  default: vi.fn().mockReturnValue({
    data: '{"projectStatus":"PASSED","rating":{"actualRating":4,"requiredCodeRating":3},"coverage":{"actualCoverage":80,"requiredCoverage":90}}',
    loading: false,
    error: null,
  }),
}));

describe("CoverageResults component", () => {
  it("should render without crashing", () => {
    render(
      <BrowserRouter>
        {" "}
        {}
        <CoverageResults />
      </BrowserRouter>
    );

    expect(screen.getByText("Coverage Results")).toBeInTheDocument();

    expect(screen.getByText("PASSED")).toBeInTheDocument();

    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("80.00% - Coverage")).toBeInTheDocument();
  });
});
