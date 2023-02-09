export type Mods = Record<string, boolean | string>;
export const classNames = (
    cls: string,
    mods: Mods = {},
    additions: string[] = [],
): string => [
    cls,
    ...additions,
    ...Object.entries(mods)
        .filter(([, value]) => Boolean(value))
        .map(([className]) => className),
].join(' ');
