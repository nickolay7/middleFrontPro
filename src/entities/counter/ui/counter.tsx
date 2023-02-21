import React from 'react';
import { useAppDispatch, useAppSelector } from 'app/providers/storeProvider/config/hooks';
import { Button } from 'shared/ui/button';
import { decrement, increment, incrementByAmount } from '../model/counterSlice/counterSlice';
import { counterValueSelector } from '../model/selectors/getCounterValue/counterValueSelector';

export const Counter = () => {
    const dispatch = useAppDispatch();
    const value = useAppSelector(counterValueSelector);

    return (
        <div>
            <Button data-testid="inc" onClick={() => dispatch(increment())}>+</Button>
            <span data-testid="value">{`count: ${value}`}</span>
            <Button data-testid="decr" onClick={() => dispatch(decrement())}>-</Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button onClick={() => dispatch(incrementByAmount(10))}>increment by 10</Button>
        </div>
    );
};
