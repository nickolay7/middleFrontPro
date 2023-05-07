import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import {
    ReduxStoreWithManager,
    StateSchemaKey,
    useAppDispatch,
} from '@/app/providers/storeProvider';

export type ReducersList = {
    [key in StateSchemaKey]?: Reducer;
};

type ReducerPair = [StateSchemaKey, Reducer];

export const useDynamicModuleLoader = (
    reducers: ReducersList,
    removeAfterUnmount?: boolean,
) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();
    const reducersList = store.reducerManager.getReducerMap();

    useEffect(() => {
        const entries = Object.entries(reducers) as ReducerPair[];
        entries.forEach(([reducerName, reducer]) => {
            if (!reducersList[reducerName]) {
                store.reducerManager.add(reducerName, reducer);
                dispatch({ type: `@init-${reducerName}-reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                entries.forEach(([reducerName]) => {
                    store.reducerManager.remove(reducerName);
                    dispatch({ type: `@remove-${reducerName}-reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);
};
