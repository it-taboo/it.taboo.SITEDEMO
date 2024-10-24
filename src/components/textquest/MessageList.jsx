import React, { useRef, useEffect, useState } from 'react'
import Messages from './Messages'

const MessageList = (props) => {
    const scrollBar = useRef()

    useEffect(() => {
        scrollBar.current.scrollTop = scrollBar.current.scrollHeight
    }, [props])

    return (
        <div className = 'chars-chat' ref = {scrollBar}>
            {props.chat.map((el, index) => <Messages author = {props.authors[index]} text = {el}/>)}
        </div>
    )
}

export default MessageList