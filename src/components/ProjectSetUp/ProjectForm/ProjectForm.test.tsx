import { render, screen, fireEvent } from "@testing-library/react";
import { vi, expect, it, describe } from "vitest";
import ProjectForm from "./ProjectForm";
import { ProjectInfoData } from "../../../types/interfaces";

describe("ProjectForm Component", () => {
  const mockSetProjectData = vi.fn();
  const mockSetFormData = vi.fn();
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
        setFormData={mockSetFormData}
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
        setFormData={mockSetFormData}
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
        setFormData={mockSetFormData}
      />
    );

    const uploaderButton = screen.getByRole("button", {
      name: /upload the project/i,
    });

    expect(uploaderButton).toBeInTheDocument();
  });
});
