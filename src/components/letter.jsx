import { useRef, useState, useEffect } from "react/cjs/react.development"
import '../../src/styles/hangman.css'

const Letter = (props) => {
    const ref = useRef()
    let examine = props.ex

    useEffect(() => {
        if(props.val === props.text) {
            ref.current.classList.remove('hidden')
            ref.current.classList.add('open')
            console.log(props.hints)
        }
    }, [examine === true])

    if(props.hints === props.text) {
        ref.current.classList.add('hinted')
    }

    return (
        <div>
            <p className = 'letter hidden' ref = {ref}>{props.text}</p>
            <div className = 'before'></div>
        </div>
    )
}

export default Letter