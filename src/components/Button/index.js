import React from 'react';
import * as styles from './index.module.css'

export const Button = ({children, testID, onClick, type}) => (
    <button className ={type === 'rect'? styles.rect : styles.round} data-testid={testID} onClick={() => onClick()}>
        {children}
    </button> 
);
