import { observable, action } from 'mobx';

class NavbarStore {
    @observable
    isOpen = false;

    @action.bound
    toggle() {
        this.isOpen = !this.isOpen;
    }
}

const navbarStore = new NavbarStore();

export default navbarStore;