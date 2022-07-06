import { BaseConverterSequence } from '~/base-converter-sequence';

describe('BaseConverterSequence', () => {
    test('valid sequence', () => {
        const source = 'ABCD';
        const sequence = new BaseConverterSequence(source);

        expect(sequence.value()).toBe(source);
        expect(sequence.length()).toBe(4);
        expect(sequence.toString()).toBe(source);
    });

    test('invalid sequence with empty string', () => {
        const t = (): BaseConverterSequence => {
            return new BaseConverterSequence('');
        };

        expect(t).toThrow(Error);
        expect(t).toThrow('Sequence does not contains enough elements');
    });

    test('invalid sequence with one char', () => {
        const t = (): BaseConverterSequence => {
            return new BaseConverterSequence('X');
        };

        expect(t).toThrow(Error);
        expect(t).toThrow('Sequence does not contains enough elements');
    });

    test('invalid sequence with multibyte', () => {
        const t = (): BaseConverterSequence => {
            return new BaseConverterSequence('Ñ');
        };

        expect(t).toThrow(Error);
        expect(t).toThrow('multibyte');
    });

    test('invalid sequence repeated chars', () => {
        const t = (): BaseConverterSequence => {
            return new BaseConverterSequence('ABCBA');
        };

        expect(t).toThrow(Error);
        expect(t).toThrow('The sequence has not unique values');
    });

    test('invalid sequence with repeated chars different case', () => {
        const t = (): BaseConverterSequence => {
            return new BaseConverterSequence('ABCDabcd');
        };

        expect(t).toThrow(Error);
        expect(t).toThrow('The sequence has not unique values');
    });

    test('is valid method', () => {
        expect(BaseConverterSequence.isValid('abc')).toBeTruthy();
        expect(BaseConverterSequence.isValid('abcb')).toBeFalsy();
        expect(BaseConverterSequence.isValid('')).toBeFalsy();
        expect(BaseConverterSequence.isValid('0')).toBeFalsy();
    });
});
