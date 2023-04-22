import { StateSchema } from '@/app/providers/storeProvider';

export const initUserSelector = (state: StateSchema) => state.user._init;
