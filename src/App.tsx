import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageNames } from "./utils/pageNames";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import Error from "./pages/Error";
import theme from "./utils/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={PageNames.HOME} Component={Home} />
          <Route path={PageNames.ERROR_404} Component={Error} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
