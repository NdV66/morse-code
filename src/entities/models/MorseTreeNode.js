import ERRORS_CODE from '../consts/ErrorsCode';

const LEFT_NODE_SIGN = '.';
const RIGHT_NODE_SIGN = '-';
export const EMPTY_SYMBOL = '';

export default class TreeNode {
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

    _goToNode(currentChar, isFinish) {
        if(currentChar === LEFT_NODE_SIGN && this.leftNode) {
            this._goToLeftNode();
        } else if(currentChar === RIGHT_NODE_SIGN && this.rightNode) {
            this._goToRightNode();
        } else if(isFinish && this.symbol === EMPTY_SYMBOL) {
            throw new Error(ERRORS_CODE.MORSE_SIGN_ISNT_SUPPORTED);
        } else {
            throw new Error(ERRORS_CODE.MORSE_SIGN_ISNT_SUPPORTED);
        }
    }

    _findInNodes() {
        const currentChar = this.chars[this.currentIndex];
        const isFinish = this.currentIndex === this.chars.length;
        return isFinish ? isFinish : this._goToNode(currentChar);
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
        const isNodeFound = this._findInNodes();
        if(isNodeFound) {
            this.parent.foundNode = this;
        } else if(this.parent) {
            this.parent.foundNode = this.foundNode;
        }
        return this.foundNode;
    }
}
