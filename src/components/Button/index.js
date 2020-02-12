import React from 'react';

export const Button = ({children, testID}) => (
    <button data-testid={testID}>
        {children}
    </button>
);
