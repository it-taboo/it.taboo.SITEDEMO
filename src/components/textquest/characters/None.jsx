import React, { useState, useRef, useEffect } from 'react'

import None from './../gameDialogues/img/none.png'

const None = (props) => {
    return (
        <div>
            <div className = 'character' ref = {char1}>
                <img className = 'char-body char-1' src = {None}></img>
                <img className = 'char-body char-1' src = {None}></img>
                <img className = 'char-body char-1' src = {None}></img>
            </div>
        </div>
    )
}

export default None