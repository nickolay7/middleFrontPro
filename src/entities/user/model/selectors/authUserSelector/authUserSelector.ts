import { StateSchema } from '@/app/providers/storeProvider/config/stateSchema';

export const authUserSelector = (state: StateSchema) => state.user.authData;
