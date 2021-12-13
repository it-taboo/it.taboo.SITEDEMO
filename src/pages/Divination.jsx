import { useState } from 'react';
import './../styles/divination.css'

import Tilt from 'react-vanilla-tilt'

const Divination = (props) => {
    const [lifeCol, changeLifeCol] = useState(props.dc[0])
    const [loveCol, changeLoveCol] = useState(props.dc[1])
    const [otherCol, changeOtherCol] = useState(props.dc[2])
 
    const [buttonCol, changeButtonCol] = useState(props.dc[3])

    const [divCur, changeCur] = useState('none')
    const [placeholder, changePh] = useState('')

    function changeCol(type) {
        changeLifeCol(props.dc[0])
        changeLoveCol(props.dc[1])
        changeOtherCol(props.dc[2])

        if(type === 'life') {
            changeLifeCol(props.lc[0])
            changeButtonCol(props.lc[0])
            changeCur('life')
            changePh('')
        }
        if(type === 'love') {
            changeLoveCol(props.lc[1])
            changeButtonCol(props.lc[1])
            changeCur('love')
            changePh('')
        }
        if(type === 'other') {
            changeOtherCol(props.lc[2])
            changeButtonCol(props.lc[2])
            changeCur('other')
            changePh('Имя человека')
        }
    }

    function divinate() {
        if(divCur === 'life') {
            lifeText()
        }
        if(divCur === 'love') {
            loveText()
        }
        if(divCur === 'other') {
            otherText()
        }
    }

    const [firstPart, changeFirstPart] = useState([])
    const [secondPart, changeSecondPart] = useState([])
    const [thirdPart, changeThirdPart] = useState([])

    const nums = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    function lifeText() {
        changeFirstPart(['В этот момент жизни', 'В этот период жизни', 'Скоро', 'В ближайшее время'])
        changeSecondPart(['у Вас произойдет грандиозное событие, благодаря', 'у Вас будет траур, благодаря', 'у Вас будет славное время, вопреки', 'у Вас будет тяжкий период жизни,'])
        changeThirdPart(['разногласия с ближним.', 'смерти родственника или друга.', 'рождению ребенка.', 'появлению нового, злейшего врага.', 'маленькой трудности.', 'большой трудности.', 'большой удаче.', 'потому что вы выйграли в лотырее.', 'у вас украли телефон.', 'дня рождения друга.', 'природного бедствия.', 'визит родственников.', 'переезда.'])
    }

    function loveText() {
        changeFirstPart(['В этот момент жизни', 'В этот период жизни', 'Скоро', 'В ближайшее время'])
        changeSecondPart(['у Вас произойдет', 'у Вас будет траур, потому что будет', 'у Вас будет славное время и', 'у Вас будет тяжкий период в отношениях, а также'])
        changeThirdPart(['разногласия с ближним.', 'смерть родственника или друга ближнего.', 'рождение ребенка.', 'подозрение в измене.', 'маленькие разногласия.', 'большие трудности.', 'большая удача.', 'расставание.', 'открытая измена.', 'день рождения ближнего.', 'катастрофа.', 'визит родственников.', 'переезд.'])
    }

    function otherText() {
        changeFirstPart(['В этот момент жизни', 'В этот период жизни', 'Скоро', 'В ближайшее время'])
        changeSecondPart(['у него произойдет', 'у него будет траур, потому что будет', 'у него будет славное время и', 'у него будет тяжкий период в отношениях, а также'])
        changeThirdPart(['разногласия с ближним.', 'смерть родственника или друга.', 'рождение ребенка.', 'появление нового, злейшего врага.', 'маленькая трудности.', 'большая трудности.', 'большая удача.', 'потому что он выйграл в лотырее.', 'у него украли телефон.', 'дня рождения друга.', 'природного бедствия.', 'визита родственников.', 'переезда.'])
    }

    const Card = (props) => {
        const fSuit = Math.floor(Math.random() * 3)
        const fNum = Math.floor(Math.random() * 12)
        const sSuit = Math.floor(Math.random() * 3)
        const sNum = Math.floor(Math.random() * 12)
        const tSuit = Math.floor(Math.random() * 3)
        const tNum = Math.floor(Math.random() * 12)

        const curSuit = [fSuit, sSuit, tSuit, fSuit, sSuit, tSuit, fSuit, sSuit, tSuit, ][Math.floor(Math.random() * 2)]
        const curNum = [fNum, sNum, tNum, fNum, sNum, tNum, fNum, sNum, tNum][Math.floor(Math.random() * 2)]
        return (
            <Tilt className = 'tilt' style = {{background: 'rgba(255, 255, 255, 0.178)'}} options = {{speed: 500, max: 360}}>
                <div className = 'part-card'>
                    <div className = 'cards'>
                        <div className="card b1">
                            <p>{nums[fNum]}</p>
                        </div>
                        <div className="card b2">
                            <p>{nums[sNum]}</p>
                        </div>
                        <div className="card b3">
                            <p>{nums[tNum]}</p>
                        </div>
                    </div>
                    <h2 style = {{color: props.textcol}}>Этап {props.num}</h2>
                    <p style = {{color: props.textcol}}>{firstPart[curSuit]} {secondPart[curSuit]} {thirdPart[curNum]}</p>
                </div>
            </Tilt>
        )
    }

    return (
        <div className = 'divination' style = {{background: props.bg}}>
            <div className = 'title1'>
                <h2 style = {{color: props.h1col}}>Гадалка</h2>
            </div>

            <div style = {{background: props.lc[0]}} className = 'circle9'></div>
            <div style = {{background: props.lc[2]}} className = 'circle10'></div>
            <div className = 'div-select'>
                    <h2 style = {{color: props.textcol}}>Погадать о:</h2>
                    <div className="div-choose" style = {{backgroundColor: props.opacity}}>
                        <div className = 'life c' onClick = {() => {changeCol('life')}} style = {{background: lifeCol}}>
                            <p className="div-life a">Жизни</p>
                        </div>
                        <div className = 'love c' onClick = {() => {changeCol('love')}} style = {{background: loveCol}}>
                            <p className="div-love a">Любви</p>
                        </div>
                        <div className = 'other c' onClick = {() => {changeCol('other')}} style = {{background: otherCol}}>
                            <p className="div-other a">Другом человеке</p>
                        </div>
                    </div>

                    <input className = 'div-input' placeholder = {placeholder} style = {{backgroundColor: props.opacity}}></input>
                    <button className = 'divinate' style = {{background: buttonCol, color: 'white'}} onClick = {divinate}>Гадать</button>
            </div>
            <div className = 'div-result'>
                <Card textcol = {props.textcol} num = '1'/>
                <Card textcol = {props.textcol} num = '2'/>
                <Card textcol = {props.textcol} num = '3'/>
                <Card textcol = {props.textcol} num = '4'/>
            </div>
        </div>
    )
}

export default Divination;