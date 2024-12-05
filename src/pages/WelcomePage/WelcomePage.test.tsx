import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
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
  it("should navigate to COVERAGE_RESULTS if hasUploadedKeys is true", async () => {
    vi.mock("../../hooks/UseUploadedKeys", () => ({
      useUploadedKeys: () => ({ hasUploadedKeys: true }),
    }));

    renderWithRouterAndContext(
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path={PageNames.COVERAGE_RESULTS}
          element={<div>Coverage Results</div>}
        />
      </Routes>
    );

    const button = screen.getByRole("button", { name: "Analyze your project" });
    fireEvent.click(button);

    await waitFor(() => screen.getByText("Checking project data..."));
  });

  it("should navigate to PROJECT_SETUP if hasUploadedKeys is false", async () => {
    vi.mock("../../hooks/UseUploadedKeys", () => ({
      useUploadedKeys: () => ({ hasUploadedKeys: false }),
    }));

    renderWithRouterAndContext(<WelcomePage />);

    const button = screen.getByRole("button", { name: "Analyze your project" });
    fireEvent.click(button);

    await waitFor(() => screen.getByText("Checking project data..."));
  });
});
