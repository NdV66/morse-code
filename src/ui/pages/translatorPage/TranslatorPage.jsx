import React from 'react';
import { action } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Container, Col } from 'reactstrap';
import { TextArea } from './TextArea';
import { ButtonPanel } from './ButtonPanel';
import { ELEMENTS_ID } from '../../../entities/consts/Paths';
import TEXTS from '../../../entities/consts/Texts';
import styles from './translatorPageStyle.module.scss';

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
            const store = this.props.translatorStore;
            store.isCommonTextAreaFirst ? store.translateToMorseCode() : store.translateToNormalText();
        } catch(error) {
            console.log(error);
            this._handleError(error);
        }
    }

    @action.bound
    _onClickSwapButton() {
        const {translatorStore} = this.props;
        translatorStore.isCommonTextAreaFirst = !translatorStore.isCommonTextAreaFirst;
    }

    _handleError(error) {

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

        return isCommonTextAreaFirst ? [normalTextArea, buttonPanel, morseCodeArea] : [morseCodeArea, buttonPanel, normalTextArea];
    }

    render() {
        const lgCols = {size: 8, offset: 2};
        const mdCols = {size: 12};
        const store = this.props.translatorStore;
        const containerCssClass = `${styles.translator_container} pb-3`;

        return <Container fluid className={containerCssClass} id={ELEMENTS_ID.TRANSLATOR}>
            <Col lg={lgCols} md={mdCols}>
                {this._rendertTextAreaInOrder(store)}
            </Col>
        </Container>;
    }
}

export default TranslatorPage;