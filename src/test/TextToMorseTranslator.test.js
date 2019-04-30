import ERRORS_CODE from '../entities/consts/ErrorsCode';
import {textToMorseTranslator} from '../entities/TextToMorseTranslator';
import TextMessage from '../entities/models/TextMessage';

const TEXT = 'TEXT';
const TEXT_SMALL_CASE = 'text';
const MORSE = '- . -..- -';
const MORSE_ARRAY = ['-', '.', '-..-', '-'];
const TEXT_WITH_DOESNT_EXIST_CHAR_IN_MORSE = 'mątwa';

xdescribe('Translate text to morse code', () => {
    let textMessage = null;

    beforeEach(() => {
        textMessage = new TextMessage(TEXT);
    });

    it(`Should translate ${TEXT} to ${MORSE}`, () => {
        const morseMessage = textToMorseTranslator.translate(textMessage);
        expect(morseMessage.text).toEqual(MORSE);
    });


    it(`Should translate ${TEXT_SMALL_CASE} to ${MORSE}`, () => {
        textMessage.text = TEXT_SMALL_CASE;
        const morseMessage = textToMorseTranslator.translate(textMessage);
        expect(morseMessage.text).toEqual(MORSE);
    });

    it(`Should translate ${TEXT} to ${MORSE_ARRAY}`, () => {
        const morseMessage = textToMorseTranslator.translate(textMessage, false);
        expect(morseMessage.text).toEqual(MORSE_ARRAY);
    });

    it(`Should throw Error [${ERRORS_CODE.CHAR_DOESNT_EXIST}]`, () => {
        const message = new TextMessage(TEXT_WITH_DOESNT_EXIST_CHAR_IN_MORSE);
        expect(() => textToMorseTranslator.translate(message))
        .toThrowError(new Error(ERRORS_CODE.CHAR_DOESNT_EXIST));
    });
});