/**
 * List of supported frameworks for the project.
 * Currently, only 'react' is supported.
 *
 * This is used to define the available framework options
 * for the user to select in the configuration.
 */
const Frameworks = ["react"] as const;

/**
 * List of supported testing frameworks for the project.
 * Currently, 'vitest' and 'jest' are supported.
 *
 * This is used to define the available testing framework
 * options for the user to select in the configuration.
 */
const TestingFrameworks = ["vitest", "jest"] as const;

export { Frameworks, TestingFrameworks };
