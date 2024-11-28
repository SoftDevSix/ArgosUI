const API_BASE_URL = process.env.FILE_MANAGER_API_BASE_URL;

const uploadDirectory = async (localDir: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/upload`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ localDir }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    localStorage.setItem("uploadedKeys", JSON.stringify(data));
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      alert(`Error while uploading directory: ${error.message}`);
    } else {
      alert("An unknown error occurred while uploading the directory.");
    }
    return null;
  }
};

export default uploadDirectory;
