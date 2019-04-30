import { SPACE_BETWEEN_CHARS } from '../consts/MorseCodeMapping';
import MorseMessage from '../models/MorseMessage';
import TextMessage from '../models/TextMessage';
import { searchSymbol } from '../models/MorseTree';


class MorseToTextTranslator {
    /**
     * Prepare text (morseCode) to be translated
     * @param {string} morseCode - morse code as string
     * @return {Array<Array<char>>}
     */
    _prepareMorseCodeToTranslate(morseCode) {
        const morseCodeSigns = morseCode.split(SPACE_BETWEEN_CHARS);
        let prepared = [];
        for(const sign of morseCodeSigns) {
            const chars = sign.split('');
            prepared.push(chars);
        }
        return prepared;
    }

    /**
     * Translate from morse code to normal text
     * @param {Array<Array<char>>} morseCode
     */
    _translateFromMorseCode(morseCode) {
        let text = '';
        for(const sign of morseCode) {
            text += searchSymbol(sign);
        }
        return text;
    }

    /**
     * Translate full text in morse code to normal text
     * @param {MorseMessage} morseMessage
     */
    translate(morseMessage) {
        const prepared = this._prepareMorseCodeToTranslate(morseMessage.text);
        const translated = this._translateFromMorseCode(prepared);
        return new TextMessage(translated);
    }
}

export const morseToTextTranslator = new MorseToTextTranslator();