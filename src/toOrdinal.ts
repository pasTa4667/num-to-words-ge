import { enToOrdinal } from "./english/enToOrdinal";
import { geToOrdinal } from "./german/geToOrdinal";
import { isNumberInRange, isNumberValid } from "./util";

/**
 * Converts the numeric value into words. Floats might not be accurate if the numer is too large/small.
 * @param num The number to be converted
 * @param lang The language to be converted to ('en' or 'ge'/'de')
 * @param gender Only applicable for german since the ending is gender dependent ('f', 'm', 'n')
 * @returns A string representing the number in words
 */
export function toOrdinal(num: number, lang: string = 'en', gender: string = 'n'): string {

    if(!isNumberValid(num)) {
        throw new Error("Number is not valid.");
    }

    if(!isNumberInRange(num)) {
        throw new RangeError("Number is either too large or too small.");
    }

    if(lang === 'ge' || lang === 'de') {
        return geToOrdinal(num, gender);
    } else if(lang === 'en') {
        return enToOrdinal(num);
    } else {
        throw new Error("Language is not supported.");
    }
}