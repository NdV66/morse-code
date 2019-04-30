import MorseCode, { SPACE_BETWEEN_CHARS } from './consts/MorseCodeMapping';
import ERRORS_CODE from './consts/ErrorsCode';
import MorseMessage from './models/MorseMessage';

class TextToMorseTranslator {
    /**
     * Translate "normal" text to morse code.
     * @param {string} textMessage
     * @throws {Error} CHAR_DOESNT_EXIST
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
        }

        return translated;
    }

    /**
     * Join morse code as array to string.
     * @param {Array} morseCode morse code as array
     * @param {string} separator separator to join the array
     */
    _joinMorseCodeFromArray(morseCode, separator = SPACE_BETWEEN_CHARS) {
        return morseCode.join(separator);
    }

    /**
     * Map "normal" text to morse code and save it in param object.
     * @param {Message} textMessage - object from class extends class Message
     * @return {Array} morseCode
     */
    translate(textMessage, joinToString = true) {
        let translated = this._mapTextToMorse(textMessage.text);
        translated = joinToString ? this._joinMorseCodeFromArray(translated) : translated;
        return new MorseMessage(translated);
    }
}

export const textToMorseTranslator = new TextToMorseTranslator();
