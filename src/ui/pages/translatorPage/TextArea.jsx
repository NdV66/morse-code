import React from 'react';
import styles from './translatorPageStyle.module.scss';

export const TextArea = (props) => <div>
    <h3 className='h3-light'>{props.title}</h3>
    <textarea
        className={styles.text_area}
        id={props.id}
        name={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
    />
    </div>;
