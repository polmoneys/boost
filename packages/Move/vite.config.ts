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
        name: "Move",
        formats: ["es", "umd"],
        fileName: format => `move-react.${format}.js`,
      },
      rollupOptions: {
        external: [
          "react",
          "react-dom",
          "react-aria",
          "boost-utils",
          "list-react",
          "group-react",

        ],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "react-aria": "ReactAria",
            "boost-utils": "BoostUtils",
            "list-react": "ListReact",
            "button-react": "ButtonReact",
            "icon-react": "IconReact",
            "group-react": "GroupReact",
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
