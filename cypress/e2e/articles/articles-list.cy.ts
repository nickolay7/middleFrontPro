describe('Пользователь заходит на страницу статей', () => {
    beforeEach(() => {
        cy.login('test_user', '123').then(() => {
            cy.visit('/articles');
        });
    });

    it('статьи успешно подгружаются', () => {
        cy.getByTestId('articleList').should('exist');
    });

    it('статьи успешно подгружаются(with stub)', () => {
        cy.intercept('GET', '**/articles?', { fixture: 'article-list.json' });
        cy.getByTestId('articleList').should('exist');
    });
});
