# `@zphyrx/eslint-config`

## Installation

To install `@zphyrx/eslint-config`, run the following command:

```sh
# Using npm
$ npm install -D @zphyrx/eslint-config

# or using pnpm
$ pnpm add -D @zphyrx/eslint-config
```

## Usage

Extend `@zphyrx/eslint-config` and add any additional configurations in your `eslint.config.mjs` file:

```mjs
import { x } from "@zphyrx/eslint-config";
import storybookPlugin from "eslint-plugin-storybook";

const config = x(
  {
    framework: "react", // Enables React and React Hooks
    testing: [
      "vitest", // Enables Vitest rules
      {
        lib: true, // Enables Testing Library rules for React
      },
    ],
    tailwindcss: true,
    storybook: false, // Disables Storybook
    prettier: true,
  },

  // Any additional configurations can be passed here
  {
    extends: [
      storybookPlugin.configs["flat/recommended"]
    ],
    name: "@zphyrx/eslint-config/storybook",
    files: ["**/*.stories.ts?(x)"],
    rules: {
      "storybook/no-redundant-story-name": "warn",
    },
  },

  // Override Vitest rules
  {
    name: "@zphyrx/eslint-config/vitest",
    rules: {
      "vitest/max-expects": "off",
    },
  },
);

export default config;
```

## License

Licensed under the MIT License, Copyright © 2025-present [jcsilverx](https://github.com/jcsilverx).

See [LICENSE](./LICENSE) for more information.
