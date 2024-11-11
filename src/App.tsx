import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageNames } from "./utils/pageNames";
import Home from "./pages/Home";
import Error from "./pages/Error";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={PageNames.HOME} Component={Home} />
          <Route path={PageNames.ERROR_404} Component={Error} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
