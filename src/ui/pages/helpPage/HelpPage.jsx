import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {ELEMENTS_ID} from '../../../entities/consts/Paths';
import TEXTS from '../../../entities/consts/Texts.js';
import { MdHelp } from 'react-icons/md';
import styles from './HelpPage.module.scss';

class HelpPage extends React.Component {
    render() {
        const cssClassName = `${styles.help_page} base-top-bottom-padding`;
        const iconClassName = `${styles.help_icon} text-center`;

        return <Container fluid id={ELEMENTS_ID.HELP} className={cssClassName}>
            <h2 className='text-center mb-3'>
                {TEXTS.HELP_HEADER}
            </h2>
            <p className='text-justify'>
                {TEXTS.HELP_TEXT}
            </p>
           <div className={iconClassName}>
                <MdHelp />
           </div>
        </Container>;
    }
}

export default HelpPage;