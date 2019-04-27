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

    set text(text) {
        if(MORSE_CODE_PATTERN.test(text)) {
            this._text = text;
        } else {
            throw new Error(ERRORS_CODE.DATA_SHOULD_BE_MORSE);
        }
    }
}