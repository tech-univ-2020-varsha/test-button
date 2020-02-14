<<<<<<< HEAD
import React, { Component,useState,useEffect } from 'react';
import Button from '../Button';
import TextBox from '../TextBox';
import {useInput} from '../../hooks/useInput'
import {EXTERNAL_API} from '../../constants/index'
const Container=({testId,testIdButton,testIdTextBox})=>{
   
const [text,setText]=useInput(EXTERNAL_API,"");

   
    return  <div data-testid={testId}>
    <TextBox onChange={setText} testId={testIdTextBox} value={text}/>
    <Button text={text} buttonType="round" testId={testIdButton}/>
    </div>
=======
import React from 'react';
import Button from '../Button';
import TextBox from '../TextBox';
import useInput from '../../hooks/useInput'

const Container = (props) => {
    const [text, setText] = useInput('');

    const onChange=(inputTextValue)=>{
        setText(inputTextValue)
    }
    const {testId,testIdButton,testIdTextBox}=props;
    return (
        <div data-testid={testId}>
            <TextBox onChange={(onChange)} testId={testIdTextBox} value = {text}/>
            <Button text={text} buttonType="round" testId={testIdButton} click = {() => {}}/>
        </div>
    );
>>>>>>> 82c0d778d2714625105f46f4856fe3fb36ddc787
}

export default Container
