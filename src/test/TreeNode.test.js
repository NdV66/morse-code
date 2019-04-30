
import { searchSymbol } from '../entities/models/TreeNode';

const TEXT = 'I';
// const MORSE_CODE_CHARS = ['-', '.', '-..-', '-'];
const MORSE_CODE_CHARS = ['.', '.', '.'];

describe('TreeNode', () => {
    it('Should work xd', () => {
        const normalText = searchSymbol(MORSE_CODE_CHARS);
        expect(normalText).toEqual(TEXT);
    });
});