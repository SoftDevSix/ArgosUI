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
import { useUploadedKeys } from "./hooks/UseUploadedKeys";
import ProjectSetupPage from "./pages/ProjectSetup";
import NavDrawer from "./components/NavDrawer";
import FileCoverage from "./pages/FileCoverage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Splash from "./components/Splash";

const App: React.FC = () => {
  const location = useLocation();
  const { hasUploadedKeys } = useUploadedKeys();

  const showSidebar = ![PageNames.HOME, `/${PageNames.PROJECT_SETUP}`].includes(
    location.pathname
  );

  if (hasUploadedKeys === null) {
    return <Splash />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        {showSidebar && <NavDrawer projectName="Hardcoded Text" />}
        <Routes>
          <Route path={PageNames.HOME} Component={WelcomePage} />
          <Route
            path={PageNames.PROJECT_SETUP}
            Component={() => (
              <ProtectedRoute
                allowAccess={!hasUploadedKeys}
                redirectTo={PageNames.COVERAGE_RESULTS}
                Component={ProjectSetupPage}
              />
            )}
          />
          <Route
            path={PageNames.FILE_COVERAGE}
            Component={() => (
              <ProtectedRoute
                allowAccess={hasUploadedKeys}
                redirectTo={PageNames.HOME}
                Component={FileCoverage}
              />
            )}
          />
          <Route
            path={PageNames.COVERAGE_RESULTS}
            Component={() => (
              <ProtectedRoute
                allowAccess={hasUploadedKeys}
                redirectTo={PageNames.HOME}
                Component={CoverageResults}
              />
            )}
          />
          <Route path={PageNames.ERROR_404} Component={Error} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export const WrappedApp: React.FC = () => (
  <HeaderProvider>
    <UploadedKeysProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UploadedKeysProvider>
  </HeaderProvider>
);

export default WrappedApp;
