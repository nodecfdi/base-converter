import { BaseConverterSequence } from './base-converter-sequence';

/**
 * Converts any string of any base to any other base without
 * JS native parseInt or parseFloat limitations.
 */
class BaseConverter {
    private readonly _sequence: BaseConverterSequence;

    constructor(sequence: BaseConverterSequence) {
        this._sequence = sequence;
    }

    public static createBase36(): BaseConverter {
        return new BaseConverter(new BaseConverterSequence('0123456789abcdefghijklmnopqrstuvwxyz'));
    }

    public sequence(): BaseConverterSequence {
        return this._sequence;
    }

    public maximumBase(): number {
        return this._sequence.length();
    }

    public convert(input: string, frombase: number, tobase: number): string {
        frombase = Math.floor(frombase);
        tobase = Math.floor(tobase);
        input = input.toUpperCase();

        if (frombase < 2 || frombase > this.maximumBase()) {
            throw new Error('Invalid from base');
        }
        if (tobase < 2 || tobase > this.maximumBase()) {
            throw new Error('Invalid to base');
        }

        const originalSequence = this.sequence().value();
        if ('' === input) {
            input = originalSequence[0]; // use zero has input
        }
        const chars = originalSequence.substring(0, frombase);
        if (!new RegExp(`^[${chars}]+$`).test(input)) {
            throw new Error('The number to convert contains invalid characters');
        }

        let length = input.length;
        const values: number[] = [];
        for (let i = 0; i < length; i++) {
            values.push(originalSequence.indexOf(input.charAt(i)));
        }

        let result = '';
        let newlen = 0;
        do {
            let divide = 0;
            newlen = 0;
            for (let i = 0; i < length; i++) {
                divide = divide * frombase + values[i];
                if (divide >= tobase) {
                    values[newlen] = Math.floor(divide / tobase);
                    divide = divide % tobase;
                    newlen = newlen + 1;
                } else if (newlen > 0) {
                    values[newlen] = 0;
                    newlen = newlen + 1;
                }
            }
            length = newlen;
            result = `${originalSequence[divide]}${result}`;
        } while (newlen > 0);

        return result;
    }
}

export { BaseConverter };
