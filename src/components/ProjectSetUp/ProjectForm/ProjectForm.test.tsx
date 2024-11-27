import { render, screen, fireEvent } from "@testing-library/react";
import { vi, expect, it, describe } from "vitest";
import ProjectForm from "./ProjectForm";
import { ProjectInfoData } from "../../../types/interfaces";

describe("ProjectForm Component", () => {
  const mockSetProjectData = vi.fn();
  const mockSetProjectFiles = vi.fn();
  const projectData: ProjectInfoData = {
    projectName: "",
    projectDescription: "",
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders all form fields", () => {
    render(
      <ProjectForm
        projectData={projectData}
        setProjectData={mockSetProjectData}
        setProjectFiles={mockSetProjectFiles}
      />
    );

    const projectNameField = screen.getByPlaceholderText(/argos/i);
    const projectDescriptionField =
      screen.getByPlaceholderText(/code reviewing tool/i);

    expect(projectNameField).toBeInTheDocument();
    expect(projectDescriptionField).toBeInTheDocument();
  });

  it("calls setProjectData when a field value changes", () => {
    render(
      <ProjectForm
        projectData={projectData}
        setProjectData={mockSetProjectData}
        setProjectFiles={mockSetProjectFiles}
      />
    );

    const projectNameField = screen.getByPlaceholderText(/argos/i);

    fireEvent.change(projectNameField, { target: { value: "New Project" } });

    expect(mockSetProjectData).toHaveBeenCalledTimes(1);
  });

  it("renders the ProjectUploader component", () => {
    render(
      <ProjectForm
        projectData={projectData}
        setProjectData={mockSetProjectData}
        setProjectFiles={mockSetProjectFiles}
      />
    );

    const uploaderButton = screen.getByRole("button", {
      name: /upload the project/i,
    });

    expect(uploaderButton).toBeInTheDocument();
  });

  it("calls setProjectFiles when a file is uploaded", () => {
    render(
      <ProjectForm
        projectData={projectData}
        setProjectData={mockSetProjectData}
        setProjectFiles={mockSetProjectFiles}
      />
    );

    const fileInput = screen.getByLabelText(/upload the project/i);
    const file = new File(["test file content"], "directory/test-file.java", {
      type: "text/plain",
    });

    fireEvent.change(fileInput, { target: { files: [file] } });

    expect(mockSetProjectFiles).toHaveBeenCalledTimes(1);
    expect(mockSetProjectFiles).toHaveBeenCalledWith([file]);
  });
});
