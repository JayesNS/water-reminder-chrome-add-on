export * from './events';

export type Theme = 'light' | 'dark';

export interface Themed {
    theme?: Theme;
}

export interface Formatter<V = string, O = object> {
    format: (value: V, options?: O) => string;
}