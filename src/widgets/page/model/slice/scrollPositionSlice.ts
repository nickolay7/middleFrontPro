import { createSlice } from '@reduxjs/toolkit';
import { ScrollPositions, ScrollPositionSchema } from '../types/scrollPositionSchema';

const initialState: ScrollPositionSchema = {
    scroll: {} as ScrollPositions,
};

export const scrollPositionsSlice = createSlice({
    name: 'scrollPositions',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload: { path, position } }) => {
            state.scroll[path] = position;
        },
    },
});

export const { setScrollPosition } = scrollPositionsSlice.actions;
export const scrollPositionReducer = scrollPositionsSlice.reducer;
