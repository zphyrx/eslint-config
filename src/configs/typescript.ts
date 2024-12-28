import * as exlint from "@zphyrx/exlint";
import * as typescript from "@zphyrx/eslint-config-typescript";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const config = (): FlatConfig.ConfigArray =>
  exlint.config({
    extends: typescript.extends,
    name: "@zphyrx/eslint-config/typescript",
    files: typescript.files,
    languageOptions: {
      parser: typescript.languageOptions.parser,
      parserOptions: {
        ...typescript.languageOptions.parserOptions,
      },
    },
    rules: {
      ...typescript.rules,
    },
  });

export { config };
