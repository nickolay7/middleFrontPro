import { useState } from 'react';

export const useInput = (): [string, (val: string) => void] => {
    const [value, setValue] = useState<string>('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return [value, onChange];
};
