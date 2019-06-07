import TreeNode, {EMPTY_SYMBOL} from './MorseTreeNode';

const NODES_WITHOUT_CHILDRENS = ['5', '4', '3', '2', '+', '1', '6', '=', '/', '7', '8', '9', '0', 'f', 'l', 'p', 'c', 'y', 'q'];

/**
 *
 * @param {Array<char>} symbols - array of chars of nodes wothout children
 */
const createNodesWithoutChildren = (symbols) => {
    const result = {};
    for(const symbol of symbols) {
        result[symbol] = new TreeNode(null, null, symbol);
    }
    return result;
};

const nodesWithoutChildrens = createNodesWithoutChildren(NODES_WITHOUT_CHILDRENS);

const emptyU2 = new TreeNode(null, nodesWithoutChildrens['2'], EMPTY_SYMBOL);
const emptyO90 = new TreeNode(nodesWithoutChildrens['9'], nodesWithoutChildrens['0'], EMPTY_SYMBOL);
const emptyO8 = new TreeNode(nodesWithoutChildrens['8'], null, EMPTY_SYMBOL);
const emptyREmpty = new TreeNode(nodesWithoutChildrens['+'], null, EMPTY_SYMBOL);

const v = new TreeNode(null, nodesWithoutChildrens['3'], 'v');
const h = new TreeNode(nodesWithoutChildrens['5'], nodesWithoutChildrens['4'], 'h');
const j = new TreeNode(null, nodesWithoutChildrens['1'], 'j');
const b = new TreeNode(nodesWithoutChildrens['6'], nodesWithoutChildrens['='], 'b');
const x = new TreeNode(nodesWithoutChildrens['/'], null, 'x');
const z = new TreeNode(nodesWithoutChildrens['7'], null, 'z');

const s = new TreeNode(h, v, 's');
const u = new TreeNode(nodesWithoutChildrens['f'], emptyU2, 'u');
const r = new TreeNode(nodesWithoutChildrens['l'], emptyREmpty, 'r');
const w = new TreeNode(nodesWithoutChildrens['p'], j, 'w');
const o = new TreeNode(emptyO8, emptyO90, 'o');
const g = new TreeNode(z, nodesWithoutChildrens['q'], 'g');
const k = new TreeNode(nodesWithoutChildrens['c'], nodesWithoutChildrens['y'], 'k');
const d = new TreeNode(b, x, 'd');

const i = new TreeNode(s, u, 'i');
const a = new TreeNode(r, w, 'a');
const m = new TreeNode(g, o, 'm');
const n = new TreeNode(d, k, 'n');

const t = new TreeNode(n, m, 't');
const e = new TreeNode(i, a, 'e');

const start = new TreeNode(e, t);

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