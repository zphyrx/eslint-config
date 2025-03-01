import * as exlint from "@zphyrx/exlint";
import * as react from "@zphyrx/eslint-config-react";

import * as jsxA11y from "./_jsx-a11y";
import { isArray, isObject } from "../utils";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";
import type { ConfigOptions, ReactOptions, FrameworkWithFlag } from "../types";

const config = <F extends FrameworkWithFlag = false>(
  options: Partial<ConfigOptions<F>> = {},
): FlatConfig.ConfigArray => {
  const { framework = false } = options;

  const enableJsxA11y =
    isArray(framework) &&
    framework[0] === "react" &&
    isObject(framework[1]) &&
    (framework[1] as ReactOptions).jsxA11y === true;

  return exlint.config(
    {
      extends: react.extends,
      name: "@zphyrx/eslint-config/react",
      files: react.files,
      rules: {
        ...react.rules,
      },
      settings: {
        ...react.settings,
      },
    },
    ...(enableJsxA11y ? jsxA11y.config() : []),
  );
};

export { config };
