type Narrow<T, K extends keyof T> = {
  [P in K]: T[P];
};

export type { Narrow };
