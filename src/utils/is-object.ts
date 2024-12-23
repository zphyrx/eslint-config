import { isArray } from "./is-array";

const isObject = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === "object" && !isArray(value);

export { isObject };
