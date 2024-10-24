import React, { useRef, useState, useEffect } from 'react'
import MyButton from '../../ui/MyButton'

const CharEditor = (props) => {
    const [chName, changeName] = useState('Name')
    const [chAge, changeAge] = useState(16)
    const [chProf, changeProf] = useState('Уборщица')
    const [chHP, changeHP] = useState(50)
    const [chBeauty, changeBeauty] = useState(10)
    const [chInt, changeInt] = useState(10)
    const [chPsyh, changePsyh] = useState(10)

    function change(eventType, type, typeF, min, age = false) {
        if(age === false) {
            if(eventType === '>') {
                if(props.pPoints > 0) {
                    typeF(type + 10)
                    props.changePPoints(props.pPoints - 1)
                }
            }
            if(eventType === '<') {
                if(type > min) {
                    typeF(type - 10)
                    props.changePPoints(props.pPoints + 1)
                }
            }
        } else {
            if(eventType === '>') {
                typeF(type + 1)
            }
            if(eventType === '<') {
                if(type > min) {
                    typeF(type - 1)
                }
            }
        }
    }

    return (
        <div>
            <p className = 'p-points'>{props.pPoints}</p>
            <div className = 'range'>
                <div>
                    <p>Здоровье: {chHP}</p>
                    <MyButton className = 'range-button decrease' onClick = {() => change('<', chHP, changeHP, '50')}>
                        <span>&#60;</span>
                    </MyButton>
                    <input value = {chHP} className='range-hp' type="range" min = "50" max = "500" step = '10'></input>
                    <MyButton className = 'range-button increase' onClick = {() => change('>', chHP, changeHP, '50')}>
                        <span>&#62;</span>
                    </MyButton>
                </div>
                <div>
                    <p>Красота: {chBeauty}</p>
                    <MyButton className = 'range-button decrease' onClick = {() => change('<', chBeauty, changeBeauty, '10')}>
                        <span>&#60;</span>
                    </MyButton>
                    <input value = {chBeauty} className='range-beauty' type="range" min = "10" max = "300" step = '10' onChange = {event => change(event.target.value, chBeauty, changeBeauty)}></input>
                    <MyButton className = 'range-button increase' onClick = {() => change('>', chBeauty, changeBeauty, '10')}>
                        <span>&#62;</span>
                    </MyButton>
                </div>
                <div>
                    <p>Интеллект: {chInt}</p>
                    <MyButton className = 'range-button decrease' onClick = {() => change('<', chInt, changeInt, '10')}>
                        <span>&#60;</span>
                    </MyButton>
                    <input value = {chInt} className='range-int' type="range" min = "10" max = "300" step = '10' onChange = {event => change(event.target.value, chInt, changeInt)}></input>
                    <MyButton className = 'range-button increase' onClick = {() => change('>', chInt, changeInt, '10')}>
                        <span>&#62;</span>
                    </MyButton>
                </div>
                <div>
                    <p>Возраст: {chAge}</p>
                    <MyButton className = 'range-button decrease' onClick = {() => change('<', chAge, changeAge, '16', true)}>
                        <span>&#60;</span>
                    </MyButton>
                    <input value = {chAge} className='range-age' type="range" min = "16" max = "21" step = '1' onChange = {event => changeAge(event.target.value)}></input>
                    <MyButton className = 'range-button increase' onClick = {() => change('>', chAge, changeAge, '16', true)}>
                        <span>&#62;</span>
                    </MyButton>
                </div>
            </div>

            <div className = 'char-submit' onClick = {() => {
                props.char([chName, chAge, chProf, chHP, chBeauty, chInt, chPsyh, props.pPoints, props.rep])
                props.state('dialogue')
                }}>
                <p>Подтвердить</p>
            </div>
        </div>
    )
}

export default CharEditor