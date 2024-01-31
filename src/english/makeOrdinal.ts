const ENDS_WITH_DOUBLE_ZERO_PATTERN: RegExp = /(hundred|thousand|(m|b|tr|quadr)illion)$/;
const ENDS_WITH_TEEN_PATTERN: RegExp = /teen$/;
const ENDS_WITH_Y_PATTERN: RegExp = /y$/;
const ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN: RegExp = /(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/;

interface OrdinalLessThanThirteen {
    [key: string]: string;
}

const ordinalLessThanThirteen: OrdinalLessThanThirteen = {
    zero: 'zeroth',
    one: 'first',
    two: 'second',
    three: 'third',
    four: 'fourth',
    five: 'fifth',
    six: 'sixth',
    seven: 'seventh',
    eight: 'eighth',
    nine: 'ninth',
    ten: 'tenth',
    eleven: 'eleventh',
    twelve: 'twelfth'
};

/**
 * Converts a number-word into an ordinal number-word.
 * @example makeOrdinal('one') => 'first'
 * @param {string} words
 * @returns {string}
 */
export function makeOrdinal(words: string): string {
    // Ends with *00 (100, 1000, etc.) or *teen (13, 14, 15, 16, 17, 18, 19)
    if (ENDS_WITH_DOUBLE_ZERO_PATTERN.test(words) || ENDS_WITH_TEEN_PATTERN.test(words)) {
        return words + 'th';
    }
    // Ends with *y (20, 30, 40, 50, 60, 70, 80, 90)
    else if (ENDS_WITH_Y_PATTERN.test(words)) {
        return words.replace(ENDS_WITH_Y_PATTERN, 'ieth');
    }
    // Ends with one through twelve
    else if (ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN.test(words)) {
        return words.replace(ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN, replaceWithOrdinalVariant);
    }
    return words;
}

function replaceWithOrdinalVariant(match: string, numberWord: string): string {
    return ordinalLessThanThirteen[match];
}