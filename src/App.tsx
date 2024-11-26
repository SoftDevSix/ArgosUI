import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageNames } from "./utils/pageNames";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import Error from "./pages/Error";
import theme from "./utils/theme";
import Header from "./components/Header";
import WelcomePage from "./pages/WelcomePage";
import { HeaderProvider, useHeader } from "./components/Header/HeaderContext";

const App: React.FC = () => {

  const { showHeader } = useHeader();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
      {showHeader && <Header />}
        <Container>
          <Routes>
            <Route path={PageNames.HOME} Component={Home} />
            <Route path={PageNames.ERROR_404} Component={Error} />
            <Route path={PageNames.WELCOME} Component={WelcomePage} />
          </Routes>
        </Container>
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
