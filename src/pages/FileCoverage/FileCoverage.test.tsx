import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FileCoverage from "../FileCoverage";
import { describe, expect, it, vi } from "vitest";
import useFetch from "../../hooks/useFetch";

vi.mock("../../hooks/UseUploadedKeys", () => ({
  useUploadedKeys: vi.fn().mockReturnValue({ uploadedKeys: ["12345"] }),
}));

vi.mock("../../hooks/useFetch", () => ({
  default: vi.fn(() => ({
    data: null,
    loading: false,
    error: null,
  })),
}));

describe("FileCoverage component", () => {
  it("should show error message if fetch fails", async () => {
    vi.mocked(useFetch).mockReturnValueOnce({
      data: null,
      loading: false,
      error: "Failed to fetch",
    });

    render(
      <BrowserRouter>
        <FileCoverage />
      </BrowserRouter>
    );

    expect(screen.queryByText(/file/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/coverage/i)).not.toBeInTheDocument();
  });
});
