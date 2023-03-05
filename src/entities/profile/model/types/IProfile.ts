import { Countries, Currency } from 'shared/consts/comon';

export interface IProfile {
    'firstname': string,
    'lastname': string,
    'age'?: number,
    'city'?: string,
    'country'?: Countries,
    'currency'?: Currency,
    'username'?: string,
    'avatar'?: string
}
