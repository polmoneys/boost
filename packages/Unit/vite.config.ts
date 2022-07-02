import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "Unit",
      formats: ["es", "umd"],
      fileName: format => `unit-react.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "@react-aria/focus"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@react-aria/focus": "ReactAriaFocus",
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
