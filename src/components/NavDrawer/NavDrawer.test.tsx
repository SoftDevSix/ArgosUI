import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavDrawer from "./NavDrawer";
import { ThemeProvider, createTheme } from "@mui/material/styles";

describe("NavDrawer Component", () => {
  it("should render NavDrawer without crashing", () => {
    const theme = createTheme();

    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <NavDrawer projectName="Test Project" />
        </MemoryRouter>
      </ThemeProvider>
    );
  });
});
