import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { Container } from 'reactstrap';
import { IconContext } from "react-icons";
import TranslatorPage from './pages/translatorPage/TranslatorPage';
import NavbarApp from './nav/NavbarApp';
import translatorStore from '../stores/translatorStore';
import navbarStore from '../stores/navbarStore';
import AboutPage from './pages/AboutPage';

const iconContextStyle = {
    className: 'icon-style',
};

const App = () => <IconContext.Provider value={iconContextStyle}>
    <Container fluid className='no-spaces'>
            <Provider
                translatorStore={translatorStore}
                navbarStore={navbarStore}>
            <Router>
                <header>
                    <NavbarApp />
                </header>

                <main>
                    <TranslatorPage />
                    <AboutPage />
                </main>

                <footer>

                </footer>

            </Router>
        </Provider>
    </Container>
</IconContext.Provider>;

export default App;
