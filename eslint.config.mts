import * as zphyrx from "./src/index";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const config: FlatConfig.ConfigArray = zphyrx.config(
  {
    framework: false,
    testing: "vitest",
    prettier: true,
  },
  {
    name: "@zphyrx/eslint-config/typescript",
    rules: {
      "@typescript-eslint/consistent-type-imports": "off",
      "@typescript-eslint/no-redundant-type-constituents": "off",
    },
  },
  {
    name: "@zphyrx/eslint-config/import-x",
    rules: {
      "import-x/namespace": "off",
      "import-x/no-unresolved": "off",
    },
  },
);

export default config;
