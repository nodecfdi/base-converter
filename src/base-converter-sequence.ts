/**
 * This is a value object for BaseConverter containing the sequence
 */
class BaseConverterSequence {
    private readonly _sequence: string;

    private readonly _length: number;

    constructor(sequence: string) {
        BaseConverterSequence.checkIsValid(sequence);
        this._sequence = sequence.toUpperCase();
        this._length = new TextEncoder().encode(sequence).byteLength;
    }

    public toString = (): string => {
        return this._sequence;
    };

    public value(): string {
        return this._sequence;
    }

    public length(): number {
        return this._length;
    }

    public static isValid(value: string): boolean {
        try {
            BaseConverterSequence.checkIsValid(value);

            return true;
        } catch (e) {
            return false;
        }
    }

    public static checkIsValid(sequence: string): void {
        const length: number = new TextEncoder().encode(sequence).byteLength;
        // is not empty
        if (length < 2) {
            throw new Error('Sequence does not contains enough elements');
        }
        if (length !== sequence.length) {
            throw new Error('Cannot use multibyte strings in dictionary');
        }
        const repeated = sequence
            .toUpperCase()
            .split('')
            .some((v, i, a) => {
                return a.lastIndexOf(v) != i;
            });
        if (repeated) {
            throw new Error('The sequence has not unique values');
        }
    }
}

export { BaseConverterSequence };
