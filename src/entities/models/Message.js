export const MESSAGE_TYPES = {
    TEXT: 'TEXT',
    MORSE: 'MORSE',
    UNDEFINED: 'UNDEFINED',
};

export default class Message {
    constructor(type = MESSAGE_TYPES.UNDEFINED, text = '') {
        this._text = text;
        this._type = type;
    }

    set text(text) {
        this._text = text;
    }

    get text() {
        return this._text;
    }
}
