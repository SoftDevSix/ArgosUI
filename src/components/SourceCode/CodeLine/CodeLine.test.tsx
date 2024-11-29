import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CodeLine from "./CodeLine";
import { UploadedKeysProvider } from "../../../context/UploadedKeysContext";

describe("CodeLine Component", () => {
  it("renders line and lineNumber", () => {
    render(
      <UploadedKeysProvider>
        <CodeLine
          line="console.log('Hello');"
          withoutCoverage={false}
          lineNumber={1}
        />
      </UploadedKeysProvider>
    );
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("renders the line without crashing when withoutCoverage is true", () => {
    render(
      <UploadedKeysProvider>
        <CodeLine
          line="console.log('Hello');"
          withoutCoverage={true}
          lineNumber={2}
        />
      </UploadedKeysProvider>
    );
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
