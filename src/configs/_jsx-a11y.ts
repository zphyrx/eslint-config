import * as exlint from "@zphyrx/exlint";
import * as jsxA11y from "@zphyrx/eslint-config-jsx-a11y";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const config = (): FlatConfig.ConfigArray =>
  exlint.config({
    extends: jsxA11y.extends,
    name: "@zphyrx/eslint-config/jsx-a11y",
    files: jsxA11y.files,
    rules: {
      ...jsxA11y.rules,
    },
  });

export { config };
