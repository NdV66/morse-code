const TEXTS = {
    NAME: 'Morse Translator',
    ABOUT: 'About',
    HELP: 'Help',
    TRANSLATOR: 'Translator',
    TEXT_AREA_PLACEHOLDER: 'Write the text',
    MORSE_AREA_PLACEHOLDER: 'Write some morse',
    TRANSLATE: 'Translate',
    TEXT_LABEL: 'Common text',
    MORSE_LABEL: 'Morse code',
    SWAP: 'Swap',
    GITHUB: 'See my GitHub',
    OTHER_PROJECTS: 'See my other projects',
    BE_STAR_ONLINE: 'BB Code editor',
    MY_SITE: 'My site',
    DEV_NAMES_GENERATOR: 'Funny names for git generator',
    HERBACIANKA: 'Handmade shop business card',
    THIS_SITE_CODE: 'Sources of this site',
    AUTHOR: 'Created by NdV66, 2019',
    ERRORS_DESC: {
        ERROR_HEADER: 'Error',
        DATA_SHOULD_BE_STRING: 'Data should be string.',
        DATA_SHOULD_BE_MORSE:  'Data should be morse code.',
        CHAR_DOESNT_EXIST: 'One of the typed chars is not supoported by translator.',
        MORSE_SIGN_ISNT_SUPPORTED: 'One of the typed morse code symbols is not supoported by translator.',
    },
    ABOUT_HEADER: 'About',
    ABOUT_TEXT: {
        APP_HEADER: `<h4>This app</h4>`,
        APP: `This page is created to demonstrate how the morse code work and how fun it is.
            Now it could be only hobby for you, but in the past to know it was the base to send the quick messages to the people, who were living very far from you.
            If you want, you can try to learn it or just have fun with this translator.
            This project supports translate from and to this code system, using the text areas above.`,
        AUTHOR_HEADER: `<h4>Author</h4>`,
        AUTHOR: `My nickname is Narin and i am a front-end devloper for few years.
                I like this job, I like its weird technologies - like ReactJS or pure JavaScript.
                For me it is really nice to create something for end users.
                If you prefer to see more of my project, look at the footer of this page. There are the links to them and to my GitHub.`,
    },
    HELP_HEADER: 'Help',
    HELP_TEXT: {
        USING_HEADER: `<h4>Usage</h4>`,
        USING: `To translate from 'normal' text to morse code, type text in <strong>'Common Text' textarea</strong>.
            Then click <strong>'Translate' button</strong> - the result will be as 'common' text, able to read.
            For the other case, click <strong>'Swap' button</strong>. This will change the order ot the text areas.
            Now the <strong>'Morse Code' text area</strong> is first. Type there your morse code and then click <strong>'Translate' Button</strong>.`,
        FORMAT_HEADER: `<h4>Formatting</h4>`,
        FORMAT: `One typed space is equal to space between words in text or code.`,
    },
};

export default TEXTS;