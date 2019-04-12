import MorseCode, { CHAR_NOT_EXISTS } from "../models/MorseCode";

class MorseController {
    constructor(morseMessage) {
        this.morseMessage = morseMessage;
    }

    textMessageToMorseTextMessage() {
        const translated = [];
        const textMessageChars = this.morseMessage.textMessage.split('');

        for(const char of textMessageChars) {
            const morseCodeChar = MorseCode[char.toUpperCase()];
            translated.push(morseCodeChar || CHAR_NOT_EXISTS);
        }

        return translated;
    }
}

export const morseController = new MorseController();
