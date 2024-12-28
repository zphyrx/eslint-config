import * as exlint from "@zphyrx/exlint";
import * as vitest from "@zphyrx/eslint-config-vitest";

import * as testingLibrary from "./_testing-library";
import { isArray, isObject } from "../utils";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";
import type { ConfigOptions, FrameworkWithFlag } from "../types";

const config = <F extends FrameworkWithFlag = false>(
  options: Partial<ConfigOptions<F>> = {},
): FlatConfig.ConfigArray => {
  const { testing = false } = options;

  const enableLib =
    isArray(testing) &&
    testing[0] === "vitest" &&
    isObject(testing[1]) &&
    testing[1].lib === true;

  return exlint.config(
    {
      extends: vitest.extends,
      name: "@zphyrx/eslint-config/vitest",
      files: vitest.files,
      rules: {
        ...vitest.rules,
      },
    },
    ...(enableLib ? testingLibrary.config(options) : []),
  );
};
export { config };
