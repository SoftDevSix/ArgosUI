import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import { UploadedKeysProvider } from "../../context/UploadedKeysContext";

const renderWithRouterAndContext = (ui: React.ReactElement) => {
  return render(
    <UploadedKeysProvider>
      <BrowserRouter>{ui}</BrowserRouter>
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
});
