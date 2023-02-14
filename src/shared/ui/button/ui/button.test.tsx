import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/button';

describe('button test', () => {
    beforeEach(() => {
        render(<Button variant={ThemeButton.CLEAR}>TEST</Button>);
    });

    test('has in the document', () => {
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('contains a class', () => {
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
