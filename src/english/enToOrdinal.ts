import { isNumberFloat } from "../util";

export function enToOrdinal(num: number) {
    const str = String(num);


    let lastTwoDigits = Math.abs(num % 100);

    // if the number is a float (for whatever reason) we only need  
    if(isNumberFloat(num)) {
        lastTwoDigits = Number(str.substring(str.length - 1));
    }

    const betweenElevenAndThirteen = lastTwoDigits >= 11 && lastTwoDigits <= 13;
    const lastChar = str.charAt(str.length - 1);
    return str + (betweenElevenAndThirteen ? 'th'
            : lastChar === '1' ? 'st'
            : lastChar === '2' ? 'nd'
            : lastChar === '3' ? 'rd'
            : 'th');
}