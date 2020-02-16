import React from 'react'

function TextBox({testId, onChange, value,disabled}) {
    console.log(value)
    return (
        <div>
            <input type="text" 
            disabled={disabled} 
            data-testid={testId} 
            value = {value} 
            onChange={disabled?()=>{}:(e)=>onChange(e.target.value)}></input>
        </div>
    )
}

export default TextBox
