import ERRORS_CODE from '../entities/consts/ErrorsCode';
import {textToMorseTranslator} from '../entities/TextToMorseTranslator';
import TextMessage from '../entities/models/TextMessage';

const TEXT = 'TEXT';
const MORSE = '- . -..- -';
const MORSE_ARRAY = ['-', '.', '-..-', '-'];
const TEXT_WITH_DOESNT_EXIST_CHAR_IN_MORSE = 'mątwa';

describe('Translate text to morse code', () => {
    let textMessage = null;

    beforeEach(() => {
        textMessage = new TextMessage(TEXT);
    });

    it(`Should translate ${TEXT} to ${MORSE}`, () => {
        const morseMessage = textToMorseTranslator.translateTextToMorseCode(textMessage);
        expect(morseMessage.text).toEqual(MORSE);
    });

    it(`Should translate ${TEXT} to ${MORSE_ARRAY}`, () => {
        const morseMessage = textToMorseTranslator.translateTextToMorseCode(textMessage, false);
        expect(morseMessage.text).toEqual(MORSE_ARRAY);
    });

    it(`Should throw Error [${ERRORS_CODE.CHAR_DOESNT_EXIST}]`, () => {
        const message = new TextMessage(TEXT_WITH_DOESNT_EXIST_CHAR_IN_MORSE);
        expect(() => textToMorseTranslator.translateTextToMorseCode(message))
        .toThrowError(new Error(ERRORS_CODE.CHAR_DOESNT_EXIST));
    });
});