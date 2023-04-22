import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/storeProvider/config/stateSchema';
import { counterValueSelector } from './counterValueSelector';

describe('counterSelector.test', () => {
    const state: DeepPartial<StateSchema> = {
        counter: {
            value: 10,
        },
    };

    test('', () => {
        expect(counterValueSelector(state as StateSchema)).toEqual(10);
    });
});
