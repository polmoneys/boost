import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "Fence",
      formats: ["es", "umd"],
      fileName: format => `fence-react.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-intersection-observer"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-intersection-observer": "reactIntersectionObserver",
        },
      },
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
