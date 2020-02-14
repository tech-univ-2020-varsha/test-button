<<<<<<< HEAD
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
=======
import React, { useState } from 'react'
import * as styles from './index.css';

const Button = (props) => {

    const [count, setCount] = useState(0);

    const countHandler = () => {
        const {click}=props;
        click()
        setCount( count + 1);
    }
    const {text,buttonType,testId}=props;
    return (
      <button className={buttonType === 'rect' ? styles.rect : styles.round} data-testid={testId} onClick={() => countHandler()}>
        {text} clicked {count} times.
      </button> 
    )
}
>>>>>>> 82c0d778d2714625105f46f4856fe3fb36ddc787

}
export default Button;

