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

  test('invalid sequence with empty string', () => {
    const throwFunction = (): BaseConverterSequence => new BaseConverterSequence('');

    expect(throwFunction).toThrow(Error);
    expect(throwFunction).toThrow('Sequence does not contains enough elements');
  });

  test('invalid sequence with one char', () => {
    const throwFunction = (): BaseConverterSequence => new BaseConverterSequence('X');

    expect(throwFunction).toThrow(Error);
    expect(throwFunction).toThrow('Sequence does not contains enough elements');
  });

  test('invalid sequence with multibyte', () => {
    const throwFunction = (): BaseConverterSequence => new BaseConverterSequence('Ñ');

    expect(throwFunction).toThrow(Error);
    expect(throwFunction).toThrow('multibyte');
  });

  test('invalid sequence repeated chars', () => {
    const throwFunction = (): BaseConverterSequence => new BaseConverterSequence('ABCBA');

    expect(throwFunction).toThrow(Error);
    expect(throwFunction).toThrow('The sequence has not unique values');
  });

  test('invalid sequence with repeated chars different case', () => {
    const throwFunction = (): BaseConverterSequence => new BaseConverterSequence('ABCDabcd');

    expect(throwFunction).toThrow(Error);
    expect(throwFunction).toThrow('The sequence has not unique values');
  });

  test('is valid method', () => {
    expect(BaseConverterSequence.isValid('abc')).toBeTruthy();
    expect(BaseConverterSequence.isValid('abcb')).toBeFalsy();
    expect(BaseConverterSequence.isValid('')).toBeFalsy();
    expect(BaseConverterSequence.isValid('0')).toBeFalsy();
  });
});
