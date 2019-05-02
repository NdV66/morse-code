import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {ELEMENTS_ID} from '../../../entities/consts/Paths';
import TEXTS from '../../../entities/consts/Texts.js';
import { MdLocalFlorist } from 'react-icons/md';
import styles from './AboutPage.module.scss';

class AboutPage extends React.Component {
    render() {
        const cssClassName = `${styles.about_page} base-top-bottom-padding`;

        return <Container fluid id={ELEMENTS_ID.ABOUT} className={cssClassName}>
            <h2 className='text-center mb-3'>
                {TEXTS.ABOUT_HEADER}
            </h2>
            <p className='text-justify'>
                {TEXTS.ABOUT_TEXT}
            </p>
            <div className='bigger-icon text-center'>
                <MdLocalFlorist />
            </div>
        </Container>;
    }
}

export default AboutPage;