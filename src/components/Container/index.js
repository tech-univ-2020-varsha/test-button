import React, { Component,useState,useEffect } from 'react';
import Button from '../Button';
import TextBox from '../TextBox';
import axios from 'axios';
import {EXTERNAL_API} from '../../constants'

const Container=({testId,testIdButton,testIdTextBox})=>{
   
const [text,setText]=useState("");
const onChange=(inputTextValue)=>{
   setText(inputTextValue);
}
    useEffect(()=>{
        const asyncFunc=async()=>{
            const data= await axios.get(EXTERNAL_API)
            setText(data.data.initialText);
        }
        asyncFunc();
       
    },[])
return  <div data-testid={testId}>
<TextBox onChange={onChange} testId={testIdTextBox} value={text}/>
<Button text={text} buttonType="round" testId={testIdButton}/>
</div>
}

export default Container
