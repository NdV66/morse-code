import Message from '../entities/models/Message';
import ERRORS_CODE from '../entities/consts/ErrorsCode';
import {textToMorseTranslator} from '../entities/TranslateTextToMorse';

const TEXT = 'TEXT';
const MORSE = '- . -..- -';

describe('Translate text to morse code', () => {
    beforeEach(() => {
        message = new Message(TEXT);
    });

    xit(`Should translate ${TEXT} to ${MORSE}`, () => {
        textToMorseTranslator.translateTextToMorseCode(message);
        expect();
    });
});