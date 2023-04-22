import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/storeProvider';

export const scrollSelector = (state: StateSchema) => state.scroll.scroll;

export const scrollByPathSelector = createSelector(
    [
        scrollSelector,
        (state: StateSchema, path: string) => path,
    ],
    (scroll, path) => scroll[path] || 0,
);
