import { StateSchema } from 'app/providers/storeProvider';
import { ProfileSchema } from '../../types/profileSchema';
import { initialState } from '../../slice/profileSlice';

export const profileData = (state: StateSchema): ProfileSchema => state.profile || initialState;
