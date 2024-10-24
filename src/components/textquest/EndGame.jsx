import React from 'react'

const EndGame = (props) => {
    return (
        <div>
            <p>Вас казнили, за {props.reason}</p>
            <p>Сыграйте ещё раз... <span style = {{textDecoration: 'underline'}}>Возможно</span> удастся не умереть.</p>
        </div>
    )
}

export default EndGame