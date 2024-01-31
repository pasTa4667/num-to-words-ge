import { makeOrdinal } from "./english/makeOrdinal";
import { geToOrdinalWord } from "./german/geToOrdinal";
import { toWords } from "./toWords";

/**
 * Converts a number into ordinal words.
 * @param num Number to convert
 * @param lan Language, either 'en' or 'de'/'ge'
 * @param gender Only needed for german, either 'n'/'f'/'m'
 * @returns number as ordinal in words
 */
export function toOrdinalWords(num: number, lan: string = 'en', gender: string = 'n') {

    if(lan === 'de' || lan === 'ge') {
        return geToOrdinalWord(num, gender);
    } 
    
    if(lan === 'en') {
        const words = toWords(num, 'en');
        return makeOrdinal(words);
    } else {
        throw new Error('Language is not supported');
    }
}