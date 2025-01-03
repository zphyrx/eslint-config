import { x } from "./src/index";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const config: FlatConfig.ConfigArray = x(
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
    },
  },
);

export default config;
