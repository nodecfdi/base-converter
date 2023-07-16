import { BaseConverterSequence } from 'src/base-converter-sequence';

describe('BaseConverterSequence', () => {
    test('valid_sequence', () => {
        const source = 'ABCD';
        const sequence = new BaseConverterSequence(source);

        expect(sequence.value()).toBe(source);
        expect(sequence.length()).toBe(4);
        expect(sequence.toString()).toBe(source);
    });

    test('invalid_sequence_with_empty_string', () => {
        const t = (): BaseConverterSequence => new BaseConverterSequence('');

        expect(t).toThrow(Error);
        expect(t).toThrow('Sequence does not contains enough elements');
    });

    test('invalid_sequence_with_one_char', () => {
        const t = (): BaseConverterSequence => new BaseConverterSequence('X');

        expect(t).toThrow(Error);
        expect(t).toThrow('Sequence does not contains enough elements');
    });

    test('invalid_sequence_with_multibyte', () => {
        const t = (): BaseConverterSequence => new BaseConverterSequence('Ñ');

        expect(t).toThrow(Error);
        expect(t).toThrow('multibyte');
    });

    test('invalid_sequence_repeated_chars', () => {
        const t = (): BaseConverterSequence => new BaseConverterSequence('ABCBA');

        expect(t).toThrow(Error);
        expect(t).toThrow('The sequence has not unique values');
    });

    test('invalid_sequence_with_repeated_chars_different_case', () => {
        const t = (): BaseConverterSequence => new BaseConverterSequence('ABCDabcd');

        expect(t).toThrow(Error);
        expect(t).toThrow('The sequence has not unique values');
    });

    test('is_valid_method', () => {
        expect(BaseConverterSequence.isValid('abc')).toBeTruthy();
        expect(BaseConverterSequence.isValid('abcb')).toBeFalsy();
        expect(BaseConverterSequence.isValid('')).toBeFalsy();
        expect(BaseConverterSequence.isValid('0')).toBeFalsy();
    });
});
