import ERRORS_CODE from '../entities/consts/ErrorsCode';
import {textToMorseTranslator} from '../entities/TextToMorseTranslator';
import TextMessage from '../entities/models/TextMessage';

const TEXT = 'TEXT';
const MORSE = '- . -..- -';

describe('Translate text to morse code', () => {
    let textMessage = null;

    beforeEach(() => {
        textMessage = new TextMessage(TEXT);
    });

    it(`Should translate ${TEXT} to ${MORSE}`, () => {
        const morseMessage = textToMorseTranslator.translateTextToMorseCode(message);
        expect(morseMessage.text).toEqual(MORSE);
    });
});