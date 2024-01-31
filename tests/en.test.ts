import { toWords } from "../src";
import { toOrdinal } from "../src/toOrdinal";
import { toOrdinalWords } from "../src/toOrdinalWords";

const ordinalTestNumbers = [654, 654.32];

// test('number-to-german', () => {
//     ordinalTestNumbers.forEach((num) => console.log('from: ', num, 'to:', toWords(num, 'de')));
// });

// test('number-to-german-ordinal', () => {
//     ordinalTestNumbers.forEach((num) => console.log('from: ', num, 'to:', toOrdinal(num, 'de', 'f')));
// });

test('number-to-german-ordinal-word', () => {
    ordinalTestNumbers.forEach((num) => console.log('from: ', num, 'to:', toOrdinalWords(num, 'de', 'm')));
});

test('number-to-german-ordinal-word', () => {
    ordinalTestNumbers.forEach((num) => console.log('from: ', num, 'to:', toOrdinalWords(num, 'de', 'f')));
});

test('number-to-german-ordinal-word', () => {
    ordinalTestNumbers.forEach((num) => console.log('from: ', num, 'to:', toOrdinalWords(num, 'de', 'n')));
});

// test('number-to-english', () => {
//     ordinalTestNumbers.forEach((num) => console.log('from: ', num, 'to:', toWords(num, 'en')));
// });

// test('number-to-english-ordinal', () => {
//     ordinalTestNumbers.forEach((num) => console.log('from: ', num, 'to:', toOrdinal(num, 'en')));
// });

test.only('number-to-english-ordinal-word', () => {
    ordinalTestNumbers.forEach((num) => console.log('from: ', num, 'to:', toOrdinal(num, 'en')));
    ordinalTestNumbers.forEach((num) => console.log('from: ', num, 'to:', toOrdinalWords(num, 'en')));
});