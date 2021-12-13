import test from "../tests";
import './../styles/tests.css'

import { useState } from 'react/cjs/react.development'

const Tests = () => {
    let curTest = test.main.geography

    const [curQuest, changeQuest] = useState(curTest.questions.first)
    let quest = 1

    console.log(curTest.questions['fifth'])

    let answers = {
        "first": '',
        "second": '',
        "third": '',
        "fourth": '',
        "fifth": ''
    }

    function next() {
        if(quest === 1) {
            changeQuest(curTest.questions['two'])
        }
        if(quest === 2) {
            changeQuest(curTest.questions.third)
        }
        if(quest === 3) {
            changeQuest(curTest.questions.fourth)
        }
        if(quest === 4) {
            changeQuest(curTest.questions.fifth)
        }

        quest += 1
    }
    return (
        <div className = 'tests'>
            <div className = 'test-choose'>
                <div className = 'geography'>
                    <h2>{curTest.title}</h2>
                    <p>{curTest.desc}</p>
                </div>
            </div>
            <div className = 'test'>
                <div className = 'question'>
                    <h2 className = 'q-title'>{curQuest.question}</h2>
                    <p>{curQuest.answers.one}</p>
                    <p>{curQuest.answers.two}</p>
                    <p>{curQuest.answers.three}</p>
                    <p>{curQuest.answers.four}</p>
                </div>
            </div>
        </div>
    )
}

export default Tests;