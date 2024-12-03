import { vi, it, expect, describe, beforeEach } from "vitest";
import uploadZipProject from "../FileManagerService";
/* eslint-disable  @typescript-eslint/no-explicit-any */
beforeEach(() => {
  global.localStorage = {
    getItem: vi.fn().mockImplementation((key) => {
      return key === "uploadedKeys" ? "123" : null;
    }),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
    length: 0,
    key: vi.fn(),
  };
});

describe("uploadZipProject function", () => {
  it("should upload a zip file and handle success", async () => {
    const mockSetUploadedKeys = vi.fn();
    const formData = new FormData();
    formData.append("file", new Blob(), "dummy.zip");

    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({ projectId: 123 }),
    }) as any;

    const result = await uploadZipProject(formData, mockSetUploadedKeys);

    expect(result).toBe("123");
    expect(mockSetUploadedKeys).toHaveBeenCalledWith("123");
    expect(localStorage.setItem).toHaveBeenCalledWith("uploadedKeys", "123");
  });

  it("should handle file upload failure", async () => {
    const mockSetUploadedKeys = vi.fn();
    const formData = new FormData();
    formData.append("file", new Blob(), "dummy.zip");

    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: false,
      text: async () => "Error message",
    }) as any;

    const result = await uploadZipProject(formData, mockSetUploadedKeys);

    expect(result).toBeNull();
    expect(mockSetUploadedKeys).not.toHaveBeenCalled();
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });
});
