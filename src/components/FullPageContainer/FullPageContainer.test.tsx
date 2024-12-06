import { render, screen } from "@testing-library/react";
import FullPageContainer from "./FullPageContainer";
import { describe, expect, it } from "vitest";

describe("FullPageContainer Component", () => {
  it("should render children correctly", () => {
    const testContent = "Hello, World!";

    render(
      <FullPageContainer>
        <div>{testContent}</div>
      </FullPageContainer>
    );

    const contentElement = screen.getByText(testContent);
    expect(contentElement).toBeInTheDocument();
  });

  it("should apply correct className", () => {
    const { container } = render(
      <FullPageContainer>
        <div>Test</div>
      </FullPageContainer>
    );

    expect(container.firstChild).toHaveClass("_fullPageContainer_16842b");
  });

  it("should render without children", () => {
    const { container } = render(<FullPageContainer />);

    expect(container.firstChild).toBeInTheDocument();
  });
});
