import { useState } from "react/cjs/react.development"

const Cell = (props) => {
    const num = Number(props.num)

    function allyTurn() {
        if(props.playable === true) {
            if(props.list[num - 1] === 'none') {
                props.list[num - 1] = 'times'
                props.chlist(props.list)
    
                props.update()
            }
        }
    }
    
    return (
        <div className = {`cell ${props.num}`} onClick = {allyTurn}>
            <i className = {`far fa-${props.list[num - 1]}`} ref={props.re}></i>
        </div>
    )
}

export default Cell