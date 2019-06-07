import React from 'react';
import DescriptionPanel from '../../common/DescriptionPanel';
import { ELEMENTS_ID } from '../../../entities/consts/Paths';
import TEXTS from '../../../entities/consts/Texts.js';
import { MdHelp } from 'react-icons/md';
import styles from './HelpPage.module.scss';

const HelpPage = () => <DescriptionPanel
    id={ELEMENTS_ID.HELP}
    header={TEXTS.HELP_HEADER}
    texts={TEXTS.HELP_TEXT}
    className={styles.help_page}
    icon={MdHelp}
    iconClassName={styles.help_icon}
/>;

export default HelpPage;