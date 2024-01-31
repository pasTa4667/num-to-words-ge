import { ONE_HUNDRED, TEN, ONE_THOUSAND, ONE_MILLION, ONE_BILLION, ONE_TRILLION, ONE_QUADRILLION, MAX } from "../english/enToWords";
import { isNumberFloat } from "../util";

const LESS_THAN_TWENTY_GE = [
    'null', 'ein', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn',
    'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'siebzehn', 'achtzehn', 'neunzehn', 'zwanzig'
];

const TENTHS_LESS_THAN_HUNDRED_GE = [
    'null', 'zehn', 'zwanzig', 'dreisig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig'
];


export function geToWords(num: number) {
    let prefix = '';

    // If negative, prepend “minus”
    if (num < 0) {
        prefix = 'minus ';
        num = Math.abs(num);
    }

    // If float, convert float first
    const floats = floatsAsWords(num);
    const inWords = geToWordsRec(Math.floor(num));

    //we have to add an 's' to 'ein', if its the alst word
    const lastWord = inWords.substring(inWords.length - 3, inWords.length);
    return prefix + (lastWord === 'ein' ? inWords + 's' : inWords) + floats;
}

function geToWordsRec(num: number, words: string[] = []) {
    
    let remainder = num;
    let word = '';

    // We’re done
    if (num === 0) {
        return !words ? 'null' : words.join(' ').replace(/,$/, '');
    }

    if (num < 20) {
        remainder = 0;
        word = LESS_THAN_TWENTY_GE[num];

    } else if (num < ONE_HUNDRED) {
        remainder = num % TEN;
        // In case of remainder, we need to handle the german way around 
        if (remainder) {
            word = LESS_THAN_TWENTY_GE[remainder] + 'und';
            remainder = 0;
        }
        word += TENTHS_LESS_THAN_HUNDRED_GE[Math.floor(num / TEN)];

    } else if (num < ONE_THOUSAND) {
        remainder = num % ONE_HUNDRED;
        word = geToWordsRec(Math.floor(num / ONE_HUNDRED)) + 'hundert';

    } else if (num < ONE_MILLION) {
        remainder = num % ONE_THOUSAND;
        word = geToWordsRec(Math.floor(num / ONE_THOUSAND)) + 'tausend,';

    } else if (num < ONE_BILLION) {
        remainder = num % ONE_MILLION;
        const nextNum = Math.floor(num / ONE_MILLION);
        word = nextNum === 1 ? 'eine million,' : geToWordsRec(nextNum) + 'million,';

    } else if (num < ONE_TRILLION) {
        remainder = num % ONE_BILLION;
        const nextNum = Math.floor(num / ONE_BILLION);
        word = nextNum === 1 ? 'eine milliarde,' : geToWordsRec(nextNum) + 'milliarden,';

    } else if (num < ONE_QUADRILLION) {
        remainder = num % ONE_TRILLION;
        const nextNum = Math.floor(num / ONE_TRILLION);
        word = nextNum === 1 ? 'eine billion,' : geToWordsRec(nextNum) + 'billion,';

    } else if (num <= MAX) {
        remainder = num % ONE_QUADRILLION;
        word = geToWordsRec(Math.floor(num / ONE_QUADRILLION)) + ' quadrillion,';
    }

    words.push(word);
    return geToWordsRec(remainder, words);
}

function floatsAsWords(num: number) {
    if(!isNumberFloat(num)) {
        return '';
    }

    const numInString = num + "";
    
    const floats = numInString.split('.')[1];

    const words = [' komma'];
    Array.from(floats).forEach((num) => num === '1' ? words.push('eins') : words.push(LESS_THAN_TWENTY_GE[Number(num)]));
    return words.join(' ');   
}