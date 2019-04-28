import MorseCode, { CHAR_NOT_EXISTS, SPACE_BETWEEN_CHARS } from './consts/MorseCodeMapping';
import ERRORS_CODE from './consts/ErrorsCode';
import MorseMessage from './models/MorseMessage';

class TextToMorseTranslator {
    /**
     * Translate "normal" text to morse code.
     * @param {string} textMessage
     * @returns {Array} array where each element is one sign from morse code
     */
    _mapTextToMorse(textMessage) {
        const translated = [];
        const textMessageChars = textMessage.split('');

        for(const char of textMessageChars) {
            const morseCodeChar = MorseCode[char.toUpperCase()];
            if (!morseCodeChar) {
                throw new Error(ERRORS_CODE.CHAR_DOESNT_EXIST);
            }
            translated.push(morseCodeChar);
            translated.push(SPACE_BETWEEN_CHARS);
        }

        return translated;
    }

    /**
     * Map "normal" text to morse code and save it in param object.
     * @param {Message} textMessage - object from class extends class Message
     */
    translateTextToMorseCode(textMessage) {
        const translated = this._mapTextToMorse(textMessage.text);
        return new MorseMessage(translated);
    }
}

export const textToMorseTranslator = new TextToMorseTranslator();
