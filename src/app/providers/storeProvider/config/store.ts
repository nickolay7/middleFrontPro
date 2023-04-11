import {
    configureStore,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter/model/counterSlice/counterSlice';
import { userReducer } from 'entities/user/model/userSlice/userSlice';
import { $api } from 'shared/api/api';
import { addCommentFormReducer } from 'features/addCommentForm';
import { scrollPositionReducer } from 'widgets/page';
import { rtkApi } from 'shared/api/rtkApi';
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
        addCommentForm: addCommentFormReducer,
        scroll: scrollPositionReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                },
            },
        }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
