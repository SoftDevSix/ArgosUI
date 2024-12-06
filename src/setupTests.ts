import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});

vi.mock("../../../hooks/useFetch", () => ({
  __esModule: true,
  default: vi.fn(),
}));

global.fetch = vi.fn();
