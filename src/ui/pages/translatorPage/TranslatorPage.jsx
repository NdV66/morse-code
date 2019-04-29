import React from 'react';
import { action } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Container, Row, Col, Button } from 'reactstrap';
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

const ButtonPanel = (props) => <div className='mt-3 mb-3'>
    <Button onClick={props.onClickTranslateButton} color='primary'>{TEXTS.TRANSLATE}</Button>
</div>;

// const errorPopup = (props) =>

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

    @action.bound
    _onClickTranslateButton() {
        try {
            this.props.translatorStore.translateTextToMorseCode();
        } catch(error) {
            console.log(error);
            this._handleError(error);
        }
    }

    _handleError(error) {

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
                <ButtonPanel
                    onClickTranslateButton={this._onClickTranslateButton}
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