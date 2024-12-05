import { renderHook, act } from "@testing-library/react";
import useFetch from "../useFetch";
import { describe, it, vi } from "vitest";

describe("useFetch hook", () => {
  it("fetches data successfully", async () => {
    const mockData = "Mock response";
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValueOnce({
        ok: true,
        text: vi.fn().mockResolvedValueOnce(mockData),
      })
    );

    const { result } = renderHook(() =>
      useFetch<string>("https://example.com")
    );

    await act(async () => result.current);

    expect(fetch).toHaveBeenCalledWith("https://example.com");
    expect(result.current).toEqual({
      data: mockData,
      loading: false,
      error: null,
    });
  });

  it("returns initial state when url is null", async () => {
    const { result } = renderHook(() => useFetch<string>(null));

    expect(result.current).toEqual({
      data: null,
      loading: true,
      error: null,
    });
  });

  it("returns initial state when url is undefined", async () => {
    const { result } = renderHook(() => useFetch<string>(undefined as any));

    expect(result.current).toEqual({
      data: null,
      loading: true,
      error: null,
    });
  });

  it("throws error when response is not ok", async () => {
    const mockError = "Internal Server Error";
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValueOnce({
        ok: false,
        statusText: mockError,
      })
    );

    const { result } = renderHook(() =>
      useFetch<string>("https://example.com")
    );

    await act(async () => result.current);

    expect(result.current).toEqual({
      data: null,
      loading: false,
      error: `Error: ${mockError}`,
    });
  });

  it("handles fetch error and sets the error message", async () => {
    const mockErrorMessage = "Network Error";
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValueOnce(new Error(mockErrorMessage))
    );

    const { result } = renderHook(() =>
      useFetch<string>("https://example.com")
    );

    await act(async () => result.current);

    expect(fetch).toHaveBeenCalledWith("https://example.com");
    expect(result.current).toEqual({
      data: null,
      loading: false,
      error: mockErrorMessage,
    });
  });
});
