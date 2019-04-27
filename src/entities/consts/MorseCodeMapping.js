const MorseCode = {
    A: '.-',
    B: '-...',
    C: '-.-.',
    D: '-..',
    E: '.',
    F: '..-.',
    G: '--.',
    H: '....',
    I: '..',
    J: '.---',
    K: '-.-',
    L: '.-..',
    M: '--',
    N: '-.',
    O: '---',
    P: '.--.',
    Q: '--.-',
    R: '.-.',
    S: '...',
    T: '-',
    U: '..-',
    V: '...-',
    W: '.--',
    X: '-..-',
    Y: '-.--',
    Z: '--..',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
    0: '-----',
    ',': '--..--',
    '.': '.-.-.-',
    '?': '..--..',
    ';': '-.-.-',
    ':': '---...',
    '/': '-..-.',
    '-': '-....-',
    "'": '.----.',
    '()': '-.--.-',
    '_': '..--.-',
    '@': '.--.-.',
    ' ': '.......'
};

export const CHAR_NOT_EXISTS = 'CHAR_NOT_EXISTS';
export const ONE_DOT_TIME_MS = 100;
export const ONE_DOT_CHAR = ' ';
export const CHAR_IN_ELEMETS_SPACE = ONE_DOT_TIME_MS;
export const CHAR_SPACE = 3 * ONE_DOT_TIME_MS;
export const WORD_SPACE = 7 * ONE_DOT_TIME_MS;
export const MORSE_CODE_PATTERN = /^(-|\.|\s)*$/;
// export const MORSE_CODE_PATTERN = /^(-|\.)+(-|\.|\s)$/;


export default MorseCode;
