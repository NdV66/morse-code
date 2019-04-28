import React from 'react';
import { action } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Container, Row, Col } from 'reactstrap';
import TEXTS from '../../../entities/consts/Texts';
import styles from './translatorPageStyle.module.scss';

const TextArea = (props) => <div>
    <textarea
        className={styles.text_area}
        id={props.id}
        name={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
    />
</div>;

@inject('translatorStore')
@observer
class TranslatorPage extends React.Component {
    @action.bound
    _handleNormalTextAreaChange(event) {
        this.props.translatorStore.normalText = event.target.value;
    }

    @action.bound
    _handleMorseCodeTextAreaChange(event) {
        this.props.translatorStore.morseCode = event.target.value;
    }

    render() {
        const mdCols = {size: 8, offset: 2};
        const smCols = {size: 12};
        const store = this.props.translatorStore;
        const containerCssClass = `${styles.translator_container}`;

        return <Container fluid className={containerCssClass}>
            <Col sm={smCols} md={mdCols}>
                <TextArea
                    id={'normalText'}
                    value={store.normalText}
                    placeholder={TEXTS.TEXT_AREA_PLACEHOLDER}
                    onChange={this._handleNormalTextAreaChange}
                />
                <TextArea
                    id={'morseCodeText'}
                    value={store.morseCode}
                    placeholder={TEXTS.MORSE_AREA_PLACEHOLDER}
                    onChange={this._handleMorseCodeTextAreaChange}
                />
            </Col>
        </Container>;
    }
}

export default TranslatorPage;