import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageNames } from "./utils/pageNames";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import Error from "./pages/Error";
import theme from "./utils/theme";
import Header from "./components/Header";
import ProjectCoveragePage from "./pages/ProjectCoverage";
import { UploadedKeysProvider } from "./context/UploadedKeysContext";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <UploadedKeysProvider>
          <Header />
          <Container>
            <Routes>
              <Route path={PageNames.HOME} Component={Home} />
              <Route
                path={PageNames.PROJECT_COVERAGE}
                Component={ProjectCoveragePage}
              />
              <Route path={PageNames.ERROR_404} Component={Error} />
            </Routes>
          </Container>
        </UploadedKeysProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
