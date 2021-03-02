import React from 'react'

function Button({ text ,width, color }) {
    return (
        <button style={{ width:width, backgroundColor:color }}>{ text }</button>
    )
}

export default Button
