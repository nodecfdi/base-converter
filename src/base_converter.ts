import BaseConverterSequence from '#src/base_converter_sequence';

/**
 * Converts any string of any base to any other base without
 * JS native parseInt or parseFloat limitations.
 */
export default class BaseConverter {
  readonly #sequence: BaseConverterSequence;

  public constructor(sequence: BaseConverterSequence) {
    this.#sequence = sequence;
  }

  public static createBase36(): BaseConverter {
    return new BaseConverter(new BaseConverterSequence('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
  }

  public sequence(): BaseConverterSequence {
    return this.#sequence;
  }

  public maximumBase(): number {
    return this.#sequence.length();
  }

  public convert(input: string, frombase: number, tobase: number): string {
    const frombaseInt = Math.floor(frombase);
    const tobaseInt = Math.floor(tobase);
    let inputValue = input.toUpperCase();

    if (frombaseInt < 2 || frombaseInt > this.maximumBase()) {
      throw new Error('Invalid from base');
    }

    if (tobaseInt < 2 || tobaseInt > this.maximumBase()) {
      throw new Error('Invalid to base');
    }

    const originalSequence = this.sequence().value();

    if (inputValue === '') {
      inputValue = originalSequence[0]; // Use zero has input
    }

    const chars = originalSequence.slice(0, Math.max(0, frombaseInt));

    // eslint-disable-next-line security/detect-non-literal-regexp
    if (!new RegExp(`^[${chars}]+$`, 'u').test(inputValue)) {
      throw new Error('The number to convert contains invalid characters');
    }

    let { length } = inputValue;
    const values: number[] = [];

    for (let index = 0; index < length; index += 1) {
      values.push(originalSequence.indexOf(inputValue.charAt(index)));
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
}
