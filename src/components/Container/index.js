import React, { Component,useState,useEffect } from 'react';
import Button from '../Button';
import TextBox from '../TextBox';
import {useInput} from '../../hooks/useInput'
import {EXTERNAL_API} from '../../constants/index'
const Container=({testId,testIdButton,testIdTextBox})=>{
   
const [text,setText]=useInput(EXTERNAL_API,"");
const onChange=(inputTextValue)=>{
   setText(inputTextValue);
   
}
   
    return  <div data-testid={testId}>
    <TextBox onChange={onChange} testId={testIdTextBox} value={text}/>
    <Button text={text} buttonType="round" testId={testIdButton}/>
    </div>
}

export default Container
