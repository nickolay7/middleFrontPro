import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter/model/counterSlice/counterSlice';
import { userReducer } from 'entities/user/model/userSlice/userSlice';
import { StateSchema } from './stateSchema';
import { createReducerManager } from './reducerManager';

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

const store = createReduxStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
