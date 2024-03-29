const presetEnv = require("postcss-preset-env");
const imports = require("postcss-import");
const cssnano = require("cssnano");
const combineSelectors = require("postcss-combine-duplicated-selectors");
const exportTokens = require("postcss-export-vars");

const inlineMediaQueries = false;

// https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env#plugins-list

module.exports = cfg => {
  const devMode = cfg.env === "development";

  return {
    map: devMode ? "inline" : null,
    plugins: [
      imports(),
      presetEnv({
        debug: true,
        // defaults to 2
        stage: 0,
        autoprefixer: false,
        features: {
          "any-link-pseudo-class": false,
          "focus-visible-pseudo-class": false,
          "focus-within-pseudo-class": false,
          "dir-pseudo-class": false,
          "has-pseudo-class": false,
          "blank-pseudo-class": false,
          "is-pseudo-class": false,
          "logical-properties-and-values": false,
          "prefers-color-scheme-query": false,
          "not-pseudo-class": false,
          "custom-media-queries": { preserve: inlineMediaQueries },
        },
      }),
      combineSelectors(),
      exportTokens({
        file: "./dist/css-tokens",
        type: "js",
        // Pick by custom property name
        match: [
          "transparent",
          "disabled",
          "white",
          "black",
          "gray",
          "accent",
          "font-size",
          "gap",
          "set-solid",
          "grid-item-width",
          "ratio-",
          "item-grid",
          "minHeight",
          "z-",
          "border-",
          "bright",
          "shout",
          "offset",
        ],
      }),
      devMode
        ? null
        : cssnano({
            preset: "default",
          }),
    ],
  };
};
