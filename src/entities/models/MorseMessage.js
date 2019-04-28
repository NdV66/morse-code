import Message, {MESSAGE_TYPES} from './Message';
import ERRORS_CODE from '../consts/ErrorsCode';
import { MORSE_CODE_PATTERN } from '../consts/MorseCodeMapping';

export default class MorseMessage extends Message {
    constructor(text) {
        super(MESSAGE_TYPES.MORSE, text);
    }

    get text() {
        return this._text;
    }

    /**
     * Save morse code (as string)
     * @param {string} text - morse code as string (only \s, - and . allowed)
     */
    set text(text) {
        if(text === '' || MORSE_CODE_PATTERN.test(text)) {
            this._text = text;
        } else {
            throw new Error(ERRORS_CODE.DATA_SHOULD_BE_MORSE);
        }
    }
}