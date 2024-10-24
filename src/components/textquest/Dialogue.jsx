import React, { useState, useEffect, useRef } from 'react'
import DialogueWe from './gameDialogues/Chapter1/Welcome.js'
import DialogueClean from './gameDialogues/Chapter1/Cleaning.js'

import DThought from './DThought.jsx'
import EndGame from './EndGame.jsx'

import AnswerItem from './AnswerItem'

import Messages from './Messages'

import CharMc from './characters/CharMc.jsx'
import CharSultan from './characters/CharSultan.jsx'
import None from './characters/CharSultan.jsx'

import './../../styles/TextQuest.css'
import MessageList from './MessageList.jsx'

const Dialogue = (props) => {
    const [Dialogues, setDia] = useState(DialogueWe)

    useEffect(() => {
        props.display('none')
        if(props.part === 'clean') {
            setDia(DialogueClean)
        }
    }, [props])

    const [id, setID] = useState(0)
    const [question, setQ] = useState('Новый диалог!')
    const [thought, setT] = useState('(...)')
    const [answer, setA] = useState(['Начать диалог'])
    const [reason, setReason] = useState('Потому что да')
    const [rightAnswer, setRAnswer] = useState(['Начать диалог'])

    const [color, setColor] = useState('rgb(69, 156, 255)')

    const [added, setAdded] = useState(`+10 реп.`)
    const [added2, setAdded2] = useState(`+0 оч. силы`)

    const [alive, setAlive] = useState(true)

    const rep = useRef()
    const points = useRef()
    
    const [char1, setChar1] = useState('CharMc')    
    const [char2, setChar2] = useState('None')

    const [chat, setChat] = useState(['Hello, world!'])
    const [authors, setAuthors] = useState(['System'])

    const [prof, setProf] = useState('cleaning')

    const Char1 = () => {
        if(char1 === 'CharMc') {
            return (
                <CharMc text = {Dialogues[id]}/>
            )
        }
        if(char1 === 'CharSultan') {
            return (
                <CharSultan text = {Dialogues[id]}/>
            )
        }
        if(char1 === 'None') {
            return (
                <None text = {Dialogues[id]}/>
            )
        }
    }

    const Char2 = () => {
        if(char2 === 'CharMc') {
            return (
                <CharMc text = {Dialogues[id]}/>
            )
        }
        if(char2 === 'CharSultan') {
            return (
                <CharSultan text = {Dialogues[id]}/>
            )
        }
        if(char2 === 'None') {
            return (
                <None text = {Dialogues[id]}/>
            )
        }
    }

    function change(a) {
        if(props.add === true) {
            let chat2 = chat
            let authors2 = authors

            chat2.push('*Стук* Извините, можно убраться?')
            authors2.push('MC')
            chat2.push('Да, сейчас')
            authors2.push('Sultan')

            setChat(chat2)
            setAuthors(authors2)

            console.log('180137-091741020')
        }
        if(id > 1 && Dialogues[id].end === true) {
            if(Dialogues[id].next.includes('Cleaning')) {
                props.state('cleaning')
                setProf('cleaning')
                props.display('block')
            }
        } else {
            let chat2 = chat
            let authors2 = authors

            chat2.push(a)
            authors2.push('MC')
            chat2.push(Dialogues[id].q)
            authors2.push(Dialogues[id].active[0])

            setChat(chat2)
            setAuthors(authors2)
            console.log(chat)

            setQ(Dialogues[id].q)
            setT(Dialogues[id].t)
            setA(Dialogues[id].a)
            setRAnswer(Dialogues[Dialogues.length - 1])
            setAlive(true)

            setID(Dialogues[id].next[Math.floor(Math.random() * Dialogues[id].next.length)])
            rep.current.style.opacity = '1'
            rep.current.classList.add('rep-anim')

            points.current.style.opacity = '1'
            points.current.classList.add('rep-anim')

            if(id > 2 && Dialogues[id].end === true) {
                setTimeout(() => {
                    rep.current.style.opacity = '0'
                    rep.current.classList.remove('rep-anim')

                    points.current.style.opacity = '0'
                    points.current.classList.remove('rep-anim')
                }, 1)
            } else {
                setTimeout(() => {
                    rep.current.style.opacity = '0'
                    rep.current.classList.remove('rep-anim')

                    points.current.style.opacity = '0'
                    points.current.classList.remove('rep-anim')
                }, 900)
            }

            setAdded(`+${(Math.round((props.rep + (10 * props.multi) + Number.EPSILON) * 100) / 100) - props.rep} реп.`)

            if(rightAnswer.includes(a)) {
                setAdded(`+${(Math.round((props.rep + (10 * props.multi) + Number.EPSILON) * 100) / 100) - props.rep} реп.`)

                props.changeRep(Math.round((props.rep + (10 * props.multi) + Number.EPSILON) * 100) / 100) //Math.round((props.rep + (10 * props.multi) + Number.EPSILON) * 100) / 100;
                props.setMulti(Math.round(((props.multi + 0.5) + Number.EPSILON) * 100) / 100)
                props.changePPoints(props.pPoints + Dialogues[id].pp_give)
                setColor('rgb(69, 156, 255)')

                if(Dialogues[id].pp_give > 0) {
                    setAdded2(`+${Dialogues[id].pp_give} оч. силы`)
                } else {
                    setAdded2(``)
                }
            } else {
                if(props.rep > 10) {
                    props.changeRep(Math.round((props.rep - (10 * props.multi) + Number.EPSILON) * 100) / 100)
                    props.setMulti(1)
                    setAdded(`${props.rep - (Math.round((props.rep + (10 * props.multi) + Number.EPSILON) * 100) / 100)} реп.`)
                    setColor('rgb(255, 69, 69)')
                } else {
                    setAlive(false)
                    props.changeRep(0)
                }
            }
            
            switch (Dialogues[id].char[0]) {
                case 'MC_poor':
                case 'MC_poor_sad':
                case 'MC_poor_scared':
                    setChar1('CharMc')
                    break;
                case 'Sultan_home':
                case 'Sultan_home_cape':
                    setChar1('CharSultan')
                    break;
                case 'none':
                    setChar1('None')
                default:
                    break;
            }
            
            switch (Dialogues[id].char[1]) {
                case 'MC_poor':
                case 'MC_poor_sad':
                case 'MC_poor_scared':
                    setChar2('CharMc')
                    break;
                case 'Sultan_home':
                case 'Sultan_home_cape':
                    setChar2('CharSultan')
                    break;
                case 'none':
                    setChar2('None')
                default:
                    break;
            }
        }
    }

    //marquee

    return (
        <div>
            <div className = 'rep'>
                <p className = 'rep-main'>Репутация: {props.rep} * {props.multi}x</p>
                <p ref = {rep} className = 'added-rep' style = {{color: color}}>{added}</p>
                <p ref = {points} className = 'added-rep' style = {{color: 'rgb(69, 156, 255)'}}>{added2}</p>
            </div>
            <div className = 'dia-window'>
                <div className = 'chars-left'>
                    <Char1 char = {char1}/>
                </div>
                <MessageList authors = {authors} chat = {chat}/>
                <div className = 'chars-right'>
                    <Char2 char = {char2}/>
                </div>
            </div>
            {
                alive
                ? 
                <div className = 'dia-area'>
                    <div className = 'dia-choose'>
                        <DThought thought = {thought}/>
                        {Dialogues[id].a.includes('Продолжить') ?
                            <div className = 'dia-skip' onClick = {() => {props.state(prof); props.addState(false); props.display('block')}}>
                                <p>Продолжить</p>
                            </div> 
                            :
                            <div className = 'd-answer'>
                                {answer.map((a, index) => <AnswerItem text = {a} key = {index} change = {() => {change(a)}}/>)}
                            </div>}
                    </div>
                    <div className = 'dia-skip' onClick = {() => {props.state(prof); props.addState(false); props.display('block')}}>
                        <p>Пропустить</p>
                    </div>
                </div>
                :
                <EndGame reason = {reason}/>
            }
        </div>
    )
}

export default Dialogue