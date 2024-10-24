import React, { useState, useEffect } from 'react'
import CharEditor from '../components/textquest/CharEditor'
import Dialogue from '../components/textquest/Dialogue'
import Cleaning from '../components/textquest/job/Cleaning'

import '../styles/TextQuest.css'

const TextQuest = () => {
    const [pPoints, changePPoints] = useState(6)
    
    const [character, changeChar] = useState([1, 1, 1, 1, 1, 1, 1, pPoints])
    const [rep, changeRep] = useState(50)
    const [multiplier, setMulti] = useState(1)

    const [state, setState] = useState('charedit')
    const [addState, setState2] = useState(false)

	const [display, setDisplay] = useState('block')

    function stateChange(state) {
        setState(state)
    }

    console.log('char', character)
    if(state === 'charedit') {
        return (
            <div>
                <CharEditor char = {changeChar} state = {stateChange} character = {character} rep = {rep} multi = {multiplier} pPoints = {pPoints} changePPoints = {changePPoints}/>
            </div>
        )
    }
    if(state === 'dialogue') {
        return (
            <div>
                <Dialogue part = 'welcome' state = {stateChange} rep = {rep} changeRep = {changeRep} multi = {multiplier} setMulti = {setMulti} pPoints = {pPoints} changePPoints = {changePPoints} addState = {setState2} display = {setDisplay} add = {addState}/>
            </div>
        )
    }
    if(state === 'cleaning') {
        return (
            <div>
                {addState ? <Dialogue part = 'clean' state = {stateChange} rep = {rep} changeRep = {changeRep} multi = {multiplier} setMulti = {setMulti} pPoints = {pPoints} changePPoints = {changePPoints} addState = {setState2} display = {setDisplay} add = {addState}/> : null}
                <Cleaning add = {addState} state = {stateChange} addState = {setState2} display = {display}/>
            </div>
        )
    }
}

export default TextQuest