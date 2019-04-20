import Message from '../../models/Message';
import ERRORS_CODE from '../../models/ErrorsCode';

const TEXT_MESSAGE = 'TEXT';
const CODE_MESSAGE = 'CODE';

describe('Save data to message.textMessage', () => {
    let message = null;

    beforeEach(() => {
        message = new Message(TEXT_MESSAGE, CODE_MESSAGE);
    });

    it('Should be not possible to set "null" as textMessage', () => {
        expect(() => message.textMessage = null)
        .toThrowError(new Error(ERRORS_CODE.DATA_SHOULD_BE_STRING));
    });

    it('Should be not possible to set "undefined" as textMessage', () => {
        expect(() => message.textMessage = undefined)
        .toThrowError(new Error(ERRORS_CODE.DATA_SHOULD_BE_STRING));
    });

    it('Should be possible to set "number [0]" as textMessage', () => {
        const valueToSave = 0;
        message.textMessage = valueToSave;
        expect(message.textMessage).toEqual(valueToSave.toString());
    });

    it('Should be possible to set "number [>0]" as textMessage', () => {
        const valueToSave = 111;
        message.textMessage = valueToSave;
        expect(message.textMessage).toEqual(valueToSave.toString());
    });

    it('Should be possible to set "number [<0]" as textMessage', () => {
        const valueToSave = -27;
        message.textMessage = valueToSave;
        expect(message.textMessage).toEqual(valueToSave.toString());
    });


    it('Should be possible to set "not empty string" as textMessage', () => {
        const valueToSave = 'test';
        message.textMessage = valueToSave;
        expect(message.textMessage).toEqual(valueToSave);
    });

});