import * as exlint from "@zphyrx/exlint";
import * as jest from "@zphyrx/eslint-config-jest";

import * as testingLibrary from "./_testing-library";
import { isArray, isObject } from "../utils";

import type { TSESLint } from "@typescript-eslint/utils";
import type { ConfigOptions, FrameworkWithFlag } from "../types";

const config = <F extends FrameworkWithFlag = false>(
  options: Partial<ConfigOptions<F>> = {},
): TSESLint.FlatConfig.ConfigArray => {
  const { testing = false } = options;

  const enableLib =
    isArray(testing) &&
    testing[0] === "jest" &&
    isObject(testing[1]) &&
    testing[1].lib === true;

  return exlint.config(
    {
      extends: jest.extends,
      name: "@zphyrx/eslint-config/jest",
      files: jest.files,
      rules: {
        ...jest.rules,
      },
    },
    ...(enableLib ? testingLibrary.config(options) : []),
  );
};
export { config };
