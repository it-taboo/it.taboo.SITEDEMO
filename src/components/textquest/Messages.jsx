import React, { useState, useEffect } from 'react'

const Messages = (props) => {
    const [classname, changeClass] = useState('char-left-message')

    useEffect(() => {
        if(props.author !== 'MC') {
            changeClass('char-right-message')
        }
    }, [props])
    return (
        <div className = {classname}>
            <h3>{props.author}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Messages