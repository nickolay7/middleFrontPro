import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter/model/counterSlice/counterSlice';
import { StateSchema } from './stateSchema';

export const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
    reducer: {
        counter: counterReducer,
    },
    devTools: true,
    preloadedState: initialState,
});

const store = createReduxStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
