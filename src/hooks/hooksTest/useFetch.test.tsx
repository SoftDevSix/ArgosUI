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
});
