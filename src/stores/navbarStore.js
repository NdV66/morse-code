import { observable } from 'mobx';

class NavbarStore {
    @observable
    isOpen = false;

    toggle = () => this.isOpen = !this.isOpen;
}

const navbarStore = new NavbarStore();

export default navbarStore;