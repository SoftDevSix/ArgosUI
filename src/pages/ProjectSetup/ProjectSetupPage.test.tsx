import { render, screen } from "@testing-library/react";
import ProjectSetupPage from "./ProjectSetupPage";
import { expect, it, vi } from "vitest";
import { describe } from "vitest";

vi.mock("../../components/ProjectSetUp", () => ({
  __esModule: true,
  default: vi.fn(() => <div>Project Setup Component</div>),
}));

describe("ProjectSetupPage Component", () => {
  it("should render the ProjectSetUp component inside ProjectSetupPage", () => {
    render(<ProjectSetupPage />);

    expect(screen.getByText("Project Setup Component")).toBeInTheDocument();
  });
});
