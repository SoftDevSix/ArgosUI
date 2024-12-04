import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageNames } from "./utils/pageNames";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import Error from "./pages/Error";
import theme from "./utils/theme";
import Header from "./components/Header";
import OverviewPage from "./pages/Overview/Overview";
import SetupAgentInMaven from "./pages/setupMaven/SetupAgentInMaven";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path={PageNames.HOME} Component={Home} />
            <Route path={PageNames.ERROR_404} Component={Error} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/maven" element={<SetupAgentInMaven />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
