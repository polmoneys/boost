import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

type ViteConfigInput = {
  mode: string;
  command: string;
};

export default (args: ViteConfigInput) => {
  const generateScopedName =
    args.mode === "production" ? "[hash:base64:2]" : "[local]_[hash:base64:2]";
  return defineConfig({
    build: {
      lib: {
        entry: "./src/index.ts",
        name: "Checkbox",
        formats: ["es", "umd"],
        fileName: format => `checkbox-react.${format}.js`,
      },
      rollupOptions: {
        external: ["react", "react-dom", "unit-react", "icon-react"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "unit-react": "UnitReact",
            "icon-react": "IconReact",
          },
        },
      },
    },
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
        include: [
          "./src",
          //, "./ambient.d.ts"
        ],
        outputDir: "./dist/",
      }),
    ],
    css: {
      modules: {
        localsConvention: "camelCase",
        generateScopedName,
      },
    },
  });
};
