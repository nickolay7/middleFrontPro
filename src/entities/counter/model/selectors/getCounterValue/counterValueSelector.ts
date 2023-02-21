import { createSelector } from '@reduxjs/toolkit';
import { counterSelector } from '../getCounter/counterSelector';
import { CounterSchema } from '../../types/counterSchema';

export const counterValueSelector = createSelector(
    counterSelector,
    (counter: CounterSchema) => counter.value,
);
