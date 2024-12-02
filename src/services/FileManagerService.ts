import {
  COVERAGE_API_BASE_URL,
  FILE_MANAGER_API_BASE_URL,
  UPLOADED_KEY,
} from "../utils/constants";

const uploadZipProject = async (
  formData: FormData,
  setUploadedKeys: (key: string) => void
): Promise<string | null> => {
  try {
    const uploadResponse = await fetch(
      `${FILE_MANAGER_API_BASE_URL}/fileManager/uploadZip`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!uploadResponse.ok) {
      const error = await uploadResponse.text();
      throw new Error(`File upload failed: ${error}`);
    }

    const result = await uploadResponse.json();

    await fetch(
      `${COVERAGE_API_BASE_URL}/coverage/create-notification/projectCreationNotification?id=${result.projectId.toString()}`,
      {
        method: "POST",
      }
    );

    localStorage.setItem(UPLOADED_KEY, result.projectId.toString());
    setUploadedKeys(result.projectId.toString());

    return result.projectId.toString();
  } catch {
    return null;
  }
};

export default uploadZipProject;
