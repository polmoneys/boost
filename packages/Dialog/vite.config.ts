import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "Dialog",
      formats: ["es", "umd"],
      fileName: format => `dialog-react.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@reach/dialog",
        "scroll-unit-react",
        "group-react",
        "button-react",
        "icon-react",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@reach/dialog": "ReachDialog",
          "scroll-unit-react": "ScrollUnitReact",
          "group-react": "GroupReact",
          "button-react": "ButtonReact",
          "icon-react": "IconReact",
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
