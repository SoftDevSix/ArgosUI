import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/styles/global.css";
import WrappedApp from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WrappedApp />
  </StrictMode>
);
