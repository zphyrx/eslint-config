import * as exlint from "@zphyrx/exlint";

import { isArray, isObject } from "../src/utils";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";
import type { ConfigWithExtends } from "@zphyrx/exlint";
import type { ConfigOptions, FrameworkWithFlag } from "../src/types";

const testConfig = <F extends FrameworkWithFlag = false>(
  options: ConfigOptions<F> = {},
  ...configs: ConfigWithExtends[]
): FlatConfig.ConfigArray => {
  const { testing = false } = options;

  const cfgs: FlatConfig.ConfigArray = [
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

describe("config", (): void => {
  it("should return the config without vitest rules when `vitest` is disabled", (): void => {
    const config: FlatConfig.ConfigArray = testConfig({
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
    const config: FlatConfig.ConfigArray = testConfig({
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
