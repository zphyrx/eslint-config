import * as exlint from "@zphyrx/exlint";
import * as storybook from "@zphyrx/eslint-config-storybook";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const config = (): FlatConfig.ConfigArray =>
  exlint.config({
    extends: storybook.extends,
    name: "@zphyrx/eslint-config/storybook",
    files: storybook.files,
    rules: {
      ...storybook.rules,
    },
  });

export { config };
