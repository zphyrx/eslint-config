import * as exlint from "@zphyrx/exlint";
import * as jsxA11y from "@zphyrx/eslint-config-jsx-a11y";

import type { TSESLint } from "@typescript-eslint/utils";

const config = (): TSESLint.FlatConfig.ConfigArray =>
  exlint.config({
    extends: jsxA11y.extends,
    name: "@zphyrx/eslint-config/jsx-a11y",
    files: jsxA11y.files,
    rules: {
      ...jsxA11y.rules,
    },
  });

export { config };
