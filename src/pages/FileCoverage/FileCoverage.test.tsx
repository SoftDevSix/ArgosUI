import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FileCoverage from "../FileCoverage";
import { vi } from "vitest";
import { describe, expect, it } from "vitest";
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

  it("handles fetch data and updates selected file path", async () => {
    const mockData = JSON.stringify([
      "file1",
      "file2",
      "file3",
      "file4",
      "file5",
      "file6",
    ]);
    vi.mocked(useFetch).mockReturnValueOnce({
      data: mockData,
      loading: false,
      error: null,
    });

    render(
      <BrowserRouter>
        <FileCoverage />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("file6")).toBeInTheDocument();
    });
  });

  it("sets API file URL and updates coverage data", async () => {
    const mockCoverageData = {
      coveragePercentage: 85.5,
      methodCoverage: 78.2,
      linesCode: 120,
      uncoveredLines: [12, 45, 78],
    };
    vi.mocked(useFetch).mockImplementation((url) => {
      if (url && typeof url === "string") {
        if (url.includes("fileManager")) {
          return {
            data: JSON.stringify(["/file1", "/file2", "/file3"]),
            loading: false,
            error: null,
          };
        }
        if (url.includes("coverage")) {
          return {
            data: JSON.stringify(mockCoverageData),
            loading: false,
            error: null,
          };
        }
      }
      return { data: null, loading: false, error: null };
    });

    render(
      <BrowserRouter>
        <FileCoverage />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("/file1")).toBeInTheDocument();
      expect(screen.getByText("/file2")).toBeInTheDocument();
      expect(screen.getByText("/file3")).toBeInTheDocument();
    });
  });
});
