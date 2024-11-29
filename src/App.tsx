import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { PageNames } from "./utils/pageNames";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import Error from "./pages/Error";
import theme from "./utils/theme";
import CoverageResults from "./pages/CoverageResults";
import WelcomePage from "./pages/WelcomePage";
import { HeaderProvider } from "./components/Header/HeaderContext";
import { UploadedKeysProvider } from "./context/UploadedKeysContext";
import ProjectSetupPage from "./pages/ProjectSetup";
import NavDrawer from "./components/NavDrawer";
import FileCoverage from "./pages/FileCoverage";

const App: React.FC = () => {
  const location = useLocation();

  const showSidebar = ![PageNames.HOME, `/${PageNames.PROJECT_SETUP}`].includes(
    location.pathname
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UploadedKeysProvider>
        <Box sx={{ display: "flex" }}>
          {showSidebar && <NavDrawer projectName="Harcoded Text" />}
          <Routes>
            <Route path={PageNames.HOME} Component={WelcomePage} />
            <Route
              path={PageNames.PROJECT_SETUP}
              Component={ProjectSetupPage}
            />
            <Route path={PageNames.FILE_COVERAGE} Component={FileCoverage} />
            <Route
              path={PageNames.COVERAGE_RESULTS}
              Component={CoverageResults}
            />
            <Route path={PageNames.ERROR_404} Component={Error} />
          </Routes>
        </Box>
      </UploadedKeysProvider>
    </ThemeProvider>
  );
};

export const WrappedApp: React.FC = () => (
  <HeaderProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HeaderProvider>
);

export default WrappedApp;
