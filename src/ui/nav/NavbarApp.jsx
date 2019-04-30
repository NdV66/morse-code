import React from 'react';
import { inject, observer } from 'mobx-react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';
import TEXTS from '../../entities/consts/Texts';
import PATHS from '../../entities/consts/Paths';
import './NavbarApp.scss';
import styles from './NavbarApp.module.scss';

const NavbarItem = (props)=> <NavItem  className='mr-3'>
    <Link smooth to={PATHS[props.name]}>{TEXTS[props.name]}</Link>
</NavItem>;

@inject('navbarStore')
@observer
class NavbarApp extends React.Component {
    render() {
        const {navbarStore} = this.props;
        const navbarCssClass = `${styles.custom_toggler} pt-1 pb-1`;

        return <div>
            <Navbar
            color='faded'
            expand='md'
            fixed='top'
            className={navbarCssClass}>
                <NavbarBrand href='/'>{TEXTS.NAME}</NavbarBrand>
                <NavbarToggler onClick={navbarStore.toggle} />
                <Collapse isOpen={navbarStore.isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavbarItem name={'TRANSLATOR'} />
                        <NavbarItem name={'ABOUT'} />
                        <NavbarItem name={'HELP'} />
                    </Nav>
                </Collapse>
            </Navbar>
        </div>;
    }
}

export default NavbarApp;
