import React from 'react'

function ButtonDark(prop) {
    return <button className="dark-button" type={`${prop?.type ? prop?.type : 'button' }`}>{prop.text}</button>
}

export default ButtonDark
