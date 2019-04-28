import { observable, computed } from 'mobx';
import {textToMorseTranslator} from '../entities/TextToMorseTranslator';

class TranslatorStore {
    @observable
    normalText = '';

    @observable
    morseCode = '';

    /**
     * @throws {Error} CHAR_DOESNT_EXIST from translator
     * @return {MorseMessage} morseMessage as string
     */
    @computed
    get translatedToMorseCode() {
        return textToMorseTranslator.translateTextToMorseCode(this.normalText);
    }
}

const translatorStore = new TranslatorStore();

export default translatorStore;