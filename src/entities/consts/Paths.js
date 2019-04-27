export const ELEMENTS_ID = {
    HOME: 'home',
    ABOUT: 'about',
    HELP: 'help',
};

const HOME = '/';
const createLink = (element) => `${HOME}#${ELEMENTS_ID[element]}`;

const PATHS = {
    HOME,
    ABOUT: createLink('ABOUT'),
    HELP: createLink('HELP'),
};


export default PATHS;
