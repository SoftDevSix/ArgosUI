import { describe, it, expect, vi, beforeEach } from "vitest";
import uploadZipProject from "./FileManagerService";

const MOCK_FILE_MANAGER_API = "https://file-manager-api";
const MOCK_COVERAGE_API = "https://coverage-api";
const UPLOADED_KEY = "uploadedKey";

vi.mock("../utils/constants", () => ({
  FILE_MANAGER_API_BASE_URL: "https://file-manager-api",
  COVERAGE_API_BASE_URL: "https://coverage-api",
  UPLOADED_KEY: "uploadedKey",
}));

describe("uploadZipProject", () => {
  const mockFormData = new FormData();
  const mockSetUploadedKeys = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should upload the zip file and return the project ID on success", async () => {
    const mockProjectId = UPLOADED_KEY;

    global.fetch = vi
      .fn()
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ projectId: mockProjectId }),
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
      } as Response);

    const result = await uploadZipProject(mockFormData, mockSetUploadedKeys);

    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledWith(
      `${MOCK_FILE_MANAGER_API}/fileManager/uploadZip`,
      expect.objectContaining({ method: "POST", body: mockFormData })
    );
    expect(fetch).toHaveBeenCalledWith(
      `${MOCK_COVERAGE_API}/coverage/create-notification/projectCreationNotification?id=${mockProjectId}`,
      expect.objectContaining({ method: "POST" })
    );

    expect(mockSetUploadedKeys).toHaveBeenCalledWith(mockProjectId);
    expect(result).toBe(mockProjectId);
  });

  it("should return null if file upload fails", async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: false,
      text: async () => "Upload error",
    } as Response);

    const result = await uploadZipProject(mockFormData, mockSetUploadedKeys);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toBeNull();
    expect(mockSetUploadedKeys).not.toHaveBeenCalled();
  });

  it("should return null if an exception occurs", async () => {
    global.fetch = vi.fn().mockRejectedValueOnce(new Error("Network error"));

    const result = await uploadZipProject(mockFormData, mockSetUploadedKeys);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toBeNull();
    expect(mockSetUploadedKeys).not.toHaveBeenCalled();
  });
});
