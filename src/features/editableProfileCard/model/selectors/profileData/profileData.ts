import { StateSchema } from '@/app/providers/storeProvider';
import { ProfileSchema } from '../../types/profileSchema';

export const profileData = (state: StateSchema): ProfileSchema => state.profile || {
    data: { id: '', firstname: '', lastname: '' },
    form: { id: '', firstname: '', lastname: '' },
    isLoading: false,
    error: undefined,
    readonly: true,
};
