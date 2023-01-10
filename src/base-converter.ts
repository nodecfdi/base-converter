import { BaseConverterSequence } from './base-converter-sequence';

/**
 * Converts any string of any base to any other base without
 * JS native parseInt or parseFloat limitations.
 *
 * @public
 */
class BaseConverter {
    public static createBase36(): BaseConverter {
        return new BaseConverter(new BaseConverterSequence('0123456789abcdefghijklmnopqrstuvwxyz'));
    }

    private readonly _sequence: BaseConverterSequence;

    constructor(sequence: BaseConverterSequence) {
        this._sequence = sequence;
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
        if (input === '') {
            input = originalSequence[0]; // Use zero has input
        }

        const chars = originalSequence.slice(0, Math.max(0, frombase));
        if (!new RegExp(`^[${chars}]+$`).test(input)) {
            throw new Error('The number to convert contains invalid characters');
        }

        let { length } = input;
        const values: number[] = [];
        for (let index = 0; index < length; index++) {
            values.push(originalSequence.indexOf(input.charAt(index)));
        }

        let result = '';
        let newlen = 0;
        do {
            let divide = 0;
            newlen = 0;
            for (let index = 0; index < length; index++) {
                divide = divide * frombase + values[index];
                if (divide >= tobase) {
                    values[newlen] = Math.floor(divide / tobase);
                    divide %= tobase;
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

export { BaseConverter };
