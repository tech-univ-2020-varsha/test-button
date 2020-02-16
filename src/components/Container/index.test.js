import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import Container from '../Container';
import axios from 'axios';
import url from '../../constants'

describe('The container component',()=>{
    it('should check if the button component works',()=>{
        const mockAxiosResponse={data:{initialText:"unicorn"}}
        const mockAxios=jest.spyOn(axios,'get');
        mockAxios.mockResolvedValue(mockAxiosResponse);
        
        const {asFragment}=render(<Container testId='test-cntner'/>)
        expect(asFragment()).toMatchSnapshot();
    });

    it('should check if the ',()=>{
        const mockAxiosResponse={data:{initialText:"unicorn"}}
        const mockAxios=jest.spyOn(axios,'get');
        mockAxios.mockResolvedValue(mockAxiosResponse);
        
        const {getByTestId}=render(<Container testId='test-cntner' testIdButton='test-btn' testIdTextBox='123'/>)

        fireEvent.change(getByTestId('123'),{target:{value:'Bhumika'}});
        //fireEvent.click(getByTestId('test-btn'));

       expect(getByTestId('test-btn')).toHaveTextContent('Bhumika clicked 0 times.');
    });

  
    it('should called axios get method to get value for input box',async()=>{
        const mockAxiosResponse={data:{initialText:"unicorn"}}
        const mockAxios=jest.spyOn(axios,'get');
        mockAxios.mockResolvedValue(mockAxiosResponse);
        
        const {getByTestId}=render(<Container testId='test-cntner' testIdButton='test-btn' testIdTextBox='123'/>)
        
       await wait(()=>{
        expect(mockAxios).toHaveBeenCalled();
        expect(getByTestId('123').value).toBe(mockAxiosResponse.data.initialText)
        expect(getByTestId('test-btn')).toHaveTextContent(`${mockAxiosResponse.data.initialText} clicked 0 times.`);
       })
    })
    it('Should display the content from the api', async() => {
        const mockAxios = jest.spyOn(axios, 'get');
        mockAxios.mockResolvedValue({data:{initialText:'unicorn'}});

        const {getByTestId}=render(<Container testId='test-cntner' testIdButton='test-btn' testIdTextBox='123'/>)
        expect(mockAxios).toHaveBeenCalledWith(url)
        await wait(() => expect(getByTestId('123').value).toBe('unicorn'));
        await wait(() => expect(getByTestId('test-btn')).toHaveTextContent('unicorn'));
    })
    it('should make the textbox disabled when the disabled prop is true',()=>{
        const changeHandler=jest.fn();
        const { getByTestId } = render(<Container testId='test-cntner' testIdButton='test-btn' testIdTextBox='123'/>);
        fireEvent.change(getByTestId("123"),{target:{value:"Bhumika"}});
        expect(changeHandler).not.toHaveBeenCalled();
    });
})