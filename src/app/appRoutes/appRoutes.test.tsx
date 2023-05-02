import { screen } from '@testing-library/react';
import renderWithProviders from '@/shared/lib/helpers/tests/renderWithProviders';
import AppRoutes from './appRoutes';
import { getAbout, getAdmin, getProfile } from '@/shared/consts/consts';
import { UserRoles } from '@/entities/user';

describe('appRoutes test', () => {
    test('Страница должна отрендерится', async () => {
        renderWithProviders(<AppRoutes />, {
            route: getAbout(),
        });

        const about = await screen.findByTestId('about');
        expect(about).toBeInTheDocument();
    });

    test('Страница не найдена', () => {
        renderWithProviders(<AppRoutes />, {
            route: '/sgsdgsfdg',
        });

        const nfPage = screen.getByTestId('NotFoundPage');
        expect(nfPage).toBeInTheDocument();
    });

    test('Редирект не авторизованного пользователя на главную страницу', async () => {
        renderWithProviders(<AppRoutes />, {
            route: getProfile('1'),
        });

        const main = await screen.findByTestId('Main');
        expect(main).toBeInTheDocument();
    });

    test('Доступ к закрытой странице для авторизованного пользователя', () => {
        renderWithProviders(<AppRoutes />, {
            route: getProfile('1'),
            initialState: {
                user: {
                    _init: true,
                    authData: {},
                },
            },
        });

        const profile = screen.getByTestId('ProfilePage');
        expect(profile).toBeInTheDocument();
    });

    test('Доступ есть роль отсутствует', () => {
        renderWithProviders(<AppRoutes />, {
            route: getAdmin(),
            initialState: {
                user: {
                    _init: true,
                    authData: {},
                },
            },
        });

        const forbiddenPage = screen.getByTestId('ForbiddenPage');
        expect(forbiddenPage).toBeInTheDocument();
    });

    test('Доступ есть роль присутствует', () => {
        renderWithProviders(<AppRoutes />, {
            route: getAdmin(),
            initialState: {
                user: {
                    _init: true,
                    authData: {
                        role: [UserRoles.ADMIN],
                    },
                },
            },
        });

        const adminPage = screen.getByTestId('AdminPanelPage');
        expect(adminPage).toBeInTheDocument();
    });
});

export {};
