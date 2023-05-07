export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('ProfileHeader.Edit').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('ProfileHeader.Save').click();
};

export const resetProfile = (userId: string) =>
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${userId}`,
        headers: { Authorization: 'gfhf' },
        body: {
            id: '4',
            firstname: 'test',
            lastname: 'user',
            age: 15,
            city: 'Rustavi',
            country: 'GEORGIA',
            currency: 'USD',
            username: 'admin',
            avatar: 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg',
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(userId: string): Chainable<void>;
        }
    }
}
