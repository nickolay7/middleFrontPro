import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import renderWithProviders from '@/shared/lib/helpers/tests/renderWithProviders';
import { Counter } from './counter';

describe('counter.test', () => {
    test('has value', () => {
        renderWithProviders(<Counter />, { initialState: { counter: { value: 10 } } });

        expect(screen.getByTestId('value')).toHaveTextContent('10');
    });

    test('increment', () => {
        renderWithProviders(<Counter />, { initialState: { counter: { value: 10 } } });
        userEvent.click(screen.getByTestId('inc'));

        expect(screen.getByTestId('value')).toHaveTextContent('11');
    });

    test('decrement', () => {
        renderWithProviders(<Counter />, { initialState: { counter: { value: 10 } } });
        userEvent.click(screen.getByTestId('decr'));

        expect(screen.getByTestId('value')).toHaveTextContent('9');
    });
});
