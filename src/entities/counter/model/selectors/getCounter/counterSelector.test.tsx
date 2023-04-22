import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/storeProvider/config/stateSchema';
import { counterSelector } from './counterSelector';

describe('counterSelector.test', () => {
    const state: DeepPartial<StateSchema> = {
        counter: {
            value: 10,
        },
    };

    test('', () => {
        expect(counterSelector(state as StateSchema)).toEqual({
            value: 10,
        });
    });
});
