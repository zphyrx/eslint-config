import { Frameworks, TestingFrameworks } from "../constants";

import type { Extract, Narrow, OmitType } from "./index";

/**
 * Type representing the available frameworks (e.g., 'react').
 */
type Framework = (typeof Frameworks)[number];

/**
 * Represents a framework, or `false` if no framework is selected.
 */
type FrameworkWithFlag = Framework | false;

/**
 * Type representing the available testing frameworks (e.g., 'vitest').
 */
type TestingFramework = (typeof TestingFrameworks)[number];

/**
 * Used to specify frameworks that do not support testing library rules.
 *
 * @example
 * ```ts
 * Extract<Frameworks, 'native'>
 * ```
 */
type NoTestingLibrarySupport = Extract<Framework, never>;

/**
 * Options for the React framework.
 */
type ReactOptions = {
  /**
   * Enables or disables the jsx-a11y (accessibility) rules.
   *
   * @default false
   */
  jsxA11y?: boolean;
};

/**
 * A mapping of framework options, where 'react' has specific options
 * like `jsxA11y`.
 */
type FrameworkSpecificOptions = {
  react: ReactOptions;
};

/**
 * A type that narrows down the framework-specific options based on the
 * selected framework.
 *
 * This allows for more fine-grained control over configuration options
 * for different frameworks.
 *
 * @example
 * ```ts
 * import { x } from "@zphyrx/eslint-config";
 *
 * const config = x({
 *   framework: [
 *     "react",
 *     {
 *       jsxA11y: true,
 *     },
 *   ],
 * });
 *
 * export default config;
 * ```
 */
type FrameworkWithOptions<F extends FrameworkWithFlag = false> = [
  F,
  Narrow<
    FrameworkSpecificOptions[OmitType<F, false>],
    keyof FrameworkSpecificOptions[OmitType<F, false>]
  >,
];

/**
 * Represents a testing framework with an optional `lib` flag for enabling
 * testing library rules.
 */
type TestingFrameworkWithLibrary = [
  TestingFramework,
  {
    lib?: boolean;
  },
];

/**
 * Base options for enabling additional rulesets.
 */
type BaseOptions = {
  /**
   * Enable TailwindCSS rules.
   *
   * @default false
   */
  tailwindcss?: boolean;
  /**
   * Enable Storybook rules.
   *
   * @default false
   */
  storybook?: boolean;
  /**
   * Enable Prettier formatting rules.
   *
   * @default false
   */
  prettier?: boolean;
};

/**
 * Full configuration options that include both framework and
 * additional base options.
 */
type ConfigOptions<F extends FrameworkWithFlag = false> = {
  /**
   * Select the framework for the project.
   *
   * Supports 'react', or `false` for no framework selection.
   *
   * @default false
   */
  framework?: F | FrameworkWithOptions<F> | false;
  /**
   * Select the testing framework for the project.
   *
   * Supports 'vitest' or 'jest', with an optional `lib` flag to enable
   * testing library rules.
   *
   * If no framework is selected, this option cannot be used.
   *
   * @default false
   */
  testing?:
    | TestingFramework
    | (F extends NoTestingLibrarySupport | false
        ? never
        : TestingFrameworkWithLibrary)
    | false;
} & BaseOptions;

export type {
  Framework,
  TestingFramework,
  FrameworkWithFlag,
  //
  BaseOptions,
  ReactOptions,
  ConfigOptions,
};
