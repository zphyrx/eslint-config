type OmitType<T, U> = T extends U ? never : T;

export type { OmitType };
