import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageNames } from "./utils/pageNames";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Error from "./pages/Error";
import theme from "./utils/theme";
import Header from "./components/Header";
import WelcomePage from "./pages/WelcomePage";
import { HeaderProvider } from "./components/Header/HeaderContext";
import { useHeader } from "./hooks/HeaderHooks";
import ProjectCoveragePage from "./pages/ProjectCoverage";
import { UploadedKeysProvider } from "./context/UploadedKeysContext";

const App: React.FC = () => {
  const { showHeader } = useHeader();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <UploadedKeysProvider>
          {showHeader && <Header />}
          <Routes>
            <Route path={PageNames.HOME} Component={WelcomePage} />
            <Route
              path={PageNames.PROJECT_COVERAGE}
              Component={ProjectCoveragePage}
            />
            <Route path={PageNames.ERROR_404} Component={Error} />
          </Routes>
        </UploadedKeysProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export const WrappedApp: React.FC = () => (
  <HeaderProvider>
    <App />
  </HeaderProvider>
);

export default WrappedApp;
