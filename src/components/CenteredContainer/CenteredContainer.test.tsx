import { render, screen } from "@testing-library/react";
import CenteredContainer from "./CenteredContainer";
import { describe, expect, it } from "vitest";

describe("CenteredContainer", () => {
  it("renders the children passed to it", () => {
    render(
      <CenteredContainer>
        <div>Test Child</div>
      </CenteredContainer>
    );

    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  it("applies the correct styling for centering", () => {
    const { container } = render(
      <CenteredContainer>
        <div>Child Element</div>
      </CenteredContainer>
    );

    const box = container.firstChild;
    expect(box).toHaveStyle("display: flex");
    expect(box).toHaveStyle("align-items: center");
    expect(box).toHaveStyle("flex-direction: column");
  });

  it("handles multiple children correctly", () => {
    render(
      <CenteredContainer>
        <div>Child One</div>
        <div>Child Two</div>
      </CenteredContainer>
    );

    expect(screen.getByText("Child One")).toBeInTheDocument();
    expect(screen.getByText("Child Two")).toBeInTheDocument();
  });
});
