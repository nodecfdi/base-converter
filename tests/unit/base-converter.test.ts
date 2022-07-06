import { BaseConverter, BaseConverterSequence } from '~/index';

describe('BaseConverter', () => {
    test('basic functionality', () => {
        const hexSequence = new BaseConverterSequence('0123456789ABCDEF');
        const converter = new BaseConverter(hexSequence);
        expect(converter.sequence()).toBe(hexSequence);
        expect(converter.maximumBase()).toBe(16);
        const input = 'ffff';
        const expected = parseInt(input, 16).toString(2);
        expect(converter.convert(input, 16, 2)).toBe(expected);
    });

    test('convert empty string', () => {
        const converter = BaseConverter.createBase36();
        expect(converter.convert('', 10, 2)).toBe('0');
    });

    test.each([[-1], [0], [1], [37]])('invalid from base %s', (base) => {
        const converter = BaseConverter.createBase36();
        const t = (): void => {
            converter.convert('', base, 16);
        };

        expect(t).toThrow(Error);
        expect(t).toThrow('Invalid from base');
    });

    test.each([[-1], [0], [1], [37]])('invalid to base %s', (base) => {
        const converter = BaseConverter.createBase36();
        const t = (): void => {
            converter.convert('', 16, base);
        };

        expect(t).toThrow(Error);
        expect(t).toThrow('Invalid to base');
    });

    test('convert with input not is sequence', () => {
        const converter = BaseConverter.createBase36();
        const t = (): void => {
            converter.convert('@', 16, 10);
        };

        expect(t).toThrow(Error);
        expect(t).toThrow('The number to convert contains invalid characters');
    });

    test('convert using long input', () => {
        // this is the main reason to exists of BaseConverter class
        // since parseInt uses scientific notation if the number is >= 1e21 and has a maximum precision of 20.
        const input = '3330303031303030303030333030303233373038';
        const expected = '292233162870206001759766198425879490508935868472';
        const converter = BaseConverter.createBase36();
        expect(converter.convert(input, 16, 10)).toBe(expected);
    });

    test('convert zero using same base', () => {
        const input = '0000000';
        const expected = '0';

        const converter = BaseConverter.createBase36();
        expect(converter.convert(input, 2, 2)).toBe(expected);
    });

    test('convert zero using different base', () => {
        const input = '0000000';
        const expected = '0';

        const converter = BaseConverter.createBase36();
        expect(converter.convert(input, 2, 4)).toBe(expected);
    });

    test('convert zero using letters sequence', () => {
        // parseInt('501020304050607', 8).toString(16) => 141083105187
        //        501020304050607
        const input = 'FABACADAEAFAGAH';
        //           141083105187
        const expected = 'BEBAIDBAFBIH';

        const converter = new BaseConverter(new BaseConverterSequence('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
        expect(converter.convert(input, 8, 16)).toBe(expected);
    });
});
