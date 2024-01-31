import { toWords } from "../src";
import { toOrdinal } from "../src/toOrdinal";
import { toOrdinalWord } from "../src/toOrdinalWord";

const ordinalTestNumbers = [1, 3, 5, 6, 7, 8, 11, 13, 21, 100, 29399001, 200043, 2302, 1000000, -23434, -458934.456, 3541954534.435029, 4324524634524367];

test('number-to-german', () => {
    ordinalTestNumbers.forEach((num) => console.log('from: ', num, 'to:', toWords(num, 'de')));
});

test('number-to-german-ordinal', () => {
    ordinalTestNumbers.forEach((num) => console.log('from: ', num, 'to:', toOrdinal(num, 'de', 'f')));
});

test('number-to-german-ordinal-word', () => {
    ordinalTestNumbers.forEach((num) => console.log('from: ', num, 'to:', toOrdinalWord(num, 'de', 'm')));
});

test('number-to-english', () => {
    console.log(toWords(123456, 'en'));
    ordinalTestNumbers.forEach((num) => console.log('from: ', num, 'to:', toWords(num, 'en')));
});

test('number-to-english-ordinal', () => {
    ordinalTestNumbers.forEach((num) => console.log('from: ', num, 'to:', toOrdinal(num, 'en')));
});

test('number-to-english-ordinal-word', () => {
    ordinalTestNumbers.forEach((num) => console.log('from: ', num, 'to:', toOrdinalWord(num, 'en')));
});