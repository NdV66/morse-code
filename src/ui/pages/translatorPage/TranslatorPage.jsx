import React from 'react';
import ReactDOM from 'react-dom';
import { action } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Container, Col } from 'reactstrap';
import TextArea from './components/textArea/TextArea';
import ErrorPopup from '../../common/ErrorPopup';
import ButtonPanel from './components/buttonPanel/ButtonPanel';
import { ELEMENTS_ID } from '../../../entities/consts/Paths';
import TEXTS from '../../../entities/consts/Texts';
import styles from './translatorPageStyle.module.scss';

@inject('translatorStore')
@observer
class TranslatorPage extends React.Component {
    @action.bound
    _handleNormalTextAreaChange(event) {
        this.props.translatorStore.setNormalTextFromEvent(event);
    }

    @action.bound
    _handleMorseCodeTextAreaChange(event) {
        this.props.translatorStore.setMorseCodeFromEvent(event);
    }

    @action.bound
    _onClickTranslateButton() {
        try {
           this.props.translatorStore.translate();
        } catch(error) {
            this._handleError(error);
        }
    }

    @action.bound
    _onClickSwapButton() {
       this.props.translatorStore.swapTextAreas();
    }

    _handleError(error) {
        console.log(error);
        this.props.translatorStore.setErrorCode(error.message);
    }

    _renderNormalTextArea(store) {
        const id = 'normalText';
        return <TextArea
            id={id}
            value={store.normalText}
            placeholder={TEXTS.TEXT_AREA_PLACEHOLDER}
            onChange={this._handleNormalTextAreaChange}
            title={TEXTS.TEXT_LABEL}
            key={id}
            readOnly={!store.isCommonTextAreaFirst}
        />;
    }

    _renderMorseTextArea(store) {
        const id = 'morseCodeText';
        return <TextArea
            id={id}
            value={store.morseCode}
            placeholder={TEXTS.MORSE_AREA_PLACEHOLDER}
            onChange={this._handleMorseCodeTextAreaChange}
            title={TEXTS.MORSE_LABEL}
            key='id'
            readOnly={store.isCommonTextAreaFirst}
        />;
    }

    _renderButtonPanel() {
        return <ButtonPanel
            key='buttonPanel'
            onClickTranslateButton={this._onClickTranslateButton}
            onClickSwapButton={this._onClickSwapButton}
        />;
    }

    _rendertTextAreaInOrder(store) {
        const normalTextArea = this._renderNormalTextArea(store);
        const morseCodeArea = this._renderMorseTextArea(store);
        const buttonPanel = this._renderButtonPanel(store);
        const {isCommonTextAreaFirst} = store;
        const elements = isCommonTextAreaFirst ? [normalTextArea, buttonPanel, morseCodeArea] : [morseCodeArea, buttonPanel, normalTextArea];
        return elements;
    }

    _renderErrorPortal() {
        const store = this.props.translatorStore;
        return <ErrorPopup
            isModal={store.isError}
            onCancel={store.eraseErrorCode}
            body={TEXTS.ERRORS_DESC[store.errorCode]}
            header={TEXTS.ERRORS_DESC.ERROR_HEADER}
        />;
    }

    render() {
        const lgCols = {size: 8, offset: 2};
        const mdCols = {size: 12};
        const store = this.props.translatorStore;
        const containerCssClass = `${styles.translator_container} pb-3`;
        const errorPortal = store.isError ? this._renderErrorPortal() : null;

        return <Container fluid className={containerCssClass} id={ELEMENTS_ID.TRANSLATOR}>
            {errorPortal}
            <Col lg={lgCols} md={mdCols}>
                {this._rendertTextAreaInOrder(store)}
            </Col>
        </Container>;
    }
}

export default TranslatorPage;