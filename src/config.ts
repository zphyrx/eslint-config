import * as exlint from "@zphyrx/exlint";

import {
  ignores,
  typescript,
  importX,
  react,
  vitest,
  jest,
  tailwindcss,
  storybook,
  prettier,
} from "./configs";
import { isArray, isObject } from "./utils";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";
import type { ConfigWithExtends } from "@zphyrx/exlint";
import type { ConfigOptions, FrameworkWithFlag } from "./types";

const config = <F extends FrameworkWithFlag = false>(
  options: ConfigOptions<F> = {},
  ...configs: ConfigWithExtends[]
): FlatConfig.ConfigArray => {
  const {
    framework = false,
    testing = false,
    tailwindcss: enableTailwindcss = false,
    storybook: enableStorybook = false,
    prettier: enablePrettier = false,
  } = options;
  const cfgs: FlatConfig.ConfigArray = [
    ...ignores.config(),
    ...typescript.config(),
    ...importX.config(),
  ];

  if (
    framework === "react" ||
    (isArray(framework) && framework[0] === "react" && isObject(framework[1]))
  ) {
    cfgs.push(...react.config(options));
  }

  if (
    testing === "vitest" ||
    (isArray(testing) && testing[0] === "vitest" && isObject(testing[1]))
  ) {
    cfgs.push(...vitest.config(options));
  }

  if (
    testing === "jest" ||
    (isArray(testing) && testing[0] === "vitest" && isObject(testing[1]))
  ) {
    cfgs.push(...jest.config(options));
  }

  if (enableTailwindcss) {
    cfgs.push(...tailwindcss.config());
  }

  if (enableStorybook) {
    cfgs.push(...storybook.config());
  }

  if (enablePrettier) {
    cfgs.push(...prettier.config());
  }

  if (Object.keys(configs).length > 0) {
    cfgs.push(...exlint.config(...configs));
  }

  return cfgs;
};

export { config };
