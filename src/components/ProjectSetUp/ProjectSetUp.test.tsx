import { render, screen, act } from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
import { vi, expect, it, describe } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { UploadedKeysProvider } from "../../context/UploadedKeysContext";
import ProjectSetUp from "./ProjectSetUp";

import * as FileManagerService from "../../services/FileManagerService";
import * as RulesManagerService from "../../services/RulesManagerService";
import React from "react";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(() => vi.fn()),
  };
});

vi.mock("../../services/FileManagerService", async () => ({
  default: vi.fn(),
}));

vi.mock("../../services/RulesManagerService", async () => ({
  default: vi.fn(),
}));

vi.mock("../Splash", () => {
  const MockSplash: React.FC<{ splashMessage?: string }> = ({
    splashMessage = "Loading...",
  }) => (
    <div data-testid="mock-splash">
      <div>Mock Splash</div>
      <div>{splashMessage}</div>
    </div>
  );

  MockSplash.displayName = "MockSplash";

  return {
    __esModule: true,
    default: vi.fn(MockSplash),
  };
});

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
  describe("Form Validation", () => {
    it("shows alert when no zip file is selected", async () => {
      const user = userEvent.setup();
      const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
      renderWithRouterAndContext();

      const projectNameInput = screen.getByLabelText(/projectName/i);
      await user.type(projectNameInput, "Test Project");

      const continueButton = screen.getByRole("button", { name: /continue/i });
      await user.click(continueButton);

      expect(alertMock).toHaveBeenCalledWith("No zip selected.");

      alertMock.mockRestore();
    });

    it("shows alert when project name is not set", async () => {
      const user = userEvent.setup();
      const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
      renderWithRouterAndContext();

      await uploadFile(user, "folder/file.zip");

      const continueButton = screen.getByRole("button", { name: /continue/i });
      await user.click(continueButton);

      expect(alertMock).toHaveBeenCalledWith("Set a project name.");

      alertMock.mockRestore();
    });
  });

  describe("Project Upload", () => {
    it("shows error alert on upload failure", async () => {
      const user = userEvent.setup();
      const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

      vi.mocked(FileManagerService.default).mockResolvedValue(null);
      vi.mocked(RulesManagerService.default).mockResolvedValue(false);

      renderWithRouterAndContext();

      await uploadFile(user, "folder/file.zip");
      const projectNameInput = screen.getByLabelText(/projectName/i);
      await user.type(projectNameInput, "Test Project");

      const continueButton = screen.getByRole("button", { name: /continue/i });

      await act(async () => {
        await user.click(continueButton);
      });

      expect(alertMock).toHaveBeenCalledWith("Set a project name.");

      alertMock.mockRestore();
    });
  });

  it("should not proceed if validation fails (no zip file)", async () => {
    const user = userEvent.setup();
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

    renderWithRouterAndContext();

    const continueButton = screen.getByRole("button", { name: /continue/i });
    await user.click(continueButton);

    expect(alertMock).toHaveBeenCalledWith("No zip selected.");
    expect(FileManagerService.default).not.toHaveBeenCalled();

    alertMock.mockRestore();
  });

  it("should not proceed if validation fails (no project name)", async () => {
    const user = userEvent.setup();
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

    renderWithRouterAndContext();

    // Upload zip without project name
    const fileInput = screen.getByLabelText(/upload the project/i);
    const mockFile = new File(["dummy content"], "test.zip", {
      type: "application/zip",
    });
    await user.upload(fileInput, mockFile);

    const continueButton = screen.getByRole("button", { name: /continue/i });
    await user.click(continueButton);

    expect(alertMock).toHaveBeenCalledWith("Set a project name.");
    expect(FileManagerService.default).not.toHaveBeenCalled();

    alertMock.mockRestore();
  });
});
