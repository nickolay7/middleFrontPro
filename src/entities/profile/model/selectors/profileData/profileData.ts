import { StateSchema } from 'app/providers/storeProvider';
import { IProfile } from '../../types/IProfile';

const profileDefault: IProfile = {
    firstname: '',
    lastname: '',
};
export const profileData = (state: StateSchema) => state?.profile?.data || profileDefault;
