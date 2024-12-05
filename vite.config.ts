/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    globals: true,
    coverage: {
      provider: "v8", 
      reporter: ["text", "json", "html", "lcov"],
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: ["src/**/index.ts", "src/types/**", "src/main.tsx", "src/vite-env.d.ts", "src/utils/theme.ts", "src/utils/pageNames.ts", "src/utils/rulesConstants.ts", "src/utils/styleConstants.ts", "src/utils/drawerMenuOptions.ts", "src/App.tsx"], 
    },
  }
});
