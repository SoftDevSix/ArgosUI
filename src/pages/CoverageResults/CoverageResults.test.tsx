import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CoverageResults from "../CoverageResults";
import { UploadedKeysProvider } from "../../context/UploadedKeysContext";

describe("CoverageResults component", () => {
  it("renders the loading state initially", () => {
    render(
      <UploadedKeysProvider>

        <BrowserRouter>
          <CoverageResults />
        </BrowserRouter>
      </UploadedKeysProvider>
    );

    expect(screen.getByText("Getting results...")).toBeInTheDocument();
  });
});
