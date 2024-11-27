import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import WelcomePage from "./WelcomePage";

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("WelcomePage", () => {
  it("Should renderize principal elements", () => {
    renderWithRouter(<WelcomePage />);

    const title = screen.getByText("Argos");
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText("The code quality tool for better code");
    expect(subtitle).toBeInTheDocument();

    const button = screen.getByRole("button", { name: "Analyze your project" });
    expect(button).toBeInTheDocument();
  });

  it("Should go to Home when clicking button", async () => {
    const user = userEvent.setup();

    renderWithRouter(<WelcomePage />);

    const button = screen.getByRole("button", { name: "Analyze your project" });

    await user.click(button);

    expect(window.location.pathname).toBe("/");
  });
});
