import { render, screen, fireEvent } from "@testing-library/react";
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

  it("shows the alert message when 'withoutCoverage' is true and toggled", () => {
    render(
      <UploadedKeysProvider>
        <CodeLine
          line="console.log('Test');"
          withoutCoverage={true}
          lineNumber={3}
        />
      </UploadedKeysProvider>
    );

    expect(
      screen.queryByText("(Line 3): This line is not covered by tests.")
    ).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("3"));
    expect(
      screen.getByText("(Line 3): This line is not covered by tests.")
    ).toBeInTheDocument();
  });

  it("dismisses the alert when 'HIDE' button is clicked", () => {
    render(
      <UploadedKeysProvider>
        <CodeLine
          line="console.log('Dismiss');"
          withoutCoverage={true}
          lineNumber={4}
        />
      </UploadedKeysProvider>
    );

    fireEvent.click(screen.getByText("4"));
    expect(
      screen.getByText("(Line 4): This line is not covered by tests.")
    ).toBeInTheDocument();
    fireEvent.click(screen.getByText("HIDE"));
    expect(
      screen.queryByText("(Line 4): This line is not covered by tests.")
    ).not.toBeInTheDocument();
  });
});
