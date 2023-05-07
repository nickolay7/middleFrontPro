import selectByTestId from '../../helpers/selectByTestId';

let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.login('test_user', '123').then((data) => {
            profileId = data.id;
            cy.visit(`/profile/${data.id}`);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('Пользователь успешно загружается', () => {
        cy.get(selectByTestId('ProfileCard.firstname')).should(
            'have.value',
            'test',
        );
    });

    it('Редактирует его', () => {
        cy.updateProfile('new', 'newTest');
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'new');
        cy.getByTestId('ProfileCard.lastname').should('have.value', 'newTest');
    });

    it.skip('Пример заскипанного теста', () => {
        cy.updateProfile('new', 'newTest');
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'new');
        cy.getByTestId('ProfileCard.lastname').should('have.value', 'newTest');
    });
});
