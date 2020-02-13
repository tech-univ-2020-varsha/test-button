import React from 'react'

function TextBox({testId, onChange}) {
    return (
        <div>
            <input type="text" data-testid={testId} onChange={(e)=>onChange(e.target.value)}></input>
        </div>
    )
}

export default TextBox
