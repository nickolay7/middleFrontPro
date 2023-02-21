import { counterSlice, decrement, increment } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSelector.test', () => {
    const state: CounterSchema = {
        value: 10,
    };

    test('increment', () => {
        expect(counterSlice.reducer(state, increment)).toEqual({
            value: 11,
        });
    });

    test('decrement', () => {
        expect(counterSlice.reducer(state, decrement)).toEqual({
            value: 9,
        });
    });

    test('increment without initialState', () => {
        expect(counterSlice.reducer(undefined, decrement)).toEqual({
            value: -1,
        });
    });

    test('decrement without initialState', () => {
        expect(counterSlice.reducer(undefined, increment)).toEqual({
            value: 1,
        });
    });
});
