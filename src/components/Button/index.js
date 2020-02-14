import React, { Component,useState } from 'react'
import * as styles from './index.css';


const Button=({text,buttonType,testId,click})=>{
   
    const [count,setCount]=useState(0);
    const countHandler=()=>{
        setCount(count+1);
        click();
    }
    return (
        <button className={buttonType === 'rect' ? styles.rect : styles.round} data-testid={testId} onClick={countHandler}>
          {text} clicked {count} times.
        </button> 
      )

}
export default Button;

