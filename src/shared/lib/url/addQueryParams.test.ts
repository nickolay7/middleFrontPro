import { getQueryParams } from './addQueryParams';

describe('addQueryParams.test', () => {
    test('one param', () => {
        const param = { test: 'text' };

        expect(getQueryParams(param)).toEqual('?test=text');
    });

    test('one some param', () => {
        const param = { test: 'text', test2: 'text2' };

        expect(getQueryParams(param)).toEqual('?test=text&test2=text2');
    });

    test('one some param', () => {
        const param = { test: 'text', test2: undefined };

        expect(getQueryParams(param)).toEqual('?test=text');
    });
});
