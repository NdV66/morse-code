export const ELEMENTS_ID = {
    HOME: 'home',
    ABOUT: 'about',
    HELP: 'help',
    TRANSLATOR: 'translator',
};

const HOME = '/';
const createLink = (element) => `${HOME}#${ELEMENTS_ID[element]}`;

const PATHS = {
    HOME,
    ABOUT: createLink('ABOUT'),
    HELP: createLink('HELP'),
    TRANSLATOR: createLink('TRANSLATOR'),
    GITHUB: 'https://github.com/NdV66',
    BE_STAR_ONLINE: 'https://ndv66.github.io/beStarOnline/#/',
    MY_SITE: 'https://ndv66.github.io/',
    DEV_NAMES_GENERATOR: 'https://github.com/NdV66/DevNamesGenerator',
    HERBACIANKA: 'https://herbacianka.herokuapp.com/',
    THIS_SITE_CODE: 'https://github.com/NdV66/morse-code',
};


export default PATHS;
