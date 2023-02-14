import {
    fireEvent, screen,
} from '@testing-library/react';
import renderWithTranslation from 'shared/lib/helpers/renderWithTranslation';
import { SideBar } from './sideBar';

describe('sidebar test', () => {
    beforeEach(() => {
        renderWithTranslation(<SideBar />);
    });

    test('has in the document', () => {
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('collapse sidebar', () => {
        fireEvent.click(screen.getByTestId('collapse'));
        expect(screen.getByTestId('sidebar')).toHaveClass('close');
        fireEvent.click(screen.getByTestId('collapse'));
        expect(screen.getByTestId('sidebar')).not.toHaveClass('close');
    });
});
