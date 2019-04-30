import MorseCode, { SPACE_BETWEEN_CHARS } from '../consts/MorseCodeMapping';
import ERRORS_CODE from '../consts/ErrorsCode';

const LEFT_NODE_SIGN = '.';
const RIGHT_NODE_SIGN = '-';

class TreeNode {
    constructor(leftNode, rightNode, symbol = 'START', chars = [], currentIndex = 0) {
        this.leftNode = leftNode;
        this.rightNode = rightNode;
        this.chars = chars;
        this.currentIndex = currentIndex;
        this.symbol = symbol;
        this.parent = null;
        this.foundNode = null;
    }

    _setDataInNextNode(node) {
        node.chars = this.chars;
        node.currentIndex = this.currentIndex + 1;
        node.parent = this;
    }

    _goToNode(currentChar) {
        if(currentChar === LEFT_NODE_SIGN && this.leftNode) {
            this._goToLeftNode();
        } else if(currentChar === RIGHT_NODE_SIGN && this.rightNode) {
            this._goToRightNode();
        } else {
            throw new Error(ERRORS_CODE.MORSE_SIGN_ISNT_SUPPORTED);
        }
    }

    _findInNodes() {
        const currentChar = this.chars[this.currentIndex];
        if(this.currentIndex === this.chars.length) {
            return this.symbol;
        } else {
            this._goToNode(currentChar);
        }
    }

    _startNextNode(node) {
        this._setDataInNextNode(node);
        node.findSymbol();
    }

    _goToLeftNode() {
        this._startNextNode(this.leftNode);
    }

    _goToRightNode() {
        this._startNextNode(this.rightNode);
    }

    findSymbol() {
        const x = this._findInNodes();
        if(x) {
            this.parent.foundNode = this;
        } else if(this.parent) {
            this.parent.foundNode = this.foundNode;
        }
        return this.foundNode;
    }
}

const i = new TreeNode(null, null, 'i');
const a = new TreeNode(null, null, 'a');
const e = new TreeNode(i, a, 'e');
const start = new TreeNode(e, null);

/**
 * Search and find (if exist) for symbol in normal text from morse code
 * @param {Array<char>} chars - array of single chars from morse code sign
 * @param {boolean} upperCased - result should be return as upper case or not
 */
export const searchSymbol = (chars, upperCased = true) => {
    start.chars = chars;
    const node = start.findSymbol();
    return upperCased ? node.symbol.toUpperCase() : node.symbol;
};