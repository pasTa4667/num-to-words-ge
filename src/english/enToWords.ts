import { isNumberFloat } from "../util";

export const TEN = 10;
export const ONE_HUNDRED = 100;
export const ONE_THOUSAND = 1000;
export const ONE_MILLION = 1000000;
export const ONE_BILLION = 1000000000;           //         1.000.000.000 (9)
export const ONE_TRILLION = 1000000000000;       //     1.000.000.000.000 (12)
export const ONE_QUADRILLION = 1000000000000000; // 1.000.000.000.000.000 (15)
export const MAX = Number.MAX_SAFE_INTEGER;      // 9.007.199.254.740.992 (15)
export const MIN = Number.MIN_SAFE_INTEGER;      //−9.007.199.254.740.991 (15)

const LESS_THAN_TWENTY = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

const TENTHS_LESS_THAN_HUNDRED = [
    'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];


export function enToWords(num: number) {
    let prefix = '';

    // If negative, prepend “minus”
    if (num < 0) {
        prefix = 'minus ';
        num = Math.abs(num);
    }

    return prefix + enToWordsRec(Math.floor(num)) + floatsAsWords(num);
}

function enToWordsRec(num: number, words: string[] = []) {
  
    let remainder = num;
    let word = '';

    // We’re done
    if (num === 0) {
        return !words ? 'zero' : words.join(' ').replace(/,$/, '');
    }

    if (num < 20) {
        remainder = 0;
        word = LESS_THAN_TWENTY[num];

    } else if (num < ONE_HUNDRED) {
        remainder = num % TEN;
        word = TENTHS_LESS_THAN_HUNDRED[Math.floor(num / TEN)];
        // In case of remainder, we need to handle it here to be able to add the “-”
        if (remainder) {
            word += '-' + LESS_THAN_TWENTY[remainder];
            remainder = 0;
        }

    } else if (num < ONE_THOUSAND) {
        remainder = num % ONE_HUNDRED;
        word = enToWordsRec(Math.floor(num / ONE_HUNDRED)) + ' hundred';

    } else if (num < ONE_MILLION) {
        remainder = num % ONE_THOUSAND;
        word = enToWordsRec(Math.floor(num / ONE_THOUSAND)) + ' thousand,';

    } else if (num < ONE_BILLION) {
        remainder = num % ONE_MILLION;
        word = enToWordsRec(Math.floor(num / ONE_MILLION)) + ' million,';

    } else if (num < ONE_TRILLION) {
        remainder = num % ONE_BILLION;
        word = enToWordsRec(Math.floor(num / ONE_BILLION)) + ' billion,';

    } else if (num < ONE_QUADRILLION) {
        remainder = num % ONE_TRILLION;
        word = enToWordsRec(Math.floor(num / ONE_TRILLION)) + ' trillion,';

    } else if (num <= MAX) {
        remainder = num % ONE_QUADRILLION;
        word = enToWordsRec(Math.floor(num / ONE_QUADRILLION)) +
        ' quadrillion,';
    }

    words.push(word);
    return enToWordsRec(remainder, words);
}


function floatsAsWords(num: number) {
    if(!isNumberFloat(num)) {
        return '';
    }

    const numInString = num + "";
    
    const floats = numInString.split('.')[1];

    const words = [' point'];
    Array.from(floats).forEach((num) => words.push(LESS_THAN_TWENTY[Number(num)]));
    return words.join(' ');   
}