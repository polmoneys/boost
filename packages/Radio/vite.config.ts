import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "Radio",
      formats: ["es", "umd"],
      fileName: format => `radio-react.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "unit-react", "group-react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "unit-react": "UnitReact",
          "group-react": "GroupReact",
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
