import { BaseConverterSequence } from '../../src/base_converter_sequence';

describe('BaseConverterSequence', () => {
  test('valid_sequence', () => {
    const source = 'ABCD';
    const sequence = new BaseConverterSequence(source);

    expect(sequence.value()).toBe(source);
    expect(sequence.length()).toBe(4);
    expect(sequence.toString()).toBe(source);
  });

  test('invalid_sequence_with_empty_string', () => {
    const throwFunction = (): BaseConverterSequence => new BaseConverterSequence('');

    expect(throwFunction).toThrow(Error);
    expect(throwFunction).toThrow('Sequence does not contains enough elements');
  });

  test('invalid_sequence_with_one_char', () => {
    const throwFunction = (): BaseConverterSequence => new BaseConverterSequence('X');

    expect(throwFunction).toThrow(Error);
    expect(throwFunction).toThrow('Sequence does not contains enough elements');
  });

  test('invalid_sequence_with_multibyte', () => {
    const throwFunction = (): BaseConverterSequence => new BaseConverterSequence('Ñ');

    expect(throwFunction).toThrow(Error);
    expect(throwFunction).toThrow('multibyte');
  });

  test('invalid_sequence_repeated_chars', () => {
    const throwFunction = (): BaseConverterSequence => new BaseConverterSequence('ABCBA');

    expect(throwFunction).toThrow(Error);
    expect(throwFunction).toThrow('The sequence has not unique values');
  });

  test('invalid_sequence_with_repeated_chars_different_case', () => {
    const throwFunction = (): BaseConverterSequence => new BaseConverterSequence('ABCDabcd');

    expect(throwFunction).toThrow(Error);
    expect(throwFunction).toThrow('The sequence has not unique values');
  });

  test('is_valid_method', () => {
    expect(BaseConverterSequence.isValid('abc')).toBeTruthy();
    expect(BaseConverterSequence.isValid('abcb')).toBeFalsy();
    expect(BaseConverterSequence.isValid('')).toBeFalsy();
    expect(BaseConverterSequence.isValid('0')).toBeFalsy();
  });
});
