import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import TranslatorPage from './pages/TranslatorPage';
import PATHS from '../models/Paths';
import translatorStore from '../stores/translatorStore';

const App = () =>
    <Provider
        translatorStore={translatorStore}
    >
        <Router>
            <Route path={PATHS.HOME} component={TranslatorPage} />
        </Router>
    </Provider>;

export default App;
