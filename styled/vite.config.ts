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
        name: "Styled",
        formats: ["es", "umd"],
        fileName: format => `styled-react.${format}.js`,
      },
      rollupOptions: {
        external: [
          "react",
          "react-dom",
          "unit-react",
          "button-react",
          "card-react",
          "checkbox-react",
          "dialog-react",
          "fence-react",
          "font-react",
          "group-react",
          "icon-react",
          "input-react",
          "layers-react",
          "link-react",
          "options-react",
          "pic-react",
          "popover-react",
          "radio-react",
          "scroll-unit-react",
          "shape-react",
          "stat-react",
          "sticky-react",
          "track-react",
          "unit-react",
          "textarea-react",
        ],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "unit-react": "UnitReact",
            "button-react": "UnitReact",
            "card-react": "CardReact",
            "checkbox-react": "CheckboxReact",
            "dialog-react": "DialogReact",
            "fence-react": "FenceReact",
            "font-react": "FontReact",
            "group-react": "GroupReact",
            "icon-react": "IconReact",
            "input-react": "InputReact",
            "layers-react": "LayersReact",
            "link-react": "LinkReact",
            "options-react": "OptionsReact",
            "pic-react": "PicReact",
            "popover-react": "PopoverReact",
            "radio-react": "RadioReact",
            "scroll-unit-react": "ScrollUnitReact",
            "shape-react": "ShapeReact",
            "stat-react": "StatReact",
            "sticky-react": "StickyReact",
            "track-react": "TrackReact",
            "textarea-react": "TextareaReact",
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
