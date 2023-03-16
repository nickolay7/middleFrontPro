import { StateSchema } from 'app/providers/storeProvider';

export const articleDetailsSelector = (state: StateSchema) => state?.articleDetails;
