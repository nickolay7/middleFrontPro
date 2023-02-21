import { StateSchema } from 'app/providers/storeProvider/config/stateSchema';

export const counterSelector = (state: StateSchema) => state.counter;
