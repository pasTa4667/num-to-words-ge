import { isNumberFloat } from "../util";
import { geToWords } from "./geToWords";

export function geToOrdinal(num: number, gender: string) {
    let toConvert = Math.abs(num);

    // in case of float (for whatever reason it should be one) we just need the last number
    if(isNumberFloat(num)) {
        toConvert = Number(toConvert.toString().substring(toConvert.toString().length - 1));
    }

    if(toConvert >= 100) {
        toConvert = Number(toConvert.toString().substring(toConvert.toString().length - 2));
    }

    if(toConvert === 0 || toConvert >= 20) {
        return num + 's' + generateSuffix(gender);
    }

    if(toConvert < 20) {
        return num + generateSuffix(gender);
    } else {
        throw new Error('Could not find an ordinal for that number.');
    }
}

export function geToOrdinalWord(num: number, gender: string) {
    let toConvert = Math.abs(num);

    if(isNumberFloat(num)) {
        toConvert = Number(toConvert.toString().substring(toConvert.toString().length - 1));
    }

    if(toConvert >= 100) {
        toConvert = Number(toConvert.toString().substring(toConvert.toString().length - 2));
    }

    if(toConvert === 0 || toConvert >= 20) {
        return wordWithoutSuffix(num) + 's' + generateSuffix(gender);
    }

    if(toConvert < 20) {
        return wordWithoutSuffix(num) + generateSuffix(gender);
    } else {
        throw new Error('Could not find an ordinal for that number.');
    }
}

function generateSuffix(gender: string = 'n') {
    const f = 'te';
    const m = 'ter';
    const n = 'tes';

    return (gender === 'f' ? f : (gender === 'm' ? m : n))
}

function wordWithoutSuffix(num: number) {
    const word = geToWords(num);
    const lastWord = word.substring(word.length - 4);

    switch(lastWord) {
        case 'eins': // one
            return word.substring(0, word.length - 4) + 'ers';
        case 'drei': // three
            return word.substring(0, word.length - 4) + 'drit';
        case 'eben': // seven
            return word.substring(0, word.length - 4) + 'eb';
        case 'acht': // eight -> remove double t
            return word.substring(0, word.length - 1);
        default:
            return word;
    }
}