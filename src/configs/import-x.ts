import * as exlint from "@zphyrx/exlint";
import * as importX from "@zphyrx/eslint-config-import-x";

import type { TSESLint } from "@typescript-eslint/utils";

const config = (): TSESLint.FlatConfig.ConfigArray =>
  exlint.config({
    extends: importX.extends,
    name: "@zphyrx/eslint-config/import-x",
    files: importX.files,
    rules: {
      ...importX.rules,
    },
  });

export { config };
