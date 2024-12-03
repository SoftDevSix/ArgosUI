import { render, screen } from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
import ProjectSetUp from "./ProjectSetUp";
import { expect, it, describe } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { UploadedKeysProvider } from "../../context/UploadedKeysContext";

const renderWithRouterAndContext = () => {
  return render(
    <BrowserRouter>
      <UploadedKeysProvider>
        <ProjectSetUp />
      </UploadedKeysProvider>
    </BrowserRouter>
  );
};

const uploadFile = async (
  user: UserEvent,
  filePath: string,
  fileContent = "dummy content"
) => {
  const fileInput = screen.getByLabelText(/upload the project/i);
  const mockFile = new File([fileContent], filePath, {
    type: "application/zip",
  });

  Object.defineProperty(mockFile, "webkitRelativePath", {
    value: filePath,
  });

  await user.upload(fileInput, mockFile);
};

describe("ProjectSetUp Component", () => {
  it("renders the component with the initial UI", () => {
    renderWithRouterAndContext();

    screen.debug();

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
    renderWithRouterAndContext();

    await uploadFile(user, "folder/file.zip");

    expect(await screen.findByText(/\/folder/i)).toBeInTheDocument();
  });

  it("displays the delete button after uploading files", async () => {
    const user = userEvent.setup();
    renderWithRouterAndContext();

    await uploadFile(user, "folder/file.zip");

    expect(
      screen.getByLabelText("delete-uploaded-project")
    ).toBeInTheDocument();
  });

  it("resets the file state when the delete button is clicked", async () => {
    const user = userEvent.setup();
    renderWithRouterAndContext();

    await uploadFile(user, "folder/file.zip");

    const deleteButton = screen.getByLabelText("delete-uploaded-project");
    await user.click(deleteButton);

    expect(screen.getByText(/no zip file selected/i)).toBeInTheDocument();
  });
});
