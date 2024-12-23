import * as exlint from "@zphyrx/exlint";

import { isArray, isObject } from "./utils";

import type { TSESLint } from "@typescript-eslint/utils";
import type { ConfigWithExtends } from "@zphyrx/exlint";
import type { ConfigOptions, FrameworkWithFlag } from "./types";

const x = <F extends FrameworkWithFlag = false>(
  options: ConfigOptions<F> = {},
  ...configs: ConfigWithExtends[]
): TSESLint.FlatConfig.ConfigArray => {
  const { testing = false } = options;

  const cfgs: TSESLint.FlatConfig.ConfigArray = [
    {
      name: "@zphyrx/eslint-config/typescript",
      files: ["**/*.ts?(x)", "**/*.mts"],
      rules: {
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": "error",
      },
    },
  ];

  if (
    testing === "vitest" ||
    (isArray(testing) && testing[0] === "vitest" && isObject(testing[1]))
  ) {
    cfgs.push({
      name: "@zphyrx/eslint-config/vitest",
      files: ["**/?(*.)+(spec|test).ts?(x)"],
      rules: {
        "vitest/no-test-return-statement": "warn",
      },
    });
  }

  if (Object.keys(cfgs).length > 0) {
    configs.push(...exlint.config(...cfgs));
  }

  return cfgs;
};

describe("x", (): void => {
  it("should return the config without vitest rules when `vitest` is disabled", (): void => {
    const config: TSESLint.FlatConfig.ConfigArray = x({
      testing: false,
    });

    expect(config).toEqual([
      {
        name: "@zphyrx/eslint-config/typescript",
        files: ["**/*.ts?(x)", "**/*.mts"],
        rules: {
          "no-redeclare": "off",
          "@typescript-eslint/no-redeclare": "error",
        },
      },
    ]);
  });

  it("should return the config with vitest rules when `vitest` is enabled", (): void => {
    const config: TSESLint.FlatConfig.ConfigArray = x({
      testing: "vitest",
    });

    expect(config).toEqual([
      {
        name: "@zphyrx/eslint-config/typescript",
        files: ["**/*.ts?(x)", "**/*.mts"],
        rules: {
          "no-redeclare": "off",
          "@typescript-eslint/no-redeclare": "error",
        },
      },
      {
        name: "@zphyrx/eslint-config/vitest",
        files: ["**/?(*.)+(spec|test).ts?(x)"],
        rules: {
          "vitest/no-test-return-statement": "warn",
        },
      },
    ]);
  });
});
