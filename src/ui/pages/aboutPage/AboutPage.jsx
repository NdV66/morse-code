import React from 'react';
import DescriptionPanel from '../../common/DescriptionPanel';
import { ELEMENTS_ID } from '../../../entities/consts/Paths';
import TEXTS from '../../../entities/consts/Texts.js';
import { MdLocalFlorist } from 'react-icons/md';
import styles from './AboutPage.module.scss';

const AboutPage = () => <DescriptionPanel
    id={ELEMENTS_ID.ABOUT}
    header={TEXTS.ABOUT_HEADER}
    texts={TEXTS.ABOUT_TEXT}
    className={styles.about_page}
    icon={MdLocalFlorist}
/>;

export default AboutPage;