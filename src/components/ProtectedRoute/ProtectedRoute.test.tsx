import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const MockComponent = () => <div>Allowed Content</div>;

describe("ProtectedRoute", () => {
  it("should redirect user if user has no access", () => {
    render(
      <MemoryRouter initialEntries={["/protected"]}>
        <ProtectedRoute
          allowAccess={false}
          redirectTo="/login"
          Component={MockComponent}
        />
      </MemoryRouter>
    );

    expect(screen.queryByText("Allowed Content")).not.toBeInTheDocument();
  });

  it("should show component if user has access", () => {
    render(
      <MemoryRouter>
        <ProtectedRoute
          allowAccess={true}
          redirectTo="/login"
          Component={MockComponent}
        />
      </MemoryRouter>
    );

    expect(screen.getByText("Allowed Content")).toBeInTheDocument();
  });
});
