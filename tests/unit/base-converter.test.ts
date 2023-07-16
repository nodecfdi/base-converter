import { BaseConverterSequence } from 'src/base-converter-sequence';
import { BaseConverter } from 'src/base-converter';

describe('BaseConverter', () => {
    test('basic_functionality', () => {
        const hexSequence = new BaseConverterSequence('0123456789ABCDEF');
        const converter = new BaseConverter(hexSequence);
        expect(converter.sequence()).toBe(hexSequence);
        expect(converter.maximumBase()).toBe(16);
        const input = 'ffff';
        const expected = Number.parseInt(input, 16).toString(2);
        expect(converter.convert(input, 16, 2)).toBe(expected);
    });

    test('convert_empty_string', () => {
        const converter = BaseConverter.createBase36();
        expect(converter.convert('', 10, 2)).toBe('0');
    });

    test.each([[-1], [0], [1], [37]])('invalid_from_base_%s', (base) => {
        const converter = BaseConverter.createBase36();
        const t = (): void => {
            converter.convert('', base, 16);
        };

        expect(t).toThrow(Error);
        expect(t).toThrow('Invalid from base');
    });

    test.each([[-1], [0], [1], [37]])('invalid_to_base_%s', (base) => {
        const converter = BaseConverter.createBase36();
        const t = (): void => {
            converter.convert('', 16, base);
        };

        expect(t).toThrow(Error);
        expect(t).toThrow('Invalid to base');
    });

    test('convert_with_input_not_is_sequence', () => {
        const converter = BaseConverter.createBase36();
        const t = (): void => {
            converter.convert('@', 16, 10);
        };

        expect(t).toThrow(Error);
        expect(t).toThrow('The number to convert contains invalid characters');
    });

    test('convert_using_long_input', () => {
        // This is the main reason to exists of BaseConverter class
        // since parseInt uses scientific notation if the number is >= 1e21 and has a maximum precision of 20.
        const input = '3330303031303030303030333030303233373038';
        const expected = '292233162870206001759766198425879490508935868472';
        const converter = BaseConverter.createBase36();
        expect(converter.convert(input, 16, 10)).toBe(expected);
    });

    test('convert_zero_using_same_base', () => {
        const input = '0000000';
        const expected = '0';

        const converter = BaseConverter.createBase36();
        expect(converter.convert(input, 2, 2)).toBe(expected);
    });

    test('convert_zero_using_different_base', () => {
        const input = '0000000';
        const expected = '0';

        const converter = BaseConverter.createBase36();
        expect(converter.convert(input, 2, 4)).toBe(expected);
    });

    test('convert_zero_using_letters_sequence', () => {
        // Number.parseInt('501020304050607', 8).toString(16) => 141083105187
        //        501020304050607
        const input = 'FABACADAEAFAGAH';
        //           141083105187
        const expected = 'BEBAIDBAFBIH';

        const converter = new BaseConverter(new BaseConverterSequence('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
        expect(converter.convert(input, 8, 16)).toBe(expected);
    });
});
