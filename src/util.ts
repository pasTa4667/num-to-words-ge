import { MAX, MIN } from "./english/enToWords";

/**
 * Checkes if the number is smaller or larger than Number.MIN_SAFE_INTEGER (MAX)
 * @param num The number to ckeck
 * @returns true if the number is in range, false otherwise
 */
export function isNumberInRange(num: number): boolean {
    return num <= MAX && num >= MIN;
}

/**
 * Checks if the number is finite and not NaN 
 * @param num The number to check
 * @returns true if the number is valid
 */
export function isNumberValid(num: number) {
    return isFinite(num) && !isNaN(num);
}

/**
 * Checks if the number is a float or not
 * @param num The number to check
 * @returns true if the number is a float
 */
export function isNumberFloat(num: number) {
    return num !== Math.trunc(num);
}