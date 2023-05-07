import { USER_LOGIN_DATA } from '../../../src/shared/consts/user';
import { User } from '../../../src/entities/user';
import selectByTestId from '../../helpers/selectByTestId';

export const login = (username: string, password: string) =>
    cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/login',
            body: {
                username,
                password,
            },
        })
        .then(({ body }) => {
            window.localStorage.setItem(USER_LOGIN_DATA, JSON.stringify(body));

            return body;
        });

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId));

declare global {
    namespace Cypress {
        interface Chainable {
            login(username: string, password: string): Chainable<User>;
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}
