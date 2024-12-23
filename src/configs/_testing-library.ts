import * as exlint from "@zphyrx/exlint";
import * as configs from "@zphyrx/eslint-config-testing-library";

import { isArray } from "../utils";

import type { TSESLint } from "@typescript-eslint/utils";
import type { ConfigOptions, Framework, FrameworkWithFlag } from "../types";

const config = <F extends FrameworkWithFlag = false>(
  options: Partial<ConfigOptions<F>> = {},
): TSESLint.FlatConfig.ConfigArray => {
  const { framework: _framework = false } = options;

  const framework = (
    isArray(_framework) ? _framework[0] : _framework
  ) as Framework;

  return exlint.config({
    extends: configs[framework].extends,
    name: "@zphyrx/eslint-config/testing-library",
    files: configs[framework].files,
    rules: {
      ...configs[framework].rules,
    },
  });
};

export { config };
