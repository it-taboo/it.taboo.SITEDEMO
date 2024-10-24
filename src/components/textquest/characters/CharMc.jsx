import React, { useState, useRef, useEffect } from 'react'

import MCBodyPoorNormal from './../gameDialogues/img/normal_mc_poor_body.png'
import MCMouthClosedNormal from './../gameDialogues/img/normal_mc_mouth_closed.png'
import MCMouthOpenNormal from './../gameDialogues/img/normal_mc_mouth_open.gif'
import MCEyesNormal from './../gameDialogues/img/normal_mc_eyes.gif'

import MCBodyPoorSad from './../gameDialogues/img/sad_mc_poor_body.png'
import MCMouthClosedSad from './../gameDialogues/img/sad_mc_mouth_closed.png'
import MCMouthOpenSad from './../gameDialogues/img/sad_mc_mouth_open.gif'
import MCEyesSad from './../gameDialogues/img/sad_mc_eyes.gif'

import MCBodyPoorScared from './../gameDialogues/img/scared_mc_poor_body.png'
import MCMouthClosedScared from './../gameDialogues/img/scared_mc_mouth_closed.png'
import MCMouthOpenScared from './../gameDialogues/img/scared_mc_mouth_open.gif'
import MCEyesScared from './../gameDialogues/img/scared_mc_eyes.gif'

const CharMc = (props) => {
    const [curBody, setBody] = useState(MCBodyPoorSad)
    const [curMouth, setMouth] = useState(MCMouthClosedSad)
    const [curEyes, setEyes] = useState(MCEyesSad)

    const char1 = useRef()

    function say() {
        const length = props.text.q.length

        if(props.text.active.includes('MC')) {
            char1.current.classList.add('main-char')
        } else {
            char1.current.classList.remove('main-char')
        }

        if(props.text.char.includes('MC_poor')) {
            setBody(MCBodyPoorNormal)
            setEyes(MCEyesNormal)

            setMouth(MCMouthOpenNormal)
            setTimeout(() => {
                setMouth(MCMouthClosedNormal)
            }, length * 90)
        }

        if(props.text.char.includes('MC_poor_sad')) {
            setBody(MCBodyPoorSad)
            setEyes(MCEyesSad)
            
            setMouth(MCMouthOpenSad)
            setTimeout(() => {
                setMouth(MCMouthClosedSad)
            }, length * 90)
        }

        if(props.text.char.includes('MC_poor_scared')) {
            setBody(MCBodyPoorScared)
            setEyes(MCEyesScared)
            
            setMouth(MCMouthOpenScared)
            setTimeout(() => {
                setMouth(MCMouthClosedScared)
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

export default CharMc