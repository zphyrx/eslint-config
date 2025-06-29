import * as exlint from "@zphyrx/exlint";
import * as imports from "@zphyrx/eslint-config-import";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const config = (): FlatConfig.ConfigArray =>
  exlint.config({
    extends: imports.extends,
    name: "@zphyrx/eslint-config/import",
    files: imports.files,
    rules: {
      ...imports.rules,
    },
  });

export { config };
