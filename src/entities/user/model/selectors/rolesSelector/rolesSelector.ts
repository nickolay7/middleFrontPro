import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/storeProvider';
import { UserRoles } from '../../types/userShema';

export const rolesSelector = (state: StateSchema) => state.user.authData?.role;

export const isAdminSelector = createSelector(rolesSelector, (role) =>
    Boolean(role?.includes(UserRoles.ADMIN)),
);
export const isManagerSelector = createSelector(rolesSelector, (role) =>
    Boolean(role?.includes(UserRoles.MANAGER)),
);
