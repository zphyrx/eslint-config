import * as exlint from "@zphyrx/exlint";
import * as tailwindcss from "@zphyrx/eslint-config-tailwindcss";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const config = (): FlatConfig.ConfigArray =>
  exlint.config({
    extends: tailwindcss.extends,
    name: "@zphyrx/eslint-config/tailwindcss",
    files: tailwindcss.files,
    rules: {
      ...tailwindcss.rules,
    },
  });

export { config };
