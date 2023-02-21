import { screen } from '@testing-library/react';
import renderWithProviders from 'shared/lib/helpers/renderWithProviders';
import { userEvent } from '@storybook/testing-library';
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
