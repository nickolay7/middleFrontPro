import { CounterSchema } from 'entities/counter';
import { UserSchema } from 'entities/user';
import { LoginSchema } from 'features/authByUserName/model/types/loginSchema';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    // async reducers
    loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
