import { render, screen } from "@testing-library/react";
import { describe, it, vi, beforeEach } from "vitest";
import SourceCode from "../SourceCode";
import MockUploadedKeysProvider from "./MockUploadedKeysProvider";
import useFetch from "../../../hooks/useFetch";

vi.mock("../../../hooks/useFetch", () => ({
  __esModule: true,
  default: vi.fn(() => ({
    data: null,
    loading: false,
    error: null,
  })),
}));

const mockUseFetch = useFetch as jest.Mock;

describe("SourceCode Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders error message when there's an error", async () => {
    mockUseFetch.mockImplementation(() => ({
      data: null,
      loading: false,
      error: "Error fetching the file",
    }));

    render(
      <MockUploadedKeysProvider
        value={{
          uploadedKeys: "12345",
          hasUploadedKeys: true,
          projectName: "project",
          setProjectName: vi.fn(),
          setUploadedKeys: vi.fn(),
        }}
      >
        <SourceCode filePath="test/path" uncoveredLines={[]} />
      </MockUploadedKeysProvider>
    );

    expect(
      await screen.findByText(
        /Error getting the file. Try again reloading the page/i
      )
    ).toBeInTheDocument();
  });

  it("renders file content when data is available", async () => {
    mockUseFetch.mockImplementation(() => ({
      data: "line1\nline2\nline3",
      loading: false,
      error: null,
    }));

    render(
      <MockUploadedKeysProvider
        value={{
          uploadedKeys: "12345",
          hasUploadedKeys: true,
          projectName: "project",
          setProjectName: vi.fn(),
          setUploadedKeys: vi.fn(),
        }}
      >
        <SourceCode filePath="test/path" uncoveredLines={[2]} />
      </MockUploadedKeysProvider>
    );

    expect(await screen.findByText(/line1/i)).toBeInTheDocument();
    expect(await screen.findByText(/line3/i)).toBeInTheDocument();
  });

  it("renders loading state with CircularProgress", async () => {
    mockUseFetch.mockImplementation(() => ({
      data: null,
      loading: true,
      error: null,
    }));

    render(
      <MockUploadedKeysProvider
        value={{
          uploadedKeys: "12345",
          hasUploadedKeys: true,
          projectName: "project",
          setProjectName: vi.fn(),
          setUploadedKeys: vi.fn(),
        }}
      >
        <SourceCode filePath="test/path" uncoveredLines={[]} />
      </MockUploadedKeysProvider>
    );

    expect(await screen.findByRole("progressbar")).toBeInTheDocument();
  });

  it("renders no content in the file message when there is no data", async () => {
    mockUseFetch.mockImplementation(() => ({
      data: null,
      loading: false,
      error: null,
    }));

    render(
      <MockUploadedKeysProvider
        value={{
          uploadedKeys: "12345",
          hasUploadedKeys: true,
          projectName: "project",
          setProjectName: vi.fn(),
          setUploadedKeys: vi.fn(),
        }}
      >
        <SourceCode filePath="test/path" uncoveredLines={[]} />
      </MockUploadedKeysProvider>
    );

    expect(
      await screen.findByText(/No content in the file/i)
    ).toBeInTheDocument();
  });
});
