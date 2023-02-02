export type Mods = Record<string, boolean | string>;
export const classNames = (cls: string, mods: Mods, additions: string[]): string => {
    return [
        cls,
        ...additions,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
