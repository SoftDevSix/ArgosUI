import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectSetUp from "./ProjectSetUp";
import { expect, it, describe } from "vitest";

describe("ProjectSetUp Component", () => {
  it("renders the component with the initial UI", () => {
    render(<ProjectSetUp />);

    expect(
      screen.getByRole("heading", { name: /project & rules setup/i })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/projectName/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/projectDescription/i)).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/argos/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/code reviewing tool/i)
    ).toBeInTheDocument();
  });

  it("handles project file uploads via the ProjectUploader", async () => {
    const user = userEvent.setup();
    render(<ProjectSetUp />);

    const fileInput = screen.getByLabelText(/upload the project/i);
    const mockFile = new File(["dummy content"], "folder/file.txt", {
      type: "text/plain",
    });

    Object.defineProperty(mockFile, "webkitRelativePath", {
      value: "folder/file.txt",
    });

    await user.upload(fileInput, mockFile);

    expect(await screen.findByText(/\/folder/i)).toBeInTheDocument();
  });

  it("displays the delete button after uploading files", async () => {
    const user = userEvent.setup();
    render(<ProjectSetUp />);

    const fileInput = screen.getByLabelText(/upload the project/i);
    const mockFile = new File(["dummy content"], "folder/file.txt", {
      type: "text/plain",
    });

    Object.defineProperty(mockFile, "webkitRelativePath", {
      value: "folder/file.txt",
    });

    await user.upload(fileInput, mockFile);

    expect(
      await screen.findByRole("button", { name: /delete/i })
    ).toBeInTheDocument();
  });

  it("resets the file state when the delete button is clicked", async () => {
    const user = userEvent.setup();
    render(<ProjectSetUp />);

    const fileInput = screen.getByLabelText(/upload the project/i);
    const mockFile = new File(["dummy content"], "folder/file.txt", {
      type: "text/plain",
    });

    Object.defineProperty(mockFile, "webkitRelativePath", {
      value: "folder/file.txt",
    });

    await user.upload(fileInput, mockFile);

    const deleteButton = await screen.findByRole("button", { name: /delete/i });
    await user.click(deleteButton);

    expect(screen.getByText(/no folder selected/i)).toBeInTheDocument();
  });
});
