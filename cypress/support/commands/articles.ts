import { Article } from '../../../src/entities/article';

export const removeArticle = (articleId: string) =>
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'gfhf' },
    });

export const createArticle = () =>
    cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { Authorization: 'gfhf' },
            body: {
                title: 'Testing news',
                subtitle: 'Что нового в JS за 2022 год?',
                // eslint-disable-next-line max-len
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1XzKKxskqjMPB_VGHgJZxA8uGRIoM7fyHJg&usqp=CAU',
                views: 122,
                createdAt: '26.02.2012',
                userId: '1',
                type: ['ART'],
                blocks: [],
            },
        })
        .then((res) => res.body);

export const addComment = (comment: string) => {
    cy.getByTestId('AddCommentInput').type(comment);
    cy.getByTestId('SaveCommentButton').click();
};

export const setRate = (rate: number) => {
    cy.getByTestId(`RatingStar.${rate}`).click();
    cy.getByTestId('FeedbackInput').type('some feedback');
    cy.getByTestId('FeedBackSendButton').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(): Chainable<Article>;
            removeArticle(userId: string): Chainable<void>;
            addComment(comment: string): Chainable<void>;
            setRate(rate: number): Chainable<void>;
        }
    }
}
