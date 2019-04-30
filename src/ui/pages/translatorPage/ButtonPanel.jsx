import React from 'react';
import { MdAutorenew, MdFavoriteBorder } from 'react-icons/md';
import { Button } from 'reactstrap';
import TEXTS from '../../../entities/consts/Texts';

export const ButtonPanel = (props) => <div className='mt-3 mb-1 text-right'>
    <Button onClick={props.onClickTranslateButton} color='primary'>
        <MdFavoriteBorder />
        {TEXTS.TRANSLATE}
    </Button>
    <Button onClick={props.onClickSwapButton} color='primary'>
        <MdAutorenew />
        {TEXTS.SWAP}
    </Button>
</div>;