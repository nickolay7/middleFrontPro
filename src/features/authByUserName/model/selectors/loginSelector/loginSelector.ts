import { StateSchema } from 'app/providers/storeProvider/config/stateSchema';

export const loginSelector = (state: StateSchema) => state.loginForm;
