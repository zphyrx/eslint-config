import * as exlint from "@zphyrx/exlint";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const config = (): FlatConfig.ConfigArray =>
  exlint.config({
    name: "@zphyrx/eslint-config/global-ignores",
    ignores: ["**/node_modules/**", "**/dist/**", "**/coverage/**"],
  });

export { config };
