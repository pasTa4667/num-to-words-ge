import { enToWords } from "./english/enToWords";
import { geToWords } from "./german/geToWords";
import { isNumberInRange, isNumberValid } from "./util";

/**
 * Converts the numeric value into words. Floats might not be accurate if the numer is too large/small.
 * @param num The number to be converted
 * @param lang The language to be converted to ('en' or 'ge'/'de')
 * @returns A string representing the number in words
 */
export function toWords(num: number, lang: string = 'en'): string {

    if(!isNumberValid(num)) {
        throw new Error("Number is not valid.");
    }

    if(!isNumberInRange(num)) {
        throw new RangeError("Number is either too large or too small.");
    }

    if(lang === 'ge' || lang === 'de') {
        return geToWords(num);
    } else if(lang === 'en') {
        return enToWords(num);
    } else {
        throw new Error("Language is not supported.");
    }
}