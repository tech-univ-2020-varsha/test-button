import React from 'react';

export const Button = ({children, testID, onClick}) => (
    <button data-testid={testID} onClick={() => onClick()}>
        {children}
    </button>
);
