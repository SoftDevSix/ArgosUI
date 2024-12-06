import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageNames } from "./utils/pageNames";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import Error from "./pages/Error";
import theme from "./utils/theme";
import Header from "./components/Header";
import OverviewDocumentationPage from "./pages/OverviewDocumentation";
import SetupAgentGradleDocumentation from "./pages/SetUpGradleDocumentation/SetUpAgentGradleDocumentation";
import SetUpMavenDocumentation from "./pages/SetUpMavenDocumentation/SetUpMavenDocumentation";
import InstallationPage from "./pages/installation";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div
          style={{ display: "flex", flexDirection: "column", height: "100vh" }}
        >
          <Header />
          <div style={{ flex: 1, overflow: "auto" }}>
            <Routes>
              <Route path={PageNames.HOME} Component={Home} />
              <Route path={PageNames.ERROR_404} Component={Error} />
              <Route path="/overview" element={<OverviewDocumentationPage />} />
              <Route path="/maven" element={<SetUpMavenDocumentation />} />
              <Route
                path="/gradle"
                element={<SetupAgentGradleDocumentation />}
              />
              <Route path="/installation" element={<InstallationPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
