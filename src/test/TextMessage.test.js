import TextMessage from '../entities/models/TextMessage';
import ERRORS_CODE from '../entities/consts/ErrorsCode';

const TEXT = 'TEXT';

xdescribe('Save data to TextMessage', () => {
    let message = null;

    beforeEach(() => {
        message = new TextMessage(TEXT);
    });

    it('Should be not possible to set "null" as textMessage', () => {
        expect(() => message.text = null)
        .toThrowError(new Error(ERRORS_CODE.DATA_SHOULD_BE_STRING));
    });

    it('Should be not possible to set "undefined" as textMessage', () => {
        expect(() => message.text = undefined)
        .toThrowError(new Error(ERRORS_CODE.DATA_SHOULD_BE_STRING));
    });

    it('Should be possible to set "number [0]" as textMessage', () => {
        const valueToSave = 0;
        message.text = valueToSave;
        expect(message.text).toEqual(valueToSave.toString());
    });

    it('Should be possible to set "number [>0]" as textMessage', () => {
        const valueToSave = 111;
        message.text = valueToSave;
        expect(message.text).toEqual(valueToSave.toString());
    });

    it('Should be possible to set "number [<0]" as textMessage', () => {
        const valueToSave = -27;
        message.text = valueToSave;
        expect(message.text).toEqual(valueToSave.toString());
    });


    it('Should be possible to set "not empty string" as textMessage', () => {
        const valueToSave = 'test';
        message.text = valueToSave;
        expect(message.text).toEqual(valueToSave);
    });

});