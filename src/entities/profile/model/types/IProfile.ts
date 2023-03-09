import { Currency } from '../../../currency/model/types/currency';
import { Countries } from '../../../country/model/types/country';

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
