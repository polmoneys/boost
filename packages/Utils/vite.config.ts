import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "Utils",
      formats: ["es", "umd"],
      fileName: format => `boost-utils.${format}.js`,
    },
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["./src"],
      outputDir: "./dist/",
    }),
  ],
});
