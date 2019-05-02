import { observable, computed, action } from 'mobx';
import { textToMorseTranslator } from '../entities/domain/TextToMorseTranslator';
import { morseToTextTranslator } from '../entities/domain/MorseToTextTranslator';
import TextMessage from '../entities/models/TextMessage';
import MorseMessage from '../entities/models/MorseMessage';

class TranslatorStore {
    @observable
    normalText = '';

    @observable
    morseCode = '';

    @observable
    isErrorPopupShowed = false;

    @observable
    isCommonTextAreaFirst = true;

    /**
     * @throws {Error} CHAR_DOESNT_EXIST from translator
     * @return {MorseMessage} morseMessage as string
     */
    @computed
    get translatedToMorseCode() {
        const message = new TextMessage(this.normalText);
        return textToMorseTranslator.translate(message);
    }

    @computed
    get translatedToNormalText() {
        const message = new MorseMessage(this.morseCode);
        return morseToTextTranslator.translate(message);
    }

    @action.bound
    translateToMorseCode() {
        const message = this.translatedToMorseCode;
        this.morseCode = message.text;
    }

    @action.bound
    translateToNormalText() {
        const message = this.translatedToNormalText;
        this.normalText = message.text;
    }

    swapTextAreas() {
        this.isCommonTextAreaFirst = !this.isCommonTextAreaFirst;
    }

    translate()  {
        this.isCommonTextAreaFirst ? this.translateToMorseCode() : this.translateToNormalText();
    }

    @action
    setNormalTextFromEvent(event) {
        this.normalText = event.target.value;;
    }

    @action
    setMorseCodeFromEvent(event) {
        this.morseCode = event.target.value;
    }
}

const translatorStore = new TranslatorStore();

export default translatorStore;