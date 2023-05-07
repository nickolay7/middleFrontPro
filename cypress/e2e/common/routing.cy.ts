describe('Роутинг тесты', () => {
    describe('Пользователь не авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.getByTestId('Main').should('exist');
        });

        it('Переход на не существующую страницу', () => {
            cy.visit('/dffgsdfg');
            cy.getByTestId('NotFoundPage').should('exist');
        });
    });

    describe('Пользователь авторизован', () => {
        it('Переход на профиль пользователя', () => {
            cy.login('test_user', '123');
            cy.visit('/profile/1');
            cy.getByTestId('ProfilePage').should('exist');
        });
    });
});
