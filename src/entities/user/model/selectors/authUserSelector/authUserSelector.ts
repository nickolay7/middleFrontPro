import { StateSchema } from '@/app/providers/storeProvider';

export const authUserSelector = (state: StateSchema) => state.user.authData;
