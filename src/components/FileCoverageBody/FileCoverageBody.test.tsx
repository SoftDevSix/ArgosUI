import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { UploadedKeysProvider } from "../../context/UploadedKeysContext";
import FileCoverageBody from "./FileCoverageBody";
import { vi } from "vitest";

describe("FileCoverageBody component", () => {
  it("renders the loading state initially", () => {
    render(
      <UploadedKeysProvider>
        <BrowserRouter>
          <FileCoverageBody
            data={null}
            loading={true}
            error={null}
            selectedFilePath={null}
            setSelectedFilePath={vi.fn()}
          />
        </BrowserRouter>
      </UploadedKeysProvider>
    );

    expect(screen.getByText("Getting file info...")).toBeInTheDocument();
  });
});
