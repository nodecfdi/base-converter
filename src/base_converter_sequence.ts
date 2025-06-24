/**
 * This is a value object for BaseConverter containing the sequence
 */
export default class BaseConverterSequence {
  private readonly sequence: string;

  readonly #length: number;

  public constructor(sequence: string) {
    BaseConverterSequence.checkIsValid(sequence);
    this.sequence = sequence.toUpperCase();
    this.#length = new TextEncoder().encode(sequence).byteLength;
  }

  public static isValid(value: string): boolean {
    try {
      BaseConverterSequence.checkIsValid(value);

      return true;
    } catch {
      return false;
    }
  }

  public static checkIsValid(sequence: string): void {
    const length: number = new TextEncoder().encode(sequence).byteLength;

    // Is not empty
    if (length < 2) {
      throw new Error('Sequence does not contains enough elements');
    }

    if (length !== sequence.length) {
      throw new Error('Cannot use multibyte strings in dictionary');
    }

    // eslint-disable-next-line @typescript-eslint/no-misused-spread
    const repeated = [...sequence.toUpperCase()].some((value, index, a) => a.lastIndexOf(value) !== index);

    if (repeated) {
      throw new Error('The sequence has not unique values');
    }
  }

  public toString = (): string => this.sequence;

  public value(): string {
    return this.sequence;
  }

  public length(): number {
    return this.#length;
  }
}
