import { describe, expect, test } from 'vitest';
import { BaseConverterSequence } from '../../src/base_converter_sequence';

describe('base converter sequence', () => {
  test('valid sequence', () => {
    const source = 'ABCD';
    const sequence = new BaseConverterSequence(source);

    expect(sequence.value()).toBe(source);
    expect(sequence.length()).toBe(4);
    expect(sequence.toString()).toBe(source);
  });

  test.each([
    ['empty string', '', 'Sequence does not contains enough elements'],
    ['one char', 'X', 'Sequence does not contains enough elements'],
    ['multibyte', 'Ñ', 'multibyte'],
    ['repeated chars', 'ABCBA', 'The sequence has not unique values'],
    ['repeated chars different case', 'ABCDabcd', 'The sequence has not unique values'],
  ])('invalid sequence with %s', (_case, input, expectedError) => {
    const throwFunction = (): BaseConverterSequence => new BaseConverterSequence(input);

    expect(throwFunction).toThrow(Error);
    expect(throwFunction).toThrow(expectedError);
  });

  test('is valid method', () => {
    expect(BaseConverterSequence.isValid('abc')).toBeTruthy();
    expect(BaseConverterSequence.isValid('abcb')).toBeFalsy();
    expect(BaseConverterSequence.isValid('')).toBeFalsy();
    expect(BaseConverterSequence.isValid('0')).toBeFalsy();
  });
});
