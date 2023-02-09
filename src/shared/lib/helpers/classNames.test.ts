import { classNames } from './classNames';

describe('classNames helper test', () => {
    test('with first argument', () => {
        expect(classNames('class1'))
            .toBe('class1');
    });

    test('with addition arguments', () => {
        expect(classNames('class1', {}, ['class2', 'class3']))
            .toBe('class1 class2 class3');
    });

    test('with mods true', () => {
        expect(classNames('class1', { mod: true, mod2: true }, ['class2', 'class3']))
            .toBe('class1 class2 class3 mod mod2');
    });

    test('with mods false and true', () => {
        expect(classNames('class1', { mod: false, mod2: true }, ['class2', 'class3']))
            .toBe('class1 class2 class3 mod2');
    });
});
