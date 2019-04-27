import MorseCode, { CHAR_NOT_EXISTS } from "./consts/MorseCodeMapping";

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
            translated.push(morseCodeChar || CHAR_NOT_EXISTS);
        }

        return translated;
    }

    /**
     * Map "normal" text to morse code and save it in param object.
     * @param {Message} Message
     */
    translateTextToMorseCode(Message) {
        const translated = this._mapTextToMorse(Message.textMessage);
        Message.morseText = translated;
        return Message;
    }
}

export const textToMorseTranslator = new TextToMorseTranslator();
