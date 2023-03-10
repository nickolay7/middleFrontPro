declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.jpg';

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'jest' | 'frontend' | 'storybook';
