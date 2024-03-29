import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "Link",
      formats: ["es", "umd"],
      fileName: format => `link-react.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "unit-react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "unit-react": "UnitReact",
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["./index.ts", "./src"],
      outputDir: "./dist/",
    }),
  ],
});
