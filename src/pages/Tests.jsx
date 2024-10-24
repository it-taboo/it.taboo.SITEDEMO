import test from "../arrays/rustests";
import './../styles/tests.css'

import { useState } from 'react/cjs/react.development'

const Tests = (props) => {
    const [curTest, changeCurtest] = useState(test.main.geography)

    const [curQuest, changeCurquest] = useState(curTest.questions.first)
    const [quest, changeQuest] = useState(1)
    const [score, changeScore] = useState(0)

    const [state, changeState] = useState('none')
    const [timeG, changeTimeG] = useState(0)

    const None = (props) => {
        return (
            <div className = 'none'>
                <h2 style = {{color: props.h1col}} className = 'none-title'>Выберите тест</h2>
                <p style = {{color: props.textcol}}>Предупреждение: Все тесты на данном сайте не отражают ваших реальных знаний, они всего лишь проверочные. Также не рекомендуется гуглить отвты, отвечайте честно.</p>
            </div>
        )
    }

    const Question = (props) => {
        const [time, changeTime] = useState(15000)

        setTimeout(() => {
            changeTime(time - 1000)
            console.log(String(time / 1000))
        }, 1000);

        if(time === 0) {
            console.log('Время вышло')
            changeState('timesup')
        }

        function chTime() {
            changeTime(60000)
        }
        return (
            <div className = 'test'>
                <div className = 'question'>
                    <h2 style = {{color: props.h1col}} className = 'q-title'>{curQuest.question}</h2>
                    <p style = {{color: props.textcol}} className = 'timer'>Осталось {time / 1000} сек.</p>
                    <div>
                        <div style = {{background: props.lc[0]}} className = 'answer' onClick = {() => {next(curQuest.answers.one); chTime()}}>
                            <p>A) {curQuest.answers.one}</p>
                        </div>
                        <div style = {{background: props.lc[0]}} className = 'answer' onClick = {() => {next(curQuest.answers.two); chTime()}}>
                            <p>B) {curQuest.answers.two}</p>
                        </div>
                        <div style = {{background: props.lc[0]}} className = 'answer' onClick = {() => {next(curQuest.answers.three); chTime()}}>
                            <p>C) {curQuest.answers.three}</p>
                        </div>
                        <div style = {{background: props.lc[0]}} className = 'answer' onClick = {() => {next(curQuest.answers.four); chTime()}}>
                            <p>D) {curQuest.answers.four}</p>
                        </div>
                    </div>
                    <p style = {{color: props.textcol}} className = 'q-score'>Вопрос {quest}/5</p>
                </div>
            </div>
        )
    }

    const Start = (props) => {
        return (
            <div className = 'start'>
                <h2 style = {{color: props.h1col}} className = 'start-title'>{curTest.title}</h2>
                <button style = {{background: props.lc[0]}} className = 'start-button' onClick = {() => {next('button')}}>Начать тест</button>
            </div>
        )
    }

    const Results = (props) => {
        return (
            <div className = 'result'>
                <h2 style = {{color: props.h1col}} className = 'res-title'>Результаты теста</h2>
                <p style = {{color: props.textcol}}>{score}/5 баллов</p>
            </div>
        )
    }

    const Timesup = (props) => {
        return (
            <div className = 'timesup'>
                <h2 style = {{color: props.h1col}} className = 'tu-title'>Время вышло!</h2>
                <p style = {{color: props.textcol}}>Попробуйте ещё раз</p>
            </div>
        )
    }

    const Part = (props) => {
        if(props.cur === 'none') {
            return (
                <None textcol = {props.textcol} h1col = {props.h1col}/>
            )
        }
        if(props.cur === 'test') {
            return (
                <Question textcol = {props.textcol} h1col = {props.h1col} lc = {props.lc}/>
            )
        }
        if(props.cur === 'result') {
            return (
                <Results textcol = {props.textcol} h1col = {props.h1col}/>
            )
        }
        if(props.cur === 'button') {
            return (
                <Start textcol = {props.textcol} h1col = {props.h1col} lc = {props.lc}/>
            )
        }
        if(props.cur === 'timesup') {
            return (
                <Timesup textcol = {props.textcol} h1col = {props.h1col}/>
            )
        }
    }

    let answers = {
        "first": '',
        "second": '',
        "third": '',
        "fourth": '',
        "fifth": ''
    }

    function next(answer) {
        if(answer === 'button') {
            changeCurquest(curTest.questions.first)
            changeState('test')
        } else {
            if(quest === 1) {
                changeCurquest(curTest.questions.second)
                answers['first'] = answer
            }
            if(quest === 2) {
                changeCurquest(curTest.questions.third)
                answers['second'] = answer
            }
            if(quest === 3) {
                changeCurquest(curTest.questions.fourth)
                answers['third'] = answer
            }
            if(quest === 4) {
                changeCurquest(curTest.questions.fifth)
                answers['fourth'] = answer
            }
            if(quest === 5) {
                changeState('result')
                answers['fifth'] = answer
            }
    
            if(answer === curQuest.correct) {
                changeScore(score + 1)
            }
            
            console.log(`${score}/5`)
    
            changeQuest(quest + 1)
            console.log(answer)
        }
    }

    function testLoad(testName) {
        changeState('button')
        changeCurtest(testName)
        changeQuest(1)
        changeScore(0)
    }
    return (
        <div className = 'tests' style = {{background: props.bg}}>
            <div className = 'test-choose'>
                <div style = {{background: props.testbg}} className = 'test-card' onClick = {() => {testLoad(test.main.geography)}}>
                    <div>
                        <h2 style = {{color: props.h1col}}>{test.main.geography.title}</h2>
                        <p style = {{color: props.textcol}}>{test.main.geography.desc}</p>
                    </div>
                    <i style = {{color: props.textcol}} className = 'fas fa-atlas'></i>
                </div>

                <div style = {{background: props.testbg}} className = 'test-card' onClick = {() => {testLoad(test.main.geometry)}}>
                    <div>
                        <h2 style = {{color: props.h1col}}>{test.main.geometry.title}</h2>
                        <p style = {{color: props.textcol}}>{test.main.geometry.desc}</p>
                    </div>
                    <i style = {{color: props.textcol}} className = 'fas fa-pencil-ruler'></i>
                </div>
                
                <div style = {{background: props.testbg}} className = 'test-card' onClick = {() => {testLoad(test.main.geography)}}>
                    <div>
                        <h2 style = {{color: props.h1col}}>{test.main.geography.title}</h2>
                        <p style = {{color: props.textcol}}>{test.main.geography.desc}</p>
                    </div>
                    <i style = {{color: props.textcol}} className = 'fas fa-feather'></i>
                </div>
            </div>
            <Part cur = {state} textcol = {props.textcol} h1col = {props.h1col} lc = {props.lc}/>
        </div>
    )
}

export default Tests;