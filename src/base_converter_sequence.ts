/**
 * This is a value object for BaseConverter containing the sequence
 */
export class BaseConverterSequence {
  readonly #sequence: string;

  public constructor(sequence: string) {
    BaseConverterSequence.checkIsValid(sequence);
    this.#sequence = sequence.toUpperCase();
  }

  public toString(): string {
    return this.#sequence;
  }

  public value(): string {
    return this.#sequence;
  }

  public length(): number {
    return this.#sequence.length;
  }

  public static isValid(value: string): boolean {
    try {
      this.checkIsValid(value);

      return true;
    } catch {
      return false;
    }
  }

  public static checkIsValid(sequence: string): void {
    const textEncoder = new TextEncoder();
    const { byteLength } = textEncoder.encode(sequence);

    // Is not empty
    if (byteLength < 2) {
      throw new Error('Sequence does not contains enough elements');
    }

    if (byteLength !== sequence.length) {
      throw new Error('Cannot use multibyte strings in dictionary');
    }

    const upperSequence = sequence.toUpperCase();

    if (new Set(upperSequence).size !== upperSequence.length) {
      throw new Error('The sequence has not unique values');
    }
  }
}
