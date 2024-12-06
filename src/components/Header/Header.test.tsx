import { render, screen, fireEvent } from "@testing-library/react";
import HeaderButton from "./HeaderButton";
import { vi } from "vitest";
import { Home as HomeIcon } from "@mui/icons-material";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("HeaderButton", () => {
  it("renders the button with text and icon", () => {
    render(
      <HeaderButton
        text="Home"
        icon={<HomeIcon />}
        isSelected={false}
        onClick={() => {}}
        isSmallScreen={false}
      />
    );

    expect(screen.getByText("Home")).toBeInTheDocument();

    expect(screen.getByTestId("HomeIcon")).toBeInTheDocument();
  });

  it("applies the correct styles when selected", () => {
    const { container } = render(
      <HeaderButton
        text="Home"
        icon={<HomeIcon />}
        isSelected={true}
        onClick={() => {}}
        isSmallScreen={false}
      />
    );

    const buttonBox = container.querySelector("div");
    expect(buttonBox).toHaveStyle("background-color: #2A2F40");
  });

  it("hides the text on small screens", () => {
    render(
      <HeaderButton
        text="Home"
        icon={<HomeIcon />}
        isSelected={false}
        onClick={() => {}}
        isSmallScreen={true}
      />
    );

    expect(screen.queryByText("Home")).toBeNull();
  });

  it("calls the onClick handler when clicked", () => {
    const mockOnClick = vi.fn();

    render(
      <HeaderButton
        text="Home"
        icon={<HomeIcon />}
        isSelected={false}
        onClick={mockOnClick}
        isSmallScreen={false}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
    useLocation: () => ({
      pathname: "/coverage",
    }),
  };
});

describe("Header", () => {
  it("renders the header title", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText("Argos")).toBeInTheDocument();
  });

  it("renders header options with correct text", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText("Project coverage")).toBeInTheDocument();
    expect(screen.getByText("File Coverage")).toBeInTheDocument();
  });
});
