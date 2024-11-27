import { render, screen, fireEvent } from "@testing-library/react";
import ProjectUploader from "./ProjectUploader";
import { vi, expect, it, describe } from "vitest";

describe("ProjectUploader Component", () => {
  const mockSetProjectFiles = vi.fn();

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
      type: "text/plain",
    });

    Object.defineProperty(file, "webkitRelativePath", {
      value: filePath,
    });

    fireEvent.change(input, { target: { files: [file] } });
    return file;
  };

  it("renders the component with initial state", () => {
    render(<ProjectUploader setProjectFiles={mockSetProjectFiles} />);

    expect(screen.getByText(/no folder selected/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /upload the project/i })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /delete/i })
    ).not.toBeInTheDocument();
  });

  it("allows selecting a folder and updates the state", async () => {
    render(<ProjectUploader setProjectFiles={mockSetProjectFiles} />);

    const file = uploadFile("file1.txt", "folder/file1.txt");

    expect(await screen.findByText(/\/folder/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /delete/i })).toBeInTheDocument();

    expect(mockSetProjectFiles).toHaveBeenCalledTimes(1);
    expect(mockSetProjectFiles).toHaveBeenCalledWith([file]);
  });

  it("handles deleting the selected folder", async () => {
    render(<ProjectUploader setProjectFiles={mockSetProjectFiles} />);

    uploadFile("file1.txt", "folder/file1.txt");

    expect(await screen.findByText(/\/folder/i)).toBeInTheDocument();

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);

    expect(screen.getByText(/no folder selected/i)).toBeInTheDocument();
    expect(mockSetProjectFiles).toHaveBeenCalledWith(null);
  });
});
