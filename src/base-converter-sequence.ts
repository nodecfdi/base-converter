/**
 * This is a value object for BaseConverter containing the sequence
 *
 * @public
 */
class BaseConverterSequence {
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

        const repeated = [...sequence.toUpperCase()].some((v, index, a) => a.lastIndexOf(v) !== index);
        if (repeated) {
            throw new Error('The sequence has not unique values');
        }
    }

    private readonly _sequence: string;
    private readonly _length: number;

    constructor(sequence: string) {
        BaseConverterSequence.checkIsValid(sequence);
        this._sequence = sequence.toUpperCase();
        this._length = new TextEncoder().encode(sequence).byteLength;
    }

    public toString = (): string => this._sequence;

    public value(): string {
        return this._sequence;
    }

    public length(): number {
        return this._length;
    }
}

export { BaseConverterSequence };
