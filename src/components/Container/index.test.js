import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Container from '../Container';

describe('The container component',()=>{
    it('should check if the button component works',()=>{
        const {asFragment}=render(<Container testId='test-cntner'/>)
        expect(asFragment()).toMatchSnapshot();
    });

    it('should check if the ',()=>{
        const {getByTestId}=render(<Container testId='test-cntner' testIdButton='test-btn' testIdTextBox='123'/>)

        fireEvent.change(getByTestId('123'),{target:{value:'Bhumika'}});
        //fireEvent.click(getByTestId('test-btn'));

       expect(getByTestId('test-btn')).toHaveTextContent('Bhumika clicked 0 times.');

    })
})