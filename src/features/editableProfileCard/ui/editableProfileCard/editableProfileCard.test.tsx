import {
    screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithProviders from '@/shared/lib/helpers/tests/renderWithProviders';
import { Currency } from '@/entities/currency/model/types/currency';
import { Countries } from '@/entities/country/model/types/country';
import { IProfile } from '@/entities/profile';
import { $api } from '@/shared/api/api';
import { EditableProfileCard } from './editableProfileCard';
import { profileReducer } from '../../model/slice/profileSlice';

const profileData: IProfile = {
    id: '1',
    firstname: 'vasy',
    lastname: 'pupkin',
    username: 'admin',
    age: 17,
    currency: Currency.USD,
    country: Countries.GEORGIA,
    city: 'Moscow',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            form: profileData,
            data: profileData,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/editableProfileCard.tsx', () => {
    beforeEach(() => {
        renderWithProviders(<EditableProfileCard id="1" />, options);
    });

    test('readonly должен меняться', async () => {
        // renderWithProviders(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('ProfileHeader.Edit'));

        expect(screen.getByTestId('ProfileHeader.Cancel')).toBeInTheDocument();
    });

    test('При отмене значения должны обнуляться', async () => {
        // renderWithProviders(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('ProfileHeader.Edit'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('ProfileHeader.Cancel'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('vasy');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('pupkin');
    });

    test('Должна появиться ошибка', async () => {
        // renderWithProviders(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('ProfileHeader.Edit'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.click(screen.getByTestId('ProfileHeader.Save'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        // renderWithProviders(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('ProfileHeader.Edit'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');

        await userEvent.click(screen.getByTestId('ProfileHeader.Save'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
