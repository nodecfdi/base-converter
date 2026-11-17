import { BaseConverterSequence } from './base_converter_sequence';

/**
 * Converts any string of any base to any other base without
 * JS native parseInt or parseFloat limitations.
 */
export class BaseConverter {
  readonly #sequence: BaseConverterSequence;

  public constructor(sequence: BaseConverterSequence) {
    this.#sequence = sequence;
  }

  public sequence(): BaseConverterSequence {
    return this.#sequence;
  }

  public maximumBase(): number {
    return this.#sequence.length();
  }

  public convert(input: string, frombase: number, tobase: number): string {
    const maxBase = this.maximumBase();
    const frombaseInt = Math.floor(frombase);
    if (!Number.isFinite(frombaseInt) || frombaseInt < 2 || frombaseInt > maxBase) {
      throw new Error('Invalid from base');
    }

    const tobaseInt = Math.floor(tobase);
    if (!Number.isFinite(tobaseInt) || tobaseInt < 2 || tobaseInt > maxBase) {
      throw new Error('Invalid to base');
    }

    let inputValue = input.toUpperCase();
    const originalSequence = this.#sequence.value();
    if (inputValue === '') {
      inputValue = originalSequence[0]; // Use zero as input
    }

    let { length } = inputValue;
    const values: number[] = [];

    for (let index = 0; index < length; index += 1) {
      const digit = originalSequence.indexOf(inputValue[index]);
      if (digit === -1 || digit >= frombaseInt) {
        throw new Error('The number to convert contains invalid characters');
      }

      values.push(digit);
    }

    let result = '';
    let newlen = 0;

    do {
      let divide = 0;

      newlen = 0;
      for (let index = 0; index < length; index += 1) {
        divide *= frombaseInt;
        divide += values[index];
        if (divide >= tobaseInt) {
          values[newlen] = Math.floor(divide / tobaseInt);
          divide %= tobaseInt;
          newlen += 1;
        } else if (newlen > 0) {
          values[newlen] = 0;
          newlen += 1;
        }
      }

      length = newlen;
      result = `${originalSequence[divide]}${result}`;
    } while (newlen > 0);

    return result;
  }

  public static createBase36(): BaseConverter {
    return new BaseConverter(new BaseConverterSequence('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
  }
}
