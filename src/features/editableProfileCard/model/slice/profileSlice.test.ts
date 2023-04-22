import { DeepPartial } from '@reduxjs/toolkit';
import { Countries } from '@/entities/country/model/types/country';
import { Currency } from '@/entities/currency/model/types/currency';
import { ProfileSchema, ValidationErrors } from '../types/profileSchema';
import {
    cancelEditing, initialState,
    profileReducer, setReadonly, updateProfile, upsetReadonly,
} from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    id: '1',
    firstname: 'Nick',
    lastname: 'Semu',
    age: 17,
    city: 'Rustavi',
    country: Countries.GEORGIA,
    currency: Currency.GEL,
    username: 'admin',
    avatar: 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg',
};

const updatedData = {
    id: '1',
    firstname: 'Vasy',
    lastname: 'Pupkin',
    age: 17,
    city: 'Rustavi',
    country: Countries.GEORGIA,
    currency: Currency.GEL,
    username: 'admin',
    avatar: 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg',
};
describe('profileSlice.test', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: true };

        expect(profileReducer(state as ProfileSchema, setReadonly())).toEqual({
            readonly: false,
        });
    });
    test('upset readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };

        expect(profileReducer(state as ProfileSchema, upsetReadonly())).toEqual({
            readonly: true,
        });
    });
    test('updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            form: data,
            validationErrors: [
                ValidationErrors.REQUIRED_LASTNAME,
                ValidationErrors.REQUIRED_AGE,
            ],
        };

        expect(profileReducer(state as ProfileSchema, updateProfile(updatedData))).toEqual({
            readonly: false,
            validationErrors: [],
            form: updatedData,
        });
    });
    test('cancel update', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            form: updatedData,
            data,
            validationErrors: [
                ValidationErrors.REQUIRED_LASTNAME,
                ValidationErrors.REQUIRED_AGE,
            ],
        };

        expect(profileReducer(state as ProfileSchema, cancelEditing())).toEqual({
            readonly: true,
            validationErrors: [],
            form: data,
            data,
        });
    });
    test('pending update', () => {
        const state: DeepPartial<ProfileSchema> = {
            error: 'error',
            isLoading: false,
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            error: undefined,
            isLoading: true,
        });
    });
    test('fulfilled update', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            data: initialState.form,
            form: initialState.data,
            readonly: false,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            data,
            form: data,
            readonly: true,
        });
    });
});
