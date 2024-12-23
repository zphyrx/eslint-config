import * as exlint from "@zphyrx/exlint";
import * as tailwindcss from "@zphyrx/eslint-config-tailwindcss";

import type { TSESLint } from "@typescript-eslint/utils";

const config = (): TSESLint.FlatConfig.ConfigArray =>
  exlint.config({
    extends: tailwindcss.extends,
    name: "@zphyrx/eslint-config/tailwindcss",
    files: tailwindcss.files,
    rules: {
      ...tailwindcss.rules,
    },
  });

export { config };
