import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/button';

describe('button test', () => {
    beforeEach(() => {
        render(<Button variant={ButtonTheme.CLEAR}>TEST</Button>);
    });

    test('has in the document', () => {
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('contains a class', () => {
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
