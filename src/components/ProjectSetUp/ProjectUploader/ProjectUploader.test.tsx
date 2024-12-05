import { render, screen, fireEvent } from "@testing-library/react";
import ProjectUploader from "./ProjectUploader";
import { vi, expect, it, describe } from "vitest";

describe("ProjectUploader Component", () => {
  const mockSetFormData = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  const uploadFile = (
    fileName: string,
    filePath: string,
    fileContent = "dummy content"
  ) => {
    const input = screen.getByLabelText(/upload the project/i);
    const file = new File([fileContent], fileName, {
      type: "application/zip",
    });

    Object.defineProperty(file, "webkitRelativePath", {
      value: filePath,
    });

    fireEvent.change(input, { target: { files: [file] } });
    return file;
  };

  it("renders the component with initial state", () => {
    render(<ProjectUploader setFormData={mockSetFormData} />);

    expect(screen.getByText(/no zip file selected/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /upload the project/i })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /delete/i })
    ).not.toBeInTheDocument();
  });

  it("allows selecting a zip and updates the state", async () => {
    render(<ProjectUploader setFormData={mockSetFormData} />);

    const file = uploadFile("file1.zip", "folder/file1.zip");

    expect(screen.getByRole("button", { name: /delete/i })).toBeInTheDocument();

    expect(mockSetFormData).toHaveBeenCalledTimes(1);
    const formData = new FormData();
    formData.append("file", file);
    expect(mockSetFormData).toHaveBeenCalledWith(formData);
  });

  it("handles deleting the selected folder", async () => {
    render(<ProjectUploader setFormData={mockSetFormData} />);

    uploadFile("file1.zip", "folder/file1.zip");

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);

    expect(screen.getByText(/no zip file selected/i)).toBeInTheDocument();
  });

  it("shows an alert when the uploaded file is not a ZIP file", () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

    render(<ProjectUploader setFormData={mockSetFormData} />);

    const input = screen.getByLabelText(/upload the project/i);
    const invalidFile = new File(["dummy content"], "file.txt", {
      type: "text/plain",
    });

    fireEvent.change(input, { target: { files: [invalidFile] } });

    expect(alertMock).toHaveBeenCalledWith("Please upload a valid ZIP file.");

    expect(mockSetFormData).not.toHaveBeenCalled();

    alertMock.mockRestore();
  });
});
