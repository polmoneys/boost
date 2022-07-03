import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "Options",
      formats: ["es", "umd"],
      fileName: format => `options-react.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "@szhsin/react-menu"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@szhsin/react-menu": "ReactMenu",
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
