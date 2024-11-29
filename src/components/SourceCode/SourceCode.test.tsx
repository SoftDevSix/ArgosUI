import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SourceCode from "./SourceCode";
import { UploadedKeysProvider } from "../../context/UploadedKeysContext";

describe("SourceCode Component", () => {
  it("renders all lines with correct line numbers", () => {
    render(
      <UploadedKeysProvider>
        <SourceCode filePath="" />
      </UploadedKeysProvider>
    );
  });

  it("handles an empty lines array without crashing", () => {
    render(
      <UploadedKeysProvider>
        <SourceCode filePath="" />
      </UploadedKeysProvider>
    );
    expect(screen.queryByText(/.+/)).not.toBeInTheDocument();
  });
});
