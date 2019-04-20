import { observable, computed } from 'mobx';

class TranslatorStore {
    @observable normalText = '';

    @observable morseCode = '';

    @computed get translatedToMorse() {
        return 'Hehehe morsik xD';
    }

    @computed get translatedToNormalText() {
        return '--> normalny nudny text';
    }
}

const translatorStore = new TranslatorStore();

export default translatorStore;