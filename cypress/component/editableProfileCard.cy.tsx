import { EditableProfileCard } from '../../src/features/editableProfileCard';
import { TestOptions } from '../../src/shared/lib/helpers/tests/renderWithProviders';

const USER_ID = '1';

describe('editableProfileCard.cy.tsx', () => {
    it('playground', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestOptions
                options={{
                    initialState: {
                        user: {
                            authData: {
                                id: USER_ID,
                            },
                        },
                    },
                }}
            >
                <EditableProfileCard id={USER_ID} />
            </TestOptions>,
        );
    });
});
