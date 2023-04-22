import { StateSchema } from '@/app/providers/storeProvider/config/stateSchema';

const defaultState = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
};

export const loginSelector = (state: StateSchema) => state.loginForm || defaultState;
