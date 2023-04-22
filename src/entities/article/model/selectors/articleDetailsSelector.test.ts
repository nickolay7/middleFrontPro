import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/storeProvider/config/stateSchema';
import { articleDetailsSelector } from './articleDetailsSelector';

describe('articleDetailsSelector.test', () => {
    const data = {
        data: {
            id: '1',
            title: 'some_title',
        },
        isLoading: false,
        error: undefined,
    };

    const state: DeepPartial<StateSchema> = {
        // @ts-ignore
        articleDetails: data,
    };

    test('', () => {
        expect(articleDetailsSelector(state as StateSchema)).toEqual(data);
    });
});
