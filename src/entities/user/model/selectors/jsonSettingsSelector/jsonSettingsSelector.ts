import { StateSchema } from '@/app/providers/storeProvider';
import { JsonSettings } from '../../..';
import { Theme } from '@/app/providers/theme';

export const jsonSettingsSelector = (state: StateSchema) =>
    state.user.authData?.jsonSettings ?? {};
export const jsonSettingSelector = (
    state: StateSchema,
    key: keyof JsonSettings,
) => state.user.authData?.jsonSettings?.[key] || Theme.LIGHT;
