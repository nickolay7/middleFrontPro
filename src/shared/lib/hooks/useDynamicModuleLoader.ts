import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/storeProvider';
import { useAppDispatch } from 'app/providers/storeProvider/config/hooks';

export type ReducersList = {
    [key in StateSchemaKey]?: Reducer;
}

type ReducerPair = [StateSchemaKey, Reducer];

export const useDynamicModuleLoader = (
    reducers: ReducersList,
    removeAfterUnmount?: boolean,
) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        const entries = Object.entries(reducers) as ReducerPair[];
        entries.forEach(([reducerName, reducer]) => {
            store.reducerManager.add(reducerName, reducer);
            dispatch({ type: '@init-reducer' });
        });

        return () => {
            if (removeAfterUnmount) {
                entries.forEach(([reducerName]) => {
                    store.reducerManager.remove(reducerName);
                    dispatch({ type: '@remove-reducer' });
                });
            }
        };
        // eslint-disable-next-line
    }, []);
};
