import { renderHook } from "@testing-library/react";
import { UploadedKeysProvider } from "../../context/UploadedKeysContext";
import { useUploadedKeys } from "../UseUploadedKeys";

/* eslint-disable @typescript-eslint/no-unused-expressions */
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
    const { result } = renderHook(() => useUploadedKeys(), {
      wrapper: () => <></>,
    });

    try {
      result.current;
    } catch (e) {
      expect(e).toEqual(
        new Error("useUploadedKeys must be used inside an UploadedKeysProvider")
      );
    }
  });
});
