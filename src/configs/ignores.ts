import * as exlint from "@zphyrx/exlint";

import type { TSESLint } from "@typescript-eslint/utils";

const config = (): TSESLint.FlatConfig.ConfigArray =>
  exlint.config({
    name: "@zphyrx/eslint-config/global-ignores",
    ignores: ["**/node_modules/**", "**/dist/**", "**/coverage/**"],
  });

export { config };
