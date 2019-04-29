import React from 'react';
import { action } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Container, Row, Col, Button } from 'reactstrap';
import { MdAutorenew, MdFavoriteBorder } from 'react-icons/md';
import TEXTS from '../../../entities/consts/Texts';
import styles from './translatorPageStyle.module.scss';

const TextArea = (props) => <div>
    <h3 className='h3-light'>{props.title}</h3>
    <textarea
        className={styles.text_area}
        id={props.id}
        name={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
    />
</div>;

const ButtonPanel = (props) => <div className='mt-3 mb-1 text-right'>
    <Button onClick={props.onClickTranslateButton} color='primary'>
        <MdFavoriteBorder />
        {TEXTS.TRANSLATE}
    </Button>
    <Button onClick={props.onClickSwapButton} color='primary'>
        <MdAutorenew />
        {TEXTS.SWAP}
    </Button>
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

    @action.bound
    _onClickSwapButton() {
        const {translatorStore} = this.props;
        translatorStore.isCommonTextAreaFirst = !translatorStore.isCommonTextAreaFirst;
    }

    _handleError(error) {

    }

    _renderNormalTextArea(store) {
        return <TextArea
            id={'normalText'}
            value={store.normalText}
            placeholder={TEXTS.TEXT_AREA_PLACEHOLDER}
            onChange={this._handleNormalTextAreaChange}
            title={TEXTS.TEXT_LABEL}
        />;
    }

    _renderMorseTextArea(store) {
        return <TextArea
            id={'morseCodeText'}
            value={store.morseCode}
            placeholder={TEXTS.MORSE_AREA_PLACEHOLDER}
            onChange={this._handleMorseCodeTextAreaChange}
            title={TEXTS.MORSE_LABEL}
        />;
    }

    _renderButtonPanel() {
        return <ButtonPanel
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
        const mdCols = {size: 8, offset: 2};
        const smCols = {size: 12};
        const store = this.props.translatorStore;
        const containerCssClass = `${styles.translator_container} pb-3`;

        return <Container fluid className={containerCssClass}>
            <Col sm={smCols} md={mdCols}>
                {this._rendertTextAreaInOrder(store)}
            </Col>
        </Container>;
    }
}

export default TranslatorPage;