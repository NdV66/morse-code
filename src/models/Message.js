import ERRORS_CODE from "./ErrorsCode";


export default class Message {
    constructor(textMessage = '', morseTextMessage = '') {
        this._textMessage = textMessage;
        this._morseTextMessage = morseTextMessage;
    }

    saveText(text, field) {
        if(text === '' || text === 0 || !!text) {
            this[field] = '' + text;
        } else {
            throw new Error(ERRORS_CODE.DATA_SHOULD_BE_STRING);
        }
    }

    set textMessage(text) {
       this.saveText(text, '_textMessage');
    }

    get textMessage() {
        return this._textMessage;
    }

    set morseTextMessage(text) {
        this.saveText(text, '_morseTextMessage');
    }

    get morseTextMessage() {
        return this._morseTextMessage;
    }

}
