let articleId = '';

describe('Пользователь заходит на страницу статьм', () => {
    beforeEach(() => {
        cy.login('test_user', '123').then(() => {
            cy.createArticle()
                .then((data) => {
                    articleId = data.id;
                })
                .then(() => {
                    cy.visit(`/articles/${articleId}`);
                });
        });
    });

    afterEach(() => {
        cy.removeArticle(articleId);
    });
    describe('with api', () => {
        it('Видит содержимое статьи', () => {
            cy.getByTestId('ArticleDetails.title.Header').should(
                'have.text',
                'Testing news',
            );
        });

        it('Видит блок комментариев и оставляет комментарий', () => {
            cy.getByTestId('ArticleDetails').should('exist');
            cy.getByTestId('AddCommentForm').scrollIntoView();
            cy.addComment('some comment');
            cy.getByTestId('CommentList').should('have.length', 1);
        });
    });

    describe('with stub', () => {
        it('Видит блок комментариев и оставляет комментарий(with stub)', () => {
            cy.intercept('GET', '**/articles/*', {
                fixture: 'article-details.json',
            });
            cy.getByTestId('ArticleDetails').should('exist');
            cy.getByTestId('AddCommentForm').scrollIntoView();
            cy.addComment('some comment');
            cy.getByTestId('CommentList').should('have.length', 1);
        });

        it('Ставит оценку(with stub)', () => {
            cy.intercept('GET', '**/articles/*', {
                fixture: 'article-details.json',
            });
            cy.getByTestId('ArticleDetails').should('exist');
            cy.getByTestId('RatingCard').scrollIntoView();
            cy.setRate(3);
            cy.get('[data-selected=true]').should('have.length', 3);
        });
    });
});
