export type TranslationSchema<T> = {
  readonly [K in keyof T]: T[K] extends (...args: infer Args) => unknown
    ? (...args: Args) => string
    : T[K] extends readonly string[]
      ? readonly string[]
      : T[K] extends Record<string, unknown>
        ? TranslationSchema<T[K]>
        : string;
};
