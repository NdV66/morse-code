import MorseMessage from '../entities/models/MorseMessage';
import ERRORS_CODE from '../entities/consts/ErrorsCode';

const MORSE = '-- --- .-. ... .';
const UNCORRECT_MORSE_WITH_OTHER_CHARS = '-- aaa';
const UNCORRECT_MORSE_TOO_MUCH_SPACES = '-- ---  .-. ... .';

const prepareTitleFOrUncorrectIt = (unorrectText) => `Should not save uncorrect morse message [${unorrectText}]`;

describe('Save data to MorseMessage', () => {
    let message = null;

    beforeEach(() => {
        message = new MorseMessage();
    });

    it(`Should save correct morse message [${MORSE}]`, () => {
        message.text = MORSE;
        expect(message.text).toEqual(MORSE);
    });

    it('Should save correct morse message [empty]', () => {
        const empty = '';
        message.text = empty;
        expect(message.text).toEqual(empty);
    });

    it(prepareTitleFOrUncorrectIt(UNCORRECT_MORSE_TOO_MUCH_SPACES), () => {
        expect(() => message.text = UNCORRECT_MORSE_TOO_MUCH_SPACES)
        .toThrowError(new Error(ERRORS_CODE.DATA_SHOULD_BE_MORSE));
    });

    it(prepareTitleFOrUncorrectIt(UNCORRECT_MORSE_WITH_OTHER_CHARS), () => {
        expect(() => message.text = UNCORRECT_MORSE_WITH_OTHER_CHARS)
        .toThrowError(new Error(ERRORS_CODE.DATA_SHOULD_BE_MORSE));
    });
});

