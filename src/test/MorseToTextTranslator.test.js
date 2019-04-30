import ERRORS_CODE from '../entities/consts/ErrorsCode';
import { morseToTextTranslator } from '../entities/MorseToTextTranslator';
import TextMessage from '../entities/models/TextMessage';
import MorseMessage from '../entities/models/MorseMessage';

const TEXT = 'TEXT';
const MORSE = '- . -..- -';

xdescribe('Should translate morse code to normal text', () => {
    let morseMessage = null;

    beforeEach(() => {
        morseMessage = new MorseMessage(MORSE);
    });

    it(`Should translate morse code [${MORSE}] to normal text [${TEXT}]`, () => {
        const textMessage = morseToTextTranslator.translate();
    });
});