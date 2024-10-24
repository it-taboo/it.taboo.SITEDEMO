import React, { useState } from 'react'

const AnswerItem = (props) => {
    return (
        <div onClick = {props.change}>
            <p>{props.text}</p>
        </div>
    )
}

export default AnswerItem