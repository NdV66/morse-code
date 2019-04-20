import React from 'react';
import { inject, observer } from 'mobx-react';
import { Container, Row, Col } from 'reactstrap';

@inject('translatorStore')
@observer
class TranslatorPage extends React.Component {
    render() {
        return <Container fluid className='test'>
            translatorPage test
        </Container>;
    }
}

export default TranslatorPage;