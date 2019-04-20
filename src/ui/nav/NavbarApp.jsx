import React from 'react';
import { inject, observer } from 'mobx-react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,  NavLink } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';
import TEXTS from '../../models/Texts';
import PATHS from '../../models/Paths';

@inject('navbarStore')
@observer
class NavbarApp extends React.Component {
  render() {
      const {navbarStore} = this.props;

        return <div>
            <Navbar color='light' light expand='md'>
                <NavbarBrand href='/'>{TEXTS.NAME}</NavbarBrand>
                <NavbarToggler onClick={navbarStore.toggle} />
                <Collapse isOpen={navbarStore.isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <Link smooth to={PATHS.ABOUT}>{TEXTS.ABOUT}</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>;
  }
}

export default NavbarApp;
