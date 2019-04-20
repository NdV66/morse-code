import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { Container, Row, Col } from 'reactstrap';
import TranslatorPage from './pages/TranslatorPage';
import NavbarApp from './nav/NavbarApp';
import PATHS from '../models/Paths';
import translatorStore from '../stores/translatorStore';
import navbarStore from '../stores/navbarStore';
import AboutPage from './pages/AboutPage';

const App = () => <Container fluid>
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
</Container>;

export default App;
