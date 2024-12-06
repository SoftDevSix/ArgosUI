import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { PageNames } from "./utils/pageNames";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import Error from "./pages/Error";
import theme from "./utils/theme";
import CoverageResults from "./pages/CoverageResults";
import WelcomePage from "./pages/WelcomePage";
import { UploadedKeysProvider } from "./context/UploadedKeysContext";
import { useUploadedKeys } from "./hooks/UseUploadedKeys";
import ProjectSetupPage from "./pages/ProjectSetup";
import FileCoverage from "./pages/FileCoverage";
import Header from "./components/Header";
import OverviewDocumentationPage from "./pages/OverviewDocumentation";
import SetupAgentGradleDocumentation from "./pages/SetUpGradleDocumentation/SetUpAgentGradleDocumentation";
import SetUpMavenDocumentation from "./pages/SetUpMavenDocumentation/SetUpMavenDocumentation";
import Splash from "./components/Splash";
import InstallationPage from "./pages/Installation";

const App: React.FC = () => {
  const location = useLocation();
  const { hasUploadedKeys } = useUploadedKeys();

  const showSidebar = ![PageNames.HOME, `/${PageNames.PROJECT_SETUP}`].includes(
    location.pathname
  );

  const hideHeaderButtons = [
    `/${PageNames.OVERVIEW}`,
    `/${PageNames.MAVEN}`,
    `/${PageNames.GRADLE}`,
    `/${PageNames.INSTALLATION}`,
  ].includes(location.pathname);

  if (hasUploadedKeys === null) {
    return <Splash />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display={"flex"} flexDirection={"column"}>
        {showSidebar && <Header hideButtons={hideHeaderButtons} />}
        <Routes>
          <Route path={PageNames.HOME} Component={WelcomePage} />
          <Route path={PageNames.PROJECT_SETUP} Component={ProjectSetupPage} />
          <Route path={PageNames.FILE_COVERAGE} Component={FileCoverage} />
          <Route
            path={PageNames.COVERAGE_RESULTS}
            Component={CoverageResults}
          />
          <Route path={PageNames.ERROR_404} Component={Error} />
          <Route
            path={PageNames.OVERVIEW}
            element={<OverviewDocumentationPage />}
          />
          <Route path={PageNames.MAVEN} element={<SetUpMavenDocumentation />} />
          <Route
            path={PageNames.GRADLE}
            element={<SetupAgentGradleDocumentation />}
          />
          <Route path={PageNames.INSTALLATION} element={<InstallationPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export const WrappedApp: React.FC = () => (
  <UploadedKeysProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UploadedKeysProvider>
);

export default WrappedApp;
