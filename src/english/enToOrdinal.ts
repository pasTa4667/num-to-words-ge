export function enToOrdinal(num: number) {
    const str = String(num);
    const lastTwoDigits = Math.abs(num % 100);
    const betweenElevenAndThirteen = lastTwoDigits >= 11 && lastTwoDigits <= 13;
    const lastChar = str.charAt(str.length - 1);
    return str + (betweenElevenAndThirteen ? 'th'
            : lastChar === '1' ? 'st'
            : lastChar === '2' ? 'nd'
            : lastChar === '3' ? 'rd'
            : 'th');
}