import { CounterSchema } from 'entities/counter';
import { UserSchema } from 'entities/user';
import { LoginSchema } from 'features/authByUserName/model/types/loginSchema';
import {
    CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { To } from '@remix-run/router';
import { NavigateOptions } from 'react-router/dist/lib/context';
import { ProfileSchema } from 'entities/profile';
import { ArticleDetailsSchema } from 'entities/article';
import {
    ArticleDetailsCommentsSchema,
} from 'pages/articleDetailsPage/model/types/articleDetailsCommentsSchema';
import { AddCommentFormSchema } from 'features/addCommentForm';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    addCommentForm: AddCommentFormSchema;
    // async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    articleDetailsComments?: ArticleDetailsCommentsSchema;
}

export type StateSchemaKey = keyof StateSchema;

interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: Reducer<CombinedState<StateSchema>>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArgs {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T>{
    extra: ThunkExtraArgs;
    rejectValue: T;
    state: StateSchema;
}
