import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import { UploadedKeysProvider } from "../../context/UploadedKeysContext";
import { vi } from "vitest";
import { PageNames } from "../../utils/pageNames";

const renderWithRouterAndContext = (ui: React.ReactElement) => {
  return render(
    <UploadedKeysProvider>
      <MemoryRouter initialEntries={[PageNames.HOME]}>{ui}</MemoryRouter>
    </UploadedKeysProvider>
  );
};

describe("WelcomePage", () => {
  it("Should renderize principal elements", () => {
    renderWithRouterAndContext(<WelcomePage />);

    const title = screen.getByText("Argos");
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText("The code quality tool for better code");
    expect(subtitle).toBeInTheDocument();

    const button = screen.getByRole("button", { name: "Analyze your project" });
    expect(button).toBeInTheDocument();
  });
  it("should show the Splash component when loading", async () => {
    vi.mock("../../hooks/UseUploadedKeys", () => ({
      useUploadedKeys: () => ({ hasUploadedKeys: false }),
    }));

    renderWithRouterAndContext(<WelcomePage />);

    const button = screen.getByRole("button", { name: "Analyze your project" });
    fireEvent.click(button);

    expect(screen.getByText("Checking project data...")).toBeInTheDocument();
  });
});
