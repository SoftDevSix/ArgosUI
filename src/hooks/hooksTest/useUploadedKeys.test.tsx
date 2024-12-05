import { renderHook } from "@testing-library/react";
import { UploadedKeysProvider } from "../../context/UploadedKeysContext";
import { useUploadedKeys } from "../UseUploadedKeys";
import { vi } from "vitest";

describe("useUploadedKeys hook", () => {
  it("does not throw error when used inside of UploadedKeysProvider", () => {
    const { result } = renderHook(() => useUploadedKeys(), {
      wrapper: ({ children }) => (
        <UploadedKeysProvider>{children}</UploadedKeysProvider>
      ),
    });

    expect(result.current).toBeDefined();
  });

  it("throws error when used outside of UploadedKeysProvider", () => {
    const originalConsoleError = console.error;
    console.error = vi.fn();

    expect(() => {
      renderHook(() => useUploadedKeys());
    }).toThrow("useUploadedKeys must be used inside an UploadedKeysProvider");

    console.error = originalConsoleError;
  });
});
