import MorseCode, { CHAR_NOT_EXISTS } from "../models/MorseCode";

class MessageController {
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
     * Join morseCode array to text using separator.
     * @param {Array} morseCode
     * @param {string} separator
     * @return {string} joined morse code text
     */
    _morseCodeToText(morseCode, separator = ' ') {
       return morseCode.join(separator);
    }

    /**
     * Map "normal" text to morse code and save it in param object.
     * @param {Message} Message
     */
    translateTextToMorseCode(Message) {
        const translated = this._mapTextToMorse(Message.textMessage);
        const morseText = this._morseCodeToText(translated);
        Message.morseText = morseText;
        return Message;
    }
}

export const messageController = new MessageController();
