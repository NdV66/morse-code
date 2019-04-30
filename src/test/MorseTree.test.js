
import { searchSymbol } from '../entities/models/MorseTree';
import ERRORS_CODE from '../entities/consts/ErrorsCode';

const SYMBOL = 'X';
const MORSE_CODE_CHARS = ['-', '.', '.', '-'];
const MORSE_CODE_CHARS_UNSUPPORTED = ['.', '.', '.'];
const MORSE_CODE_CHARS_EMPTY = ['.', '.', '-', '-'];

describe('MorseTree transates char by char in morse code sign', () => {
    it(`Should translate morse code ${MORSE_CODE_CHARS.join(' ')} to symbol ${SYMBOL}`, () => {
        const normalText = searchSymbol(MORSE_CODE_CHARS);
        expect(normalText).toEqual(SYMBOL);
    });

    if('Should throw error when code has no sense', () => {
        expect(() => searchSymbol(MORSE_CODE_CHARS_UNSUPPORTED))
        .toThrowError(new Error(ERRORS_CODE.MORSE_SIGN_ISNT_SUPPORTED));
    });

    if('Should throw error when code is an empty symbol', () => {
        expect(() => searchSymbol(MORSE_CODE_CHARS_EMPTY))
        .toThrowError(new Error(ERRORS_CODE.MORSE_SIGN_ISNT_SUPPORTED));
    });
});