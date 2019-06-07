import Message, {MESSAGE_TYPES} from './Message';
import ERRORS_CODE from '../consts/ErrorsCode';

export default class TextMessage extends Message {
    constructor(text) {
        super(MESSAGE_TYPES.TEXT, text);
    }

    set text(text) {
        if(text === '' || text === 0 || !!text) {
            this._text = text.toString();
        } else {
            throw new Error(ERRORS_CODE.DATA_SHOULD_BE_STRING);
        }
    }

    get text() {
        return this._text;
    }
}