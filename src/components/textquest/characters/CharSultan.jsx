import React, { useState, useRef, useEffect } from 'react'

import SultanBodyHomeNormal from './../gameDialogues/img/normal_sultan_home_body.png'
import SultanMouthClosedNormal from './../gameDialogues/img/normal_sultan_mouth_closed.png'
import SultanMouthOpenNormal from './../gameDialogues/img/normal_sultan_mouth_open.gif'
import SultanEyesNormal from './../gameDialogues/img/normal_sultan_eyes.gif'

import SultanBodyHomeNormalCape from './../gameDialogues/img/normal_sultan_home_cape_body.png'

const CharSultan = (props) => {
    const [curBody, setBody] = useState(SultanBodyHomeNormal)
    const [curMouth, setMouth] = useState(SultanMouthClosedNormal)
    const [curEyes, setEyes] = useState(SultanEyesNormal)

    const char1 = useRef()

    function say() {
        const length = props.text.q.length

        if(props.text.active.includes('Sultan')) {
            char1.current.classList.add('main-char')
        } else {
            char1.current.classList.remove('main-char')
        }

        if(props.text.char.includes('Sultan_home')) {
            setBody(SultanBodyHomeNormal)
            setEyes(SultanEyesNormal)

            setMouth(SultanMouthOpenNormal)
            setTimeout(() => {
                setMouth(SultanMouthClosedNormal)
            }, length * 90)
        }

        if(props.text.char.includes('Sultan_home_cape')) {
            setBody(SultanBodyHomeNormalCape)
            setEyes(SultanEyesNormal)

            setMouth(SultanMouthOpenNormal)
            setTimeout(() => {
                setMouth(SultanMouthClosedNormal)
            }, length * 90)
        }
    }

    useEffect(() => {
        say()
    }, [props.text])

    return (
        <div>
            <div className = 'character' ref = {char1}>
                <img className = 'char-body char-1' src = {curBody}></img>
                <img className = 'char-body char-1' src = {curEyes}></img>
                <img className = 'char-body char-1' src = {curMouth}></img>
            </div>
        </div>
    )
}

export default CharSultan