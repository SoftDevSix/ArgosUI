import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import DrawerContent from "./DrawerContent";
import { BrowserRouter } from "react-router-dom";
import { menuOptionList } from "../../../utils/drawerMenuOptions";
import { rgbToHex } from "@mui/material";
import { COLORS } from "../../../utils/styleConstants";
import * as ReactRouterDom from "react-router-dom";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = (await importOriginal()) as typeof ReactRouterDom;
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("DrawerContent Component", () => {
  it("renders the project name", () => {
    render(
      <BrowserRouter>
        <DrawerContent projectName="Test Project" />
      </BrowserRouter>
    );

    const projectName = screen.getByTestId("project-name");
    expect(projectName).toBeInTheDocument();
    expect(projectName).toHaveTextContent("Test Project");
  });

  it("renders the menu options correctly", () => {
    render(
      <BrowserRouter>
        <DrawerContent projectName="Test Project" />
      </BrowserRouter>
    );

    menuOptionList.forEach((option) => {
      const menuItem = screen.getByTestId(`menu-option-${option.name}`);
      expect(menuItem).toBeInTheDocument();
      expect(menuItem).toHaveTextContent(option.name);
    });
  });

  it("highlights the selected option", () => {
    render(
      <BrowserRouter>
        <DrawerContent projectName="Test Project" />
      </BrowserRouter>
    );

    const projectCoverageOption = screen.getByTestId(
      `menu-option-${menuOptionList[0].name}`
    );
    fireEvent.click(projectCoverageOption);

    const computedStyle = window.getComputedStyle(projectCoverageOption);
    const hexColor = rgbToHex(computedStyle.backgroundColor).toUpperCase();

    expect(hexColor).toBe(COLORS.PRIMARY_HOVER);
  });

  it("calls navigate when a menu option is clicked", () => {
    render(
      <BrowserRouter>
        <DrawerContent projectName="Test Project" />
      </BrowserRouter>
    );

    const projectCoverageOption = screen.getByTestId(
      `menu-option-${menuOptionList[0].name}`
    );
    fireEvent.click(projectCoverageOption);

    expect(mockNavigate).toHaveBeenCalledWith(menuOptionList[0].path);
  });

  it("calls navigate with '/' when logout button is clicked", () => {
    render(
      <BrowserRouter>
        <DrawerContent projectName="Test Project" />
      </BrowserRouter>
    );

    const exitButton = screen.getByTestId("exit-button");
    fireEvent.click(exitButton);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
