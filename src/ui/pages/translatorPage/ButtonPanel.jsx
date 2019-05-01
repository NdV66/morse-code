import React from 'react';
import { MdAutorenew, MdFavoriteBorder } from 'react-icons/md';
import { Button } from 'reactstrap';
import TEXTS from '../../../entities/consts/Texts';
import styles from './ButtonPanel.module.scss';

export const ButtonPanel = (props) => <div className='mt-3 mb-3 text-right'>
    <Button onClick={props.onClickTranslateButton} color='primary' className={styles.button_in_panel}>
        <MdFavoriteBorder />
        {TEXTS.TRANSLATE}
    </Button>
    <Button onClick={props.onClickSwapButton} color='primary' className={styles.button_in_panel}>
        <MdAutorenew />
        {TEXTS.SWAP}
    </Button>
</div>;