import { observable, computed, action } from 'mobx';
import {textToMorseTranslator} from '../entities/TextToMorseTranslator';
import TextMessage from '../entities/models/TextMessage';

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
        return textToMorseTranslator.translateTextToMorseCode(message);
    }

    @action.bound
    translateTextToMorseCode() {
        const message = this.translatedToMorseCode;
        this.morseCode = message.text;
    }
}

const translatorStore = new TranslatorStore();

export default translatorStore;