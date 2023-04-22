import {
    fireEvent, screen,
} from '@testing-library/react';
import renderWithProviders from '@/shared/lib/helpers/tests/renderWithProviders';
import { SideBar } from './sideBar';

describe('sidebar test', () => {
    beforeEach(() => {
        renderWithProviders(<SideBar />);
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
