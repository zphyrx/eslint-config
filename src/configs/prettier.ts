import * as exlint from "@zphyrx/exlint";
import * as prettier from "@zphyrx/eslint-config-prettier";

import type { TSESLint } from "@typescript-eslint/utils";

const config = (): TSESLint.FlatConfig.ConfigArray =>
  exlint.config({
    extends: prettier.extends,
    name: "@zphyrx/eslint-config/prettier",
    files: prettier.files,
    rules: {
      ...prettier.rules,
    },
  });

export { config };
